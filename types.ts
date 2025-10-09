export interface SchoolData {
  schoolName: string;
  slogan: string;
  logoUrl: string;
  heroImageUrl: string;
  about: {
    title: string;
    text: string;
  };
  programs: {
    primary: ProgramDetail;
    college: ProgramDetail;
    lycee: ProgramDetail;
  };
  testimonials: {
    quote: string;
    author: string;
    relation: string;
    photoUrl: string;
  }[];
  contact: {
    address: string;
    phone: string;
    email: string;
    socials: {
      facebook: string;
      twitter: string;
      instagram: string;
      linkedin: string;
    };
    mapUrl: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface ProgramDetail {
    title: string;
    text: string;
    details: string[];
    imageUrl: string;
}