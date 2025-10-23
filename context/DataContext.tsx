import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import type { SchoolData } from '../types';

const defaultSchoolData: SchoolData = {
  schoolName: "Groupe Scolaire Privé ERRIADA EL-ILMIA",
  slogan: "Le leadership par la science, l'excellence pour l'avenir.",
  logoUrl: "", // Will use SVG component if empty
  creatorPhotoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop",
  heroImageUrl: "", // Will use SVG component if empty
  about: {
    title: "À Propos de Notre École",
    text: "Fondée sur des principes de rigueur académique et de développement personnel, notre école offre un environnement d'apprentissage stimulant et bienveillant. Nous nous engageons à préparer chaque élève à devenir un citoyen du monde, confiant et compétent."
  },
  schoolLife: {
    title: "Une Vie Scolaire Épanouissante",
    text: "Nous croyons qu'un environnement d'apprentissage positif et engageant est la clé du succès. Nos élèves participent à diverses activités qui favorisent le travail d'équipe, la créativité et le leadership. Des clubs de sciences aux équipes sportives, il y a une place pour chaque passion à ERRIADA EL-ILMIA.",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop"
  },
  programs: {
    primary: {
      title: "Cycle Primaire",
      text: "Un programme d'éveil qui jette les bases de l'apprentissage des langues, des sciences et des arts, tout en favorisant la curiosité et la créativité.",
      details: ["Langues (Arabe, Français, Anglais)", "Mathématiques fondamentales", "Éveil scientifique et technologique", "Arts plastiques et musique", "Éducation physique et sportive"],
      imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop"
    },
    college: {
      title: "Cycle Collège",
      text: "Nous consolidons les acquis et introduisons des matières plus complexes. L'accent est mis sur la pensée critique et la résolution de problèmes.",
      details: ["Approfondissement des langues", "Mathématiques et Physique-Chimie", "Sciences de la Vie et de la Terre", "Histoire-Géographie et Éducation civique", "Initiation à une deuxième langue étrangère"],
      imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop"
    },
    lycee: {
      title: "Cycle Lycée",
      text: "Préparation intensive au baccalauréat et aux études supérieures. Nos élèves développent une autonomie intellectuelle et des méthodes de travail efficaces.",
      details: ["Filières spécialisées (Sciences, Lettres, Économie)", "Philosophie et pensée critique", "Méthodologie de la recherche", "Orientation universitaire et professionnelle", "Projets de fin d'études"],
      imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop"
    }
  },
  testimonials: [
    {
      quote: "Une école exceptionnelle qui a su révéler le potentiel de notre fils. L'équipe pédagogique est à l'écoute et très professionnelle.",
      author: "Famille Benali",
      relation: "Parent d'élève en 5ème année",
      photoUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
    },
    {
      quote: "J'ai passé mes meilleures années ici. Les professeurs sont passionnés et nous poussent toujours à nous dépasser.",
      author: "Amina K.",
      relation: "Ancienne élève, promotion 2022",
      photoUrl: "https://i.pravatar.cc/150?u=a042581f4e29026705d"
    },
    {
      quote: "L'infrastructure est moderne et les activités parascolaires sont très enrichissantes. Mon enfant est épanoui.",
      author: "M. Dubois",
      relation: "Parent d'élève",
      photoUrl: "https://i.pravatar.cc/150?u=a042581f4e29026706d"
    }
  ],
  contact: {
    address: "9 Rue DJEMILA, Hydra, Algérie",
    phone: "+213 553 98 04 78",
    email: "contact@erriada-elilmia.dz",
    socials: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
    },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.56518193214!2d3.041249315288768!3d36.7565319799577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fafb8b4a0c2c3%3A0x6e2b2c45b736a6e0!2sGroupe%20Scolaire%20Priv%C3%A9%20ERRIADA%20EL-ILMIA!5e0!3m2!1sfr!2sdz!4v1718903323034!5m2!1sfr!2sdz"
  },
  faqs: [
    {
      question: "Quels sont les frais de scolarité ?",
      answer: "Les frais de scolarité varient en fonction du niveau d'étude. Veuillez nous contacter directement pour recevoir notre grille tarifaire détaillée."
    },
    {
      question: "Proposez-vous des activités périscolaires ?",
      answer: "Oui, nous offrons un large éventail d'activités incluant le sport, les arts, la musique, le théâtre, et des clubs de sciences. Le programme complet est disponible sur demande."
    },
    {
      question: "Quelles sont les langues enseignées ?",
      answer: "Notre programme est trilingue : Arabe, Français et Anglais sont enseignés dès le cycle primaire. Une quatrième langue est introduite au collège."
    },
    {
      question: "Comment se déroule le processus d'admission ?",
      answer: "Le processus d'admission comprend le dépôt d'un dossier, un entretien avec la famille et l'élève, ainsi qu'un test d'évaluation pour les niveaux supérieurs."
    }
  ]
};

interface DataContextType {
  schoolData: SchoolData;
  setSchoolData: (data: SchoolData) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [schoolData, setSchoolData] = useState<SchoolData>(defaultSchoolData);

  useEffect(() => {
    try {
      const storedData = localStorage.getItem('schoolData');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        // Merge with default data to ensure new properties are present
        setSchoolData({ ...defaultSchoolData, ...parsedData });
      }
    } catch (error) {
      console.error("Failed to parse school data from localStorage", error);
    }
  }, []);
  
  const handleSetSchoolData = (data: SchoolData) => {
    setSchoolData(data);
    localStorage.setItem('schoolData', JSON.stringify(data));
  }

  return (
    <DataContext.Provider value={{ schoolData, setSchoolData: handleSetSchoolData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};