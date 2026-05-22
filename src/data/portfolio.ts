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
        summary:
            "Light comedic timing with a clean, broadcast-friendly finish.",
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
        summary:
            "Fast, playful cuts shaped for a compact social-first runtime.",
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
        externalUrl:
            "https://www.amazon.com/dp/1963760115/ref=cm_sw_r_as_gl_apa_gl_i_ADEYD501ZY4QWX2321EZ?linkCode=ml1&tag=obsidianbutte-20&linkId=671a529b4b7c7b8044e7dd1cb55a9aa3",
        ctaLabel: "View Publication",
    },
    {
        id: "magick-and-malice",
        title: "Magick and Malice",
        subtitle: "fantasy anthology",
        kind: "writing",
        year: "2022",
        thumbnail: "/assets/writing-magick.svg",
        summary:
            "A fantasy publication entry with a cover-forward presentation.",
        description: [
            "This entry demonstrates how non-video work opens in the same lightbox system while presenting text, cover art, and outbound links.",
            "Final copy can be swapped into the typed portfolio data without changing component code.",
        ],
        publication: "Compiled by Dragon Soul Press",
        externalUrl:
            "https://www.amazon.com/dp/B0DMP95B4C?ref=cm_sw_r_ffobk_cso_cp_apan_dp_XV1V4H5A7YT36EVD6SKF&ref_=cm_sw_r_ffobk_cso_cp_apan_dp_XV1V4H5A7YT36EVD6SKF&social_share=cm_sw_r_ffobk_cso_cp_apan_dp_XV1V4H5A7YT36EVD6SKF&bestFormat=true&rsd=KfPhis1ckCasnlA7PJ2dEJ4W0Cknym1%2FDtG5z7JXfVhhvvE4jOu%2Fmn8kcAcBEUYluiz5Ev09P9Ye%2FyYaVIqlbAktTHG4QKFNNF5bn8oc1AQs&edk=AQIDAHi1lw%2FM8UbbSMD9ScOOFEmBMHMthHeEhqDaQYPJUAX3jQEVuuvdk%2FObpg2sb2uMT356AAAAfjB8BgkqhkiG9w0BBwagbzBtAgEAMGgGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMWZt3S7Olg%2FJvBZ8yAgEQgDvRAEXYLNYeN7PZH5ZNmYstv4EGnhROs3%2F%2FiHWOllTkcE2uTZhZLGLQsZ8fVEo8Hs3vLB%2BYJf3gTNKEcw%3D%3D",
        ctaLabel: "Read More",
    },
    {
        id: "the-blacksmith",
        title: "The Blacksmith",
        subtitle: "selected story",
        kind: "writing",
        year: "2026",
        thumbnail: "/assets/writing-blacksmith.svg",
        summary: "A moody standalone story card for additional writing work.",
        description: [
            "Written for Abyss & Apex, a Hugo-nominated magazine of Speculative Fiction.",
            "Available to read in the magazine's digital edition.",
        ],
        publication: "Abyss & Apex",
        externalUrl: "https://www.abyssapexzine.com/2026/01/the-blacksmith/",
        ctaLabel: "Read Story",
    },
];
