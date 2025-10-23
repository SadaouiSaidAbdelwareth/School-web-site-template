

import React, { useState } from 'react';
import { useTranslations } from '../../hooks/useTranslations';
import { useData } from '../../context/DataContext';
import { Logo } from '../ui/Logo';

interface RegistrationFormProps {
    closeForm: () => void;
    hideHeader?: boolean;
}

const AlgerianFlag = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className="w-6 h-4">
      <rect width="450" height="600" fill="#006233"/>
      <rect x="450" width="450" height="600" fill="#fff"/>
      <g fill="#d21033" transform="translate(450,300)">
        <circle r="120"/>
        <circle r="90" fill="#fff"/>
        <path transform="scale(75)" d="M0-1v-.3l.5.9v.3"/>
        <path id="c" d="M20 0l-20 60 20 60z" transform="rotate(18)"/>
        <use href="#c" transform="scale(-1 1)"/>
      </g>
    </svg>
);


const FormSection: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div>
        <h3 className="text-xl font-bold text-secondary-800 dark:text-white mb-6">{title}</h3>
        <div className="space-y-6">
            {children}
        </div>
    </div>
);

const FormRow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="grid sm:grid-cols-2 gap-6">
        {children}
    </div>
);

const InputField: React.FC<{ id: string, name: string, label: string, type?: string, placeholder?: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, required?: boolean }> = 
({ id, name, label, type = "text", placeholder, value, onChange, required=true }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-secondary-600 dark:text-secondary-400 mb-1">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input 
            type={type} 
            id={id} 
            name={name}
            placeholder={placeholder || label}
            value={value}
            onChange={onChange}
            className="w-full px-4 py-2.5 bg-white dark:bg-secondary-800 border border-secondary-300 dark:border-secondary-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
            required={required}
        />
    </div>
);

const SelectField: React.FC<{ id: string, name: string, label: string, value: string, onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void, children: React.ReactNode }> = 
({ id, name, label, value, onChange, children }) => (
     <div>
        <label htmlFor={id} className="block text-sm font-medium text-secondary-600 dark:text-secondary-400 mb-1">
            {label} <span className="text-red-500">*</span>
        </label>
        <select
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            className="w-full px-4 py-2.5 bg-white dark:bg-secondary-800 border border-secondary-300 dark:border-secondary-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
        >
            {children}
        </select>
    </div>
);


export default function RegistrationForm({ closeForm, hideHeader = false }: RegistrationFormProps) {
    const [step, setStep] = useState(1);
    const t = useTranslations();
    const { schoolData } = useData();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        courseType: '',
        classLevel: '',
        parentName: '',
        parentPhone: '',
        address: '',
    });

    const initialFormData = { ...formData };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
    
    const handleReset = () => {
        setStep(1);
        setFormData(initialFormData);
    }

    const steps = [
        { number: 1, label: t('step1_identity') },
        { number: 2, label: t('step2_additional_info') },
        { number: 3, label: t('step3_finalization') }
    ];

    const nextStep = () => setStep(s => Math.min(s + 1, 3));
    const prevStep = () => setStep(s => Math.max(s - 1, 1));
    
    return (
        <div className="bg-[#FBF9F4] dark:bg-secondary-950 font-sans text-secondary-700 dark:text-secondary-300">
            {!hideHeader && (
              <header className="py-6 px-4 sm:px-6 lg:px-8">
                  <div className="container mx-auto flex justify-between items-center">
                      <button onClick={closeForm} className="flex items-center space-x-2 rtl:space-x-reverse group">
                          <Logo url={schoolData.logoUrl} className="h-10 w-10 text-primary" />
                          <span className="text-xl font-bold text-secondary-800 dark:text-white group-hover:text-primary transition-colors">{schoolData.schoolName}</span>
                      </button>
                      <button onClick={handleReset} className="text-secondary-500 hover:text-primary transition-colors p-2" aria-label="Reset form">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M20 20v-5h-5M4 4a14.94 14.94 0 0113.42 6.11M20 20a14.94 14.94 0 01-13.42-6.11" /></svg>
                      </button>
                  </div>
              </header>
            )}

            <main className="py-8 sm:py-12">
                <div className="container mx-auto max-w-4xl px-4">
                    <div className="text-center">
                        <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-1 rounded-full text-sm">
                            {t('registration')}
                        </span>
                        <h1 className="text-3xl sm:text-4xl font-bold text-secondary-900 dark:text-white mt-4">
                            {t('joinSchool')} {schoolData.schoolName}
                        </h1>
                        <p className="mt-2 text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
                            {t('registrationSubtitle')}
                        </p>
                    </div>

                    <div className="mt-12 mb-8 px-4 sm:px-0">
                         <div className="flex items-start">
                            {steps.map((s, index) => (
                                <React.Fragment key={s.number}>
                                    <div className="flex flex-col items-center w-24 text-center">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors duration-300 ${step >= s.number ? 'bg-primary text-white' : 'bg-secondary-200 dark:bg-secondary-700 text-secondary-500'}`}>
                                            {s.number}
                                        </div>
                                        <p className={`mt-2 text-sm font-semibold transition-colors duration-300 ${step >= s.number ? 'text-primary' : 'text-secondary-500'}`}>{s.label}</p>
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div className={`flex-1 h-1 mt-5 transition-colors duration-300 ${step > s.number ? 'bg-primary' : 'bg-secondary-200 dark:bg-secondary-700'}`}></div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white dark:bg-secondary-900 rounded-2xl shadow-lg p-6 sm:p-10">
                        <form onSubmit={(e) => e.preventDefault()}>
                            {step === 1 && (
                                <FormSection title={t('personalInformation')}>
                                    <FormRow>
                                        <InputField id="firstName" name="firstName" label={t('studentFirstName')} value={formData.firstName} onChange={handleChange} />
                                        <InputField id="lastName" name="lastName" label={t('studentLastName')} value={formData.lastName} onChange={handleChange} />
                                    </FormRow>
                                    <FormRow>
                                        <InputField id="email" name="email" label={t('email')} type="email" value={formData.email} onChange={handleChange} placeholder="adresse@email.com"/>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-secondary-600 dark:text-secondary-400 mb-1">{t('phoneNumber')} <span className="text-red-500">*</span></label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                    <AlgerianFlag />
                                                    <span className="text-secondary-600 dark:text-secondary-400 ms-2">+213</span>
                                                </div>
                                                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full ps-[82px] px-4 py-2.5 bg-white dark:bg-secondary-800 border border-secondary-300 dark:border-secondary-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition" />
                                            </div>
                                        </div>
                                    </FormRow>
                                    <FormRow>
                                        <SelectField id="courseType" name="courseType" label={t('courseType')} value={formData.courseType} onChange={handleChange}>
                                            <option value="">{t('selectCourseType')}</option>
                                            <option value="academic_support">Soutien scolaire</option>
                                            <option value="language_course">Cours de langues</option>
                                            <option value="exam_prep">Préparation aux examens</option>
                                        </SelectField>
                                        <SelectField id="classLevel" name="classLevel" label={t('class')} value={formData.classLevel} onChange={handleChange}>
                                            <option value="">{t('selectClass')}</option>
                                            <option value="primary_1">Primaire - 1ère Année</option>
                                            <option value="primary_5">Primaire - 5ème Année</option>
                                            <option value="college_1">Collège - 1ère Année</option>
                                            <option value="college_4">Collège - 4ème Année (BEM)</option>
                                            <option value="lycee_1">Lycée - 1ère Année</option>
                                            <option value="lycee_3">Lycée - 3ème Année (BAC)</option>
                                        </SelectField>
                                    </FormRow>
                                </FormSection>
                            )}
                            {step === 2 && (
                                 <FormSection title={t('parentInformation')}>
                                    <InputField id="parentName" name="parentName" label={t('parentFullName')} value={formData.parentName} onChange={handleChange} />
                                    <InputField id="parentPhone" name="parentPhone" label={t('phoneNumber')} type="tel" value={formData.parentPhone} onChange={handleChange} />
                                    <div>
                                        <label htmlFor="address" className="block text-sm font-medium text-secondary-600 dark:text-secondary-400 mb-1">{t('homeAddress')} <span className="text-red-500">*</span></label>
                                        <textarea id="address" name="address" rows={3} value={formData.address} onChange={handleChange} className="w-full px-4 py-2.5 bg-white dark:bg-secondary-800 border border-secondary-300 dark:border-secondary-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"></textarea>
                                    </div>
                                 </FormSection>
                            )}
                            {step === 3 && (
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-secondary-800 dark:text-white">{t('confirmation')}</h3>
                                    <p className="mt-2 text-secondary-600 dark:text-secondary-400">{t('confirmRegistration')}</p>
                                    <div className="mt-6 text-start bg-secondary-50 dark:bg-secondary-800 p-4 rounded-lg space-y-2">
                                        <p><strong>{t('studentFirstName')}:</strong> {formData.firstName}</p>
                                        <p><strong>{t('studentLastName')}:</strong> {formData.lastName}</p>
                                        <p><strong>{t('email')}:</strong> {formData.email}</p>
                                        <p><strong>{t('parentFullName')}:</strong> {formData.parentName}</p>
                                    </div>
                                </div>
                            )}

                             <div className="mt-10 flex justify-between items-center">
                                {step > 1 ? (
                                    <button onClick={prevStep} className="px-6 py-2.5 font-semibold bg-secondary-200 dark:bg-secondary-700 text-secondary-800 dark:text-secondary-200 rounded-lg hover:bg-secondary-300 dark:hover:bg-secondary-600 transition-colors">{t('previousStep')}</button>
                                ) : <div />}
                                
                                {step < 3 ? (
                                    <button onClick={nextStep} className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-600 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                                        {t('nextStep')} &gt;
                                    </button>
                                ) : (
                                    <button onClick={() => { alert('Submitted!'); closeForm(); }} className="px-8 py-3 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                                        {t('submitRegistration')}
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}