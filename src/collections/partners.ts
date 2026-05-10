import type { CollectionConfig } from "payload";

export const Partners: CollectionConfig = {
  slug: "partners",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "Global Network", value: "global" },
        { label: "Public Sector", value: "public" },
        { label: "Academic", value: "academic" },
        { label: "Industry", value: "industry" },
        { label: "Community", value: "community" },
      ],
    },
    {
      name: "website",
      type: "text",
    },
    {
      name: "scale",
      type: "number",
      defaultValue: 1,
      admin: {
        description: "Logo display scale factor (1 = default)",
      },
    },
    {
      name: "sortOrder",
      type: "number",
      defaultValue: 0,
    },
  ],
};
