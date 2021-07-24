interface AdditionalInfo {
  [field: string]: string | null | File | undefined | string[] | [] | boolean;
  _id?: string;
  about?: string;
  fromDate?: string;
  toDate?: string;
  isCurrent?: boolean | undefined;
  description?: string[] | [];
  image?: string | null;
  file?: File | undefined;
}

interface Education {
  [field: string]: string | null | File | undefined | string[] | [] | boolean;
  _id?: string;
  school?: string;
  degree?: string;
  fieldOfStudy?: string;
  fromDate?: string;
  toDate?: string;
  isCurrent?: boolean | undefined;
  description?: string[] | [];
  image?: string | null;
  file?: File | undefined;
}

interface Experience {
  [field: string]: string | null | File | undefined | string[] | [] | boolean;
  _id?: string;
  company?: string;
  position?: string;
  fromDate?: string;
  toDate?: string;
  isCurrent?: boolean | undefined;
  description?: string[] | [];
  image?: string | null;
  file?: File | undefined;
}

interface PersonalInfo {
  [field: string]: string | null | File | undefined | string[] | [] | boolean;
  _id?: string;
  headerText?: string;
  firstName?: string;
  lastName?: string;
  title?: string; // about(title)
  phone?: string;
  email?: string;
  about?: string; // about(description)
  image?: string | null;
  linkedin?: string;
  github?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  file?: File | undefined;
}

interface Project {
  [field: string]: string | null | File | undefined | string[] | [] | boolean;
  _id?: string;
  project?: string | null;
  fromDate?: string;
  toDate?: string;
  isCurrent?: boolean | undefined;
  description?: string[] | [];
  image?: string | null;
  file?: File | undefined;
}

interface Skill {
  [field: string]: string | null | File | undefined | string[] | [];
  _id?: string;
  skill?: string;
  description?: string[] | [];
  image?: string | null;
  file?: File | undefined;
}

interface Template {
  _id?: string;
  name: string | null;
  additionalInfo?: AdditionalInfo[] | [];
  education?: Education[] | [];
  experience?: Experience[] | [];
  personalInfo?: PersonalInfo[] | [];
  project?: Project[] | [];
  skill?: Skill[] | [];
}

export {
  AdditionalInfo,
  Education,
  Experience,
  PersonalInfo,
  Project,
  Skill,
  Template,
};
