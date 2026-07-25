import { InstagramIcon, Linkedin01Icon, TiktokIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export const APPLY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScPMYklf0RthaF-W_tQjiPMNaB8oxb0uT3IDmEkz2-hQnF7sA/viewform";

export const CONTACT_EMAIL = "office@youngaileaderslinz.at";

export const ADDRESS = "Linz, Austria";

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Partners", href: "/partners" },
  { label: "Join Us", href: "/join" },
];

export const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/youngaileaderslinz",
    icon: <HugeiconsIcon icon={Linkedin01Icon} size={16} strokeWidth={1.5} />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/youngaileaderslinz/",
    icon: <HugeiconsIcon icon={InstagramIcon} size={16} strokeWidth={1.5} />,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@youngaileaderslinz",
    icon: <HugeiconsIcon icon={TiktokIcon} size={16} strokeWidth={1.5} />,
  },
];
