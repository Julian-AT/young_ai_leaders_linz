import type { GlobalConfig } from "payload";

export const HomePage: GlobalConfig = {
  slug: "home-page",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "heroTitle",
      type: "text",
      required: true,
      defaultValue: "Young AI Leaders Linz",
    },
    {
      name: "heroSubtitle",
      type: "textarea",
    },
    {
      name: "heroGalleryImages",
      type: "array",
      maxRows: 5,
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
    {
      name: "missionStatement",
      type: "text",
      defaultValue: "100+ hubs. 13 countries. One mission.",
    },
    {
      name: "identityTitle",
      type: "text",
      defaultValue: "Our Identity",
    },
    {
      name: "identityBody",
      type: "textarea",
    },
    {
      name: "focusAreas",
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
      name: "stats",
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
    {
      name: "statsTitle",
      type: "text",
    },
    {
      name: "statsBody",
      type: "textarea",
    },
  ],
};
