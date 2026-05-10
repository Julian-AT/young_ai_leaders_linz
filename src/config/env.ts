import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default("https://youngaileaderslinz.at"),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  POSTGRES_URL: z.string().optional(),
  PAYLOAD_SECRET: z.string().min(32).optional(),
  BLOB_READ_WRITE_TOKEN: z.string().optional(),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NODE_ENV: process.env.NODE_ENV,
  POSTGRES_URL: process.env.POSTGRES_URL,
  PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
  BLOB_READ_WRITE_TOKEN: process.env.BLOB_READ_WRITE_TOKEN,
});
