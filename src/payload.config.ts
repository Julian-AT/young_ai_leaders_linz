import { fileURLToPath } from "node:url";

import { vercelPostgresAdapter } from "@payloadcms/db-vercel-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import path from "path";
import { buildConfig } from "payload";
import sharp from "sharp";

import { Media } from "@/collections/media";
import { Partners } from "@/collections/partners";
import { Programs } from "@/collections/programs";
import { Users } from "@/collections/users";
import { AboutPage } from "@/globals/about-page";
import { FooterContent } from "@/globals/footer-content";
import { HomePage } from "@/globals/home-page";
import { Navigation } from "@/globals/navigation";
import { SiteSettings } from "@/globals/site-settings";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Partners, Programs],
  globals: [SiteSettings, Navigation, HomePage, AboutPage, FooterContent],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: vercelPostgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || "",
    },
  }),
  sharp,
  plugins: [
    vercelBlobStorage({
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || "",
    }),
  ],
});
