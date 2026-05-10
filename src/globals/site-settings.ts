import type { GlobalConfig } from "payload";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "siteName",
      type: "text",
      required: true,
      defaultValue: "Young AI Leaders Linz",
    },
    {
      name: "applyUrl",
      type: "text",
      required: true,
      admin: {
        description: "URL for the application form (e.g. Google Forms link)",
      },
    },
    {
      name: "contactEmail",
      type: "email",
      defaultValue: "office@youngaileaderslinz.at",
    },
    {
      name: "address",
      type: "text",
      defaultValue: "Linz, Austria",
    },
    {
      name: "organizationDescription",
      type: "textarea",
      defaultValue: "Part of AI for Good",
    },
  ],
};
