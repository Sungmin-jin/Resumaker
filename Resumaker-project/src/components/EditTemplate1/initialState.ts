import { Template } from "../../modules/template/interfaces";
import facebook from "../../images/Template1/facebook.png";
import instagram from "../../images/Template1/instagram.png";
import linkedin from "../../images/Template1/linkedin.png";
import github from "../../images/Template1/github.png";

export const initialState: Template = {
  name: "template1",
  personalInfo: [
    {
      headerText: "",
      title: "",
      about: "",
      firstName: "",
      lastName: "",
      email: "",
      file: undefined,
      image: null,
      github: undefined,
      linkedin: undefined,
      facebook: undefined,
      instagram: undefined,
    },
  ],
  project: [
    {
      project: "",
      description: [""],
      file: undefined,
      image: null,
    },
  ],
  experience: [
    {
      company: "",
      position: "",
      fromDate: "",
      toDate: "",
      isCurrent: undefined,
      description: [""],
    },
  ],
  education: [
    {
      school: "",
      degree: "",
      fieldOfStudy: "",
      fromDate: "",
      toDate: "",
      isCurrent: undefined,
      description: [""],
    },
  ],
  additionalInfo: [
    {
      description: [""],
    },
  ],
};

export const sampleInitialState: Template = {
  name: "sampleTemplate1",
  personalInfo: [
    {
      headerText: "Hello I'm John Doe.",
      title: "Who's this guy",
      about: "I'm a full-stack web developer.",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@gmail.com",
      file: undefined,
      image:
        "https://images.unsplash.com/photo-1510459641407-c6f2a047ce89?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      github,
      linkedin,
      facebook,
      instagram,
    },
  ],
  project: [
    {
      project: "Bookito",
      description: ["Colors are an important aspect of your brand's identity"],
      file: undefined,
      image:
        "https://images.unsplash.com/photo-1534531173927-aeb928d54385?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      project: "Resumaker",
      description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
      file: undefined,
      image:
        "https://images.unsplash.com/photo-1534531173927-aeb928d54385?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      project: "Kreamin Studio",
      description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
      file: undefined,
      image:
        "https://images.unsplash.com/photo-1577003811926-53b288a6e5d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
  ],
  experience: [
    {
      company: "Google",
      position: "Web Developer",
      fromDate: "2021-06-16",
      toDate: "2021-06-16",
      isCurrent: undefined,
      description: [""],
    },
    {
      company: "Facebook",
      position: "Senior Developer",
      fromDate: "2021-06-16",
      toDate: "2021-06-16",
      isCurrent: undefined,
      description: [""],
    },
  ],
  education: [
    {
      school: "BCIT",
      degree: "Diploma",
      fieldOfStudy: "CST",
      fromDate: "2021-06-16",
      toDate: "2021-06-16",
      isCurrent: undefined,
      description: ["Great school"],
    },
    {
      school: "UBC",
      degree: "Bachelor",
      fieldOfStudy: "CST",
      fromDate: "2021-06-16",
      toDate: "2021-06-16",
      isCurrent: undefined,
      description: ["Great University"],
    },
  ],
  additionalInfo: [
    {
      description: ["Hello, world!"],
    },
  ],
};
