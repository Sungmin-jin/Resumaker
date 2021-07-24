import { User, Template } from "./interfaces";

const userInfo: User = {
  firstName: "John",
  lastName: "Doe",
  myTemplateList: [
    {
      templateId: "1",
      templateName: "templateName1",
      myTemplateName: "customized name1",
      thumbnailImages: [
        "https://source.unsplash.com/450x600/?nature,water",
        "https://source.unsplash.com/450x600/?nature,fire",
        "https://source.unsplash.com/450x600/?nature,wood",
        "https://source.unsplash.com/450x600/?nature,tree",
        "https://source.unsplash.com/450x600/?nature,flower",
      ],
    },
    {
      templateId: "2",
      templateName: "templateName2",
      myTemplateName: "customized name2",
      thumbnailImages: [
        "https://source.unsplash.com/450x600/?people,man",
        "https://source.unsplash.com/450x600/?people,woman",
        "https://source.unsplash.com/450x600/?people,kid",
        "https://source.unsplash.com/450x600/?people,father",
        "https://source.unsplash.com/450x600/?people,mother",
      ],
    },
    {
      templateId: "3",
      templateName: "templateName3",
      myTemplateName: "customized name3",
      thumbnailImages: [
        "https://source.unsplash.com/450x600/?country,korea",
        "https://source.unsplash.com/450x600/?country,japan",
        "https://source.unsplash.com/450x600/?country,canada",
        "https://source.unsplash.com/450x600/?country,hongkong",
        "https://source.unsplash.com/450x600/?country,china",
      ],
    },
    {
      templateId: "4",
      templateName: "templateName4",
      myTemplateName: "customized name4",
      thumbnailImages: [
        "https://source.unsplash.com/450x600/?sport,soccer",
        "https://source.unsplash.com/450x600/?sport,baseball",
        "https://source.unsplash.com/450x600/?sport,basketball",
        "https://source.unsplash.com/450x600/?sport,hockey",
        "https://source.unsplash.com/450x600/?sport,football",
      ],
    },
    {
      templateId: "5",
      templateName: "templateName5",
      myTemplateName: "customized name5",
      thumbnailImages: [
        "https://source.unsplash.com/450x600/?sport,soccer",
        "https://source.unsplash.com/450x600/?sport,baseball",
        "https://source.unsplash.com/450x600/?sport,basketball",
        "https://source.unsplash.com/450x600/?sport,hockey",
        "https://source.unsplash.com/450x600/?sport,football",
      ],
    },
    {
      templateId: "6",
      templateName: "templateName6",
      myTemplateName: "customized name6",
      thumbnailImages: [
        "https://source.unsplash.com/450x600/?sport,soccer",
        "https://source.unsplash.com/450x600/?sport,baseball",
        "https://source.unsplash.com/450x600/?sport,basketball",
        "https://source.unsplash.com/450x600/?sport,hockey",
        "https://source.unsplash.com/450x600/?sport,football",
      ],
    },
    {
      templateId: "7",
      templateName: "templateName7",
      myTemplateName: "customized name7",
      thumbnailImages: [
        "https://source.unsplash.com/450x600/?sport,soccer",
        "https://source.unsplash.com/450x600/?sport,baseball",
        "https://source.unsplash.com/450x600/?sport,basketball",
        "https://source.unsplash.com/450x600/?sport,hockey",
        "https://source.unsplash.com/450x600/?sport,football",
      ],
    },
    {
      templateId: "8",
      templateName: "templateName8",
      myTemplateName: "customized name8",
      thumbnailImages: [
        "https://source.unsplash.com/450x600/?sport,soccer",
        "https://source.unsplash.com/450x600/?sport,baseball",
        "https://source.unsplash.com/450x600/?sport,basketball",
        "https://source.unsplash.com/450x600/?sport,hockey",
        "https://source.unsplash.com/450x600/?sport,football",
      ],
    },
  ],
};

const templateList: Template[] = [
  {
    templateId: "1",
    templateName: "templateName1",
    thumbnailImages: [
      "https://source.unsplash.com/450x600/?nature,water",
      "https://source.unsplash.com/450x600/?nature,fire",
      "https://source.unsplash.com/450x600/?nature,wood",
      "https://source.unsplash.com/450x600/?nature,tree",
      "https://source.unsplash.com/450x600/?nature,flower",
    ],
  },
  {
    templateId: "2",
    templateName: "templateName2",
    thumbnailImages: [
      "https://source.unsplash.com/450x600/?people,man",
      "https://source.unsplash.com/450x600/?people,woman",
      "https://source.unsplash.com/450x600/?people,kid",
      "https://source.unsplash.com/450x600/?people,father",
      "https://source.unsplash.com/450x600/?people,mother",
    ],
  },
  {
    templateId: "3",
    templateName: "templateName3",
    thumbnailImages: [
      "https://source.unsplash.com/450x600/?country,korea",
      "https://source.unsplash.com/450x600/?country,japan",
      "https://source.unsplash.com/450x600/?country,canada",
      "https://source.unsplash.com/450x600/?country,hongkong",
      "https://source.unsplash.com/450x600/?country,china",
    ],
  },
  {
    templateId: "4",
    templateName: "templateName4",
    thumbnailImages: [
      "https://source.unsplash.com/450x600/?sport,soccer",
      "https://source.unsplash.com/450x600/?sport,baseball",
      "https://source.unsplash.com/450x600/?sport,basketball",
      "https://source.unsplash.com/450x600/?sport,hockey",
      "https://source.unsplash.com/450x600/?sport,football",
    ],
  },
  {
    templateId: "5",
    templateName: "templateName5",
    thumbnailImages: [
      "https://source.unsplash.com/450x600/?animal,dog",
      "https://source.unsplash.com/450x600/?animal,cat",
      "https://source.unsplash.com/450x600/?animal,bird",
      "https://source.unsplash.com/450x600/?animal,horse",
      "https://source.unsplash.com/450x600/?animal,tiger",
    ],
  },
  {
    templateId: "6",
    templateName: "templateName6",
    thumbnailImages: [
      "https://source.unsplash.com/450x600/?country,france",
      "https://source.unsplash.com/450x600/?country,mexico",
      "https://source.unsplash.com/450x600/?country,brazil",
      "https://source.unsplash.com/450x600/?country,england",
      "https://source.unsplash.com/450x600/?country,germany",
    ],
  },
  {
    templateId: "7",
    templateName: "templateName7",
    thumbnailImages: [
      "https://source.unsplash.com/450x600/?country,usa",
      "https://source.unsplash.com/450x600/?country,equador",
      "https://source.unsplash.com/450x600/?country,argentina",
      "https://source.unsplash.com/450x600/?country,russia",
      "https://source.unsplash.com/450x600/?country,chile",
    ],
  },
  {
    templateId: "8",
    templateName: "templateName8",
    thumbnailImages: [
      "https://source.unsplash.com/450x600/?country,peru",
      "https://source.unsplash.com/450x600/?country,paraguay",
      "https://source.unsplash.com/450x600/?country,uruguay",
      "https://source.unsplash.com/450x600/?country,cuba",
      "https://source.unsplash.com/450x600/?country,panama",
    ],
  },
];

const imagesForTopBannerSlider: string[] = [
  "https://source.unsplash.com/450x450/?nature,water",
  "https://source.unsplash.com/450x450/?nature,fire",
  "https://source.unsplash.com/450x450/?nature,wood",
  "https://source.unsplash.com/450x450/?nature,tree",
  "https://source.unsplash.com/450x450/?nature,flower",
];

const imagesForPopularTemplateSlider: string[] = [
  "https://source.unsplash.com/450x300/?country,canada",
  "https://source.unsplash.com/450x300/?country,japan",
  "https://source.unsplash.com/450x300/?country,korea",
  "https://source.unsplash.com/450x300/?country,france",
  "https://source.unsplash.com/450x300/?country,usa",
];

export {
  userInfo,
  templateList,
  imagesForTopBannerSlider,
  imagesForPopularTemplateSlider,
};
