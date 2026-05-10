import type { CollectionConfig } from "payload";

export const Programs: CollectionConfig = {
  slug: "programs",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "shortDescription",
      type: "textarea",
      required: true,
    },
    {
      name: "fullDescription",
      type: "richText",
    },
    {
      name: "features",
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
      name: "image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "darkTheme",
      type: "checkbox",
      defaultValue: false,
      admin: {
        description: "Use dark background for this program card",
      },
    },
    {
      name: "sortOrder",
      type: "number",
      defaultValue: 0,
    },
  ],
};
