import { getPayload } from "@/lib/payload";

export async function getSiteSettings() {
  const payload = await getPayload();
  return payload.findGlobal({ slug: "site-settings" });
}

export async function getNavigation() {
  const payload = await getPayload();
  return payload.findGlobal({ slug: "navigation" });
}

export async function getHomePage() {
  const payload = await getPayload();
  return payload.findGlobal({ slug: "home-page" });
}

export async function getAboutPage() {
  const payload = await getPayload();
  return payload.findGlobal({ slug: "about-page" });
}

export async function getFooterContent() {
  const payload = await getPayload();
  return payload.findGlobal({ slug: "footer-content" });
}

export async function getPartners() {
  const payload = await getPayload();
  return payload.find({
    collection: "partners",
    sort: "sortOrder",
    limit: 100,
  });
}

export async function getPrograms() {
  const payload = await getPayload();
  return payload.find({
    collection: "programs",
    sort: "sortOrder",
    limit: 100,
  });
}
