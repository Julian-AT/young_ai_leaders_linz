import type { GlobalConfig } from "payload";

export const FooterContent: GlobalConfig = {
  slug: "footer-content",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "typingPhrases",
      type: "array",
      fields: [
        {
          name: "phrase",
          type: "text",
          required: true,
        },
      ],
      admin: {
        description: "Phrases that cycle in the footer typewriter animation",
      },
    },
    {
      name: "copyrightText",
      type: "text",
      defaultValue: "Young AI Leaders Linz 2025",
    },
    {
      name: "internalLinks",
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
      ],
    },
    {
      name: "externalLinks",
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
      ],
    },
  ],
};
