import type { Metadata } from "next";

import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { SmoothScroll } from "@/components/shared/smooth-scroll";

export const metadata: Metadata = {
  title: "Legal",
  description: "Legal information for Young AI Leaders Linz.",
};

export default function LegalPage() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <main className="page-margins mx-auto max-w-[1280px]">
        <div>
          <section className="grid grid-cols-3 gap-6 pt-20 pb-40 md:gap-10 md:pt-30 md:pb-30 lg:gap-20 lg:pt-20 lg:pb-10">
            <div className="col-span-3 lg:col-span-2">
              <h1 className="h1 mb-6">Legal</h1>
              <div className="body-md max-w-[60ch] space-y-6">
                <div>
                  <p className="font-medium">Organization</p>
                  <p className="text-secondary">Young AI Leaders Linz</p>
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-secondary">Linz, Austria</p>
                </div>
                <div>
                  <p className="font-medium">Contact</p>
                  <p className="text-secondary">office@youngaileaderslinz.at</p>
                </div>
                <div>
                  <p className="font-medium">Network affiliation</p>
                  <p className="text-secondary">
                    Part of the AI for Good global ecosystem (UN/ITU). Young AI Leaders is the youth
                    community within AI for Good.
                  </p>
                </div>
                <div>
                  <p className="font-medium">Disclaimer</p>
                  <p className="text-secondary">
                    Content on this website is provided for informational purposes. We make no
                    guarantees regarding completeness or accuracy. External links are provided for
                    convenience and do not imply endorsement.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <div className="page-margins mx-auto max-w-[1280px]">
        <Footer />
      </div>
    </>
  );
}
