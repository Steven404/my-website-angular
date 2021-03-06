export interface Pages{
    title: string;
    path: string;
}

export interface WorkExperienceCard{
    description: string;
    employer: string;
    fromDate: Date;
    untilDate: Date;
    location: string;
    title: string;
}

export interface ProjectCard{
    category: string;
    description: string;
    isFinished: boolean;
    title: string;
    languages: string[];
    links: string[];
}

export interface ContactInfo{
    email: string;
    phoneNo: string;
    social: string[];
}

export class ContactInfo1{
  email: string;
  phoneNo: string;
  social: string[];

  constructor(){
    this.email = '';
    this.phoneNo = '';
    this.social = new Array();
  }
}
