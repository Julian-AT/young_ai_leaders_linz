import type { GlobalConfig } from "payload";

export const AboutPage: GlobalConfig = {
  slug: "about-page",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      defaultValue: "About Us",
    },
    {
      name: "subtitle",
      type: "textarea",
    },
    {
      name: "pillars",
      type: "array",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "textarea",
          required: true,
        },
      ],
    },
    {
      name: "networkTitle",
      type: "text",
    },
    {
      name: "networkBody",
      type: "textarea",
    },
    {
      name: "networkStats",
      type: "array",
      fields: [
        {
          name: "value",
          type: "text",
          required: true,
        },
        {
          name: "label",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};
