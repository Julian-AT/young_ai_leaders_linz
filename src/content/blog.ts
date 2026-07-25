import { z } from "zod";

import { frontmatter as aiAssistantForYourWorkday } from "@/content/blog/ai-assistant-for-your-workday.mdx";
import { frontmatter as aiForGoodSummit2025 } from "@/content/blog/ai-for-good-summit-2025.mdx";
import { frontmatter as aiForGoodSummit2026 } from "@/content/blog/ai-for-good-summit-2026.mdx";
import { frontmatter as aiHouseDavosRisingInnovators } from "@/content/blog/ai-house-davos-rising-innovators.mdx";
import { frontmatter as aiLiteracyAkademischesGymnasium } from "@/content/blog/ai-literacy-akademisches-gymnasium.mdx";
import { frontmatter as aiLiteracyPilot2025 } from "@/content/blog/ai-literacy-pilot-2025.mdx";
import { frontmatter as aiStakeholderForum } from "@/content/blog/ai-stakeholder-forum.mdx";
import { frontmatter as aiStudentIndustryProjectsJku } from "@/content/blog/ai-student-industry-projects-jku.mdx";
import { frontmatter as applyAiAlliance } from "@/content/blog/apply-ai-alliance.mdx";
import { frontmatter as asaiMembership } from "@/content/blog/asai-membership.mdx";
import { frontmatter as businessUpperAustriaItCluster } from "@/content/blog/business-upper-austria-it-cluster.mdx";
import { frontmatter as catTechCollabHackathon } from "@/content/blog/cat-tech-collab-hackathon.mdx";
import { frontmatter as catalystNowNetwork } from "@/content/blog/catalyst-now-network.mdx";
import { frontmatter as catalyzingChangeAiLiteracyWebinar } from "@/content/blog/catalyzing-change-ai-literacy-webinar.mdx";
import { frontmatter as codingCommunityRoundtable } from "@/content/blog/coding-community-roundtable.mdx";
import { frontmatter as crossBorderDialogueMikulov } from "@/content/blog/cross-border-dialogue-mikulov.mdx";
import { frontmatter as devfestLinzAiHackathon } from "@/content/blog/devfest-linz-ai-hackathon.mdx";
import { frontmatter as devfestWinnersDynatrace } from "@/content/blog/devfest-winners-dynatrace.mdx";
import { frontmatter as esfPlusCommunityOfPractice } from "@/content/blog/esf-plus-community-of-practice.mdx";
import { frontmatter as europeanHackathonHubLaunch } from "@/content/blog/european-hackathon-hub-launch.mdx";
import { frontmatter as europeanYoungInnovatorsFestival } from "@/content/blog/european-young-innovators-festival.mdx";
import { frontmatter as futureSkillsCircle } from "@/content/blog/future-skills-circle.mdx";
import { frontmatter as gdgLinzCollaboration } from "@/content/blog/gdg-linz-collaboration.mdx";
import { frontmatter as globalHaickathonLinz } from "@/content/blog/global-haickathon-linz.mdx";
import { frontmatter as hackForHealthEquity } from "@/content/blog/hack-for-health-equity.mdx";
import { frontmatter as hackNationApplications } from "@/content/blog/hack-nation-applications.mdx";
import { frontmatter as hackNationGlobalAiHackathon } from "@/content/blog/hack-nation-global-ai-hackathon.mdx";
import { frontmatter as horizonSummitAiGovernanceIndia } from "@/content/blog/horizon-summit-ai-governance-india.mdx";
import { frontmatter as hubLaunch } from "@/content/blog/hub-launch.mdx";
import { frontmatter as humanResilienceAiReport } from "@/content/blog/human-resilience-ai-report.mdx";
import { frontmatter as ideaRealityCheckWorkshop } from "@/content/blog/idea-reality-check-workshop.mdx";
import { frontmatter as ieeeGenaiForGoodChallenge } from "@/content/blog/ieee-genai-for-good-challenge.mdx";
import { frontmatter as kiInDerPraxisPodcast } from "@/content/blog/ki-in-der-praxis-podcast.mdx";
import { frontmatter as kiTransferWkooe } from "@/content/blog/ki-transfer-wkooe.mdx";
import { frontmatter as lightningTalksAiAndTheBrain } from "@/content/blog/lightning-talks-ai-and-the-brain.mdx";
import { frontmatter as litOicCooperation } from "@/content/blog/lit-oic-cooperation.mdx";
import { frontmatter as pactForSkills } from "@/content/blog/pact-for-skills.mdx";
import { frontmatter as shebuildsLovableWorkshop } from "@/content/blog/shebuilds-lovable-workshop.mdx";
import { frontmatter as unGlobalDialogueConsultation } from "@/content/blog/un-global-dialogue-consultation.mdx";
import { frontmatter as unescoMilAlliance } from "@/content/blog/unesco-mil-alliance.mdx";
import { frontmatter as vivatechAcademicPartnership } from "@/content/blog/vivatech-academic-partnership.mdx";
import { frontmatter as warForAiTalent } from "@/content/blog/war-for-ai-talent.mdx";
import { frontmatter as wpfhaSideEvent } from "@/content/blog/wpfha-side-event.mdx";
import { frontmatter as zukunftDigitalisierung2025 } from "@/content/blog/zukunft-digitalisierung-2025.mdx";

const postSchema = z.object({
  title: z.string(),
  date: z.iso.date(),
  author: z.string(),
  excerpt: z.string(),
  cover: z.string(),
  coverAlt: z.string(),
});

export interface BlogPost extends z.infer<typeof postSchema> {
  slug: string;
}

function createPost(slug: string, frontmatter: unknown): BlogPost {
  return { slug, ...postSchema.parse(frontmatter) };
}

export const BLOG_POSTS: BlogPost[] = [
  createPost("hub-launch", hubLaunch),
  createPost("ai-house-davos-rising-innovators", aiHouseDavosRisingInnovators),
  createPost("business-upper-austria-it-cluster", businessUpperAustriaItCluster),
  createPost("ai-stakeholder-forum", aiStakeholderForum),
  createPost("future-skills-circle", futureSkillsCircle),
  createPost("ai-literacy-akademisches-gymnasium", aiLiteracyAkademischesGymnasium),
  createPost("ki-in-der-praxis-podcast", kiInDerPraxisPodcast),
  createPost("ai-for-good-summit-2025", aiForGoodSummit2025),
  createPost("horizon-summit-ai-governance-india", horizonSummitAiGovernanceIndia),
  createPost("coding-community-roundtable", codingCommunityRoundtable),
  createPost("ai-student-industry-projects-jku", aiStudentIndustryProjectsJku),
  createPost("catalyst-now-network", catalystNowNetwork),
  createPost("war-for-ai-talent", warForAiTalent),
  createPost("ki-transfer-wkooe", kiTransferWkooe),
  createPost("zukunft-digitalisierung-2025", zukunftDigitalisierung2025),
  createPost("catalyzing-change-ai-literacy-webinar", catalyzingChangeAiLiteracyWebinar),
  createPost("cat-tech-collab-hackathon", catTechCollabHackathon),
  createPost("global-haickathon-linz", globalHaickathonLinz),
  createPost("european-young-innovators-festival", europeanYoungInnovatorsFestival),
  createPost("gdg-linz-collaboration", gdgLinzCollaboration),
  createPost("devfest-linz-ai-hackathon", devfestLinzAiHackathon),
  createPost("lightning-talks-ai-and-the-brain", lightningTalksAiAndTheBrain),
  createPost("devfest-winners-dynatrace", devfestWinnersDynatrace),
  createPost("ai-literacy-pilot-2025", aiLiteracyPilot2025),
  createPost("lit-oic-cooperation", litOicCooperation),
  createPost("unesco-mil-alliance", unescoMilAlliance),
  createPost("ieee-genai-for-good-challenge", ieeeGenaiForGoodChallenge),
  createPost("shebuilds-lovable-workshop", shebuildsLovableWorkshop),
  createPost("apply-ai-alliance", applyAiAlliance),
  createPost("hack-nation-applications", hackNationApplications),
  createPost("hack-for-health-equity", hackForHealthEquity),
  createPost("esf-plus-community-of-practice", esfPlusCommunityOfPractice),
  createPost("human-resilience-ai-report", humanResilienceAiReport),
  createPost("asai-membership", asaiMembership),
  createPost("un-global-dialogue-consultation", unGlobalDialogueConsultation),
  createPost("hack-nation-global-ai-hackathon", hackNationGlobalAiHackathon),
  createPost("cross-border-dialogue-mikulov", crossBorderDialogueMikulov),
  createPost("wpfha-side-event", wpfhaSideEvent),
  createPost("idea-reality-check-workshop", ideaRealityCheckWorkshop),
  createPost("pact-for-skills", pactForSkills),
  createPost("vivatech-academic-partnership", vivatechAcademicPartnership),
  createPost("ai-assistant-for-your-workday", aiAssistantForYourWorkday),
  createPost("european-hackathon-hub-launch", europeanHackathonHubLaunch),
  createPost("ai-for-good-summit-2026", aiForGoodSummit2026),
].sort((a, b) => b.date.localeCompare(a.date));

export function formatPostDate(isoDate: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00.000Z`));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getAdjacentPosts(slug: string): {
  previous: BlogPost | undefined;
  next: BlogPost | undefined;
} {
  const index = BLOG_POSTS.findIndex((post) => post.slug === slug);
  if (index === -1) {
    return { previous: undefined, next: undefined };
  }

  return {
    // Newest-first list: "previous" is older (higher index), "next" is newer (lower index)
    previous: BLOG_POSTS[index + 1],
    next: BLOG_POSTS[index - 1],
  };
}
