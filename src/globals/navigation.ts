import type { GlobalConfig } from "payload";

export const Navigation: GlobalConfig = {
  slug: "navigation",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "mainNav",
      type: "array",
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
        },
        {
          name: "href",
          type: "text",
          required: true,
        },
        {
          name: "external",
          type: "checkbox",
          defaultValue: false,
        },
      ],
    },
    {
      name: "socialLinks",
      type: "array",
      fields: [
        {
          name: "platform",
          type: "select",
          required: true,
          options: [
            { label: "LinkedIn", value: "linkedin" },
            { label: "Instagram", value: "instagram" },
            { label: "TikTok", value: "tiktok" },
            { label: "Twitter / X", value: "twitter" },
            { label: "YouTube", value: "youtube" },
            { label: "GitHub", value: "github" },
          ],
        },
        {
          name: "url",
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
