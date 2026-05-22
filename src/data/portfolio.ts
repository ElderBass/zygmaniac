import type { PortfolioItem } from "@/types/portfolio";

export const videoPortfolio: PortfolioItem[] = [
  {
    id: "macallan-kumiko",
    title: "Macallan Kumiko",
    subtitle: "brand film",
    kind: "video",
    year: "2025",
    thumbnail: "/assets/video-macallan.svg",
    summary:
      "A polished branded spot built around atmosphere, ritual, and quiet detail.",
    description: [
      "A refined editing showcase for a luxury-forward campaign, paced around small gestures and warm interior textures.",
      "Use this slot for a Vimeo or YouTube embed when the final reel URL is ready.",
    ],
    role: "Editor",
    embedUrl: "https://player.vimeo.com/video/76979871",
  },
  {
    id: "progressive-game-plans",
    title: "Progressive Game Plans",
    subtitle: "commercial",
    kind: "video",
    year: "2024",
    thumbnail: "/assets/video-progressive.svg",
    summary: "Light comedic timing with a clean, broadcast-friendly finish.",
    description: [
      "A sample commercial entry for short-form campaign work and branded comedy pacing.",
      "The card and modal are wired for final production copy, credits, and video embeds.",
    ],
    role: "Editor",
    embedUrl: "https://player.vimeo.com/video/22439234",
  },
  {
    id: "california-pizza-kitchen",
    title: "California Pizza Kitchen",
    subtitle: "social spot",
    kind: "video",
    year: "2024",
    thumbnail: "/assets/video-cpk.svg",
    summary: "Fast, playful cuts shaped for a compact social-first runtime.",
    description: [
      "A punchy portfolio item for food, lifestyle, and social content.",
      "The current embed is a placeholder so the interaction can be tested end-to-end.",
    ],
    role: "Editor",
    embedUrl: "https://player.vimeo.com/video/1084537",
  },
  {
    id: "progressive-covering-you",
    title: "Progressive Covering You",
    subtitle: "campaign edit",
    kind: "video",
    year: "2023",
    thumbnail: "/assets/video-covering-you.svg",
    summary:
      "A crisp commercial edit with approachable energy and brand clarity.",
    description: [
      "Designed as a flexible placeholder for another featured editing project.",
      "Replace the copy, thumbnail, and embed URL in the data file as real assets become available.",
    ],
    role: "Editor",
    embedUrl: "https://player.vimeo.com/video/146022717",
  },
];

export const writingPortfolio: PortfolioItem[] = [
  {
    id: "atlas-of-deep-ones",
    title: "Atlas of Deep Ones",
    subtitle: "short fiction anthology",
    kind: "writing",
    year: "2023",
    thumbnail: "/assets/writing-atlas.svg",
    summary:
      "A speculative fiction piece in an anthology of strange maps and stranger waters.",
    description: [
      "A showcase entry for published short fiction, with space for story synopsis, publication notes, and a purchase or reading link.",
      "The writing modal favors cover art, atmosphere, and concise context over dense biography.",
    ],
    publication: "Edited by Elizabeth Davis and Gevera Bert Piedmont",
    externalUrl: "https://example.com",
    ctaLabel: "View Publication",
  },
  {
    id: "magick-and-malice",
    title: "Magick and Malice",
    subtitle: "fantasy anthology",
    kind: "writing",
    year: "2022",
    thumbnail: "/assets/writing-magick.svg",
    summary: "A fantasy publication entry with a cover-forward presentation.",
    description: [
      "This entry demonstrates how non-video work opens in the same lightbox system while presenting text, cover art, and outbound links.",
      "Final copy can be swapped into the typed portfolio data without changing component code.",
    ],
    publication: "Compiled by Dragon Soul Press",
    externalUrl: "https://example.com",
    ctaLabel: "Read More",
  },
  {
    id: "the-question",
    title: "The Question",
    subtitle: "selected story",
    kind: "writing",
    year: "2021",
    thumbnail: "/assets/writing-question.svg",
    summary: "A moody standalone story card for additional writing work.",
    description: [
      "A third writing slot keeps the page balanced and gives Jared a reusable pattern for future publications.",
      "The hover treatment remains consistent with the video grid while the modal changes content type.",
    ],
    publication: "Independent selection",
    externalUrl: "https://example.com",
    ctaLabel: "Open Link",
  },
];
