import type { PortfolioItem } from "@/types/portfolio";

const publicAsset = (path: string) =>
    `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export const videoPortfolio: PortfolioItem[] = [
    {
        id: "macallan-kumiko",
        title: "Macallan Kumiko",
        subtitle: "brand film",
        kind: "video",
        year: "2025",
        thumbnail: publicAsset("/assets/video-macallan.svg"),
        summary:
            "A polished branded spot built around atmosphere, ritual, and quiet detail.",
        description: [
            "A featured editing project from Jared's commercial portfolio.",
            "Final project notes and production details can be added here when they are ready.",
        ],
        role: "Editor",
        embedUrl:
            "https://player.vimeo.com/video/1194015992?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
        id: "progressive-game-plans",
        title: "Progressive: Game Plans",
        subtitle: "television commercial",
        kind: "video",
        year: "2020",
        thumbnail: publicAsset("/assets/video-progressive.svg"),
        summary:
            "Light comedic timing with a clean, broadcast-friendly finish.",
        description: [
            "A featured editing project from Jared's commercial portfolio.",
            "Final project notes and production details can be added here when they are ready.",
        ],
        role: "Editor",
        embedUrl:
            "https://player.vimeo.com/video/1194363454?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
        id: "california-pizza-kitchen-new-cpk",
        title: "California Pizza Kitchen - The New CPK",
        subtitle: "television commercial",
        kind: "video",
        year: "2024",
        thumbnail: publicAsset("/assets/video-cpk.svg"),
        summary:
            "Fast, playful cuts shaped for a compact social-first runtime.",
        description: [
            "A featured editing project from Jared's commercial portfolio.",
            "Final project notes and production details can be added here when they are ready.",
        ],
        role: "Editor",
        embedUrl:
            "https://player.vimeo.com/video/1194014116?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
        id: "progressive-covering-you",
        title: "Progressive: Covering You",
        subtitle: "extended commercial/promo",
        kind: "video",
        year: "2017",
        thumbnail: publicAsset("/assets/video-covering-you.svg"),
        summary:
            "A crisp commercial edit with approachable energy and brand clarity.",
        description: [
            "A featured editing project from Jared's commercial portfolio.",
            "Final project notes and production details can be added here when they are ready.",
        ],
        role: "Editor",
        embedUrl:
            "https://player.vimeo.com/video/1194014117?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
        id: "progressive-baker-mayfield-rain",
        title: "Progressive: Baker Mayfield Prepares For Rain",
        subtitle: "television commercial",
        kind: "video",
        year: "2021",
        thumbnail: publicAsset("/assets/video-baker-rain.svg"),
        summary:
            "A concise commercial edit built around character, timing, and quick payoff.",
        description: [
            "A featured editing project from Jared's commercial portfolio.",
            "Final project notes and production details can be added here when they are ready.",
        ],
        role: "Editor",
        embedUrl:
            "https://player.vimeo.com/video/1194363452?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
        id: "white-claw-smooth-thoughts",
        title: "White Claw: Smooth Thoughts",
        subtitle: "extended commercial/promo",
        kind: "video",
        year: "2019",
        thumbnail: publicAsset("/assets/video-white-claw.svg"),
        summary:
            "A personality-forward promo edit with a playful pace and clean finish.",
        description: [
            "A featured editing project from Jared's commercial portfolio.",
            "Final project notes and production details can be added here when they are ready.",
        ],
        role: "Editor",
        embedUrl:
            "https://player.vimeo.com/video/1194363450?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
        id: "progressive-dr-rick-elevator",
        title: "Progressive: Dr. Rick Elevator",
        subtitle: "television commercial (short)",
        kind: "video",
        year: "2019",
        thumbnail: publicAsset("/assets/video-dr-rick-elevator.svg"),
        summary:
            "A short-form commercial edit shaped around conversational comedy.",
        description: [
            "A featured editing project from Jared's commercial portfolio.",
            "Final project notes and production details can be added here when they are ready.",
        ],
        role: "Editor",
        embedUrl:
            "https://player.vimeo.com/video/1194363451?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
        id: "progressive-to-do-list",
        title: "Progressive: To Do List",
        subtitle: "television commercial (short)",
        kind: "video",
        year: "2022",
        thumbnail: publicAsset("/assets/video-to-do-list.svg"),
        summary:
            "A compact commercial edit with a simple setup and efficient punchline.",
        description: [
            "A featured editing project from Jared's commercial portfolio.",
            "Final project notes and production details can be added here when they are ready.",
        ],
        role: "Editor",
        embedUrl:
            "https://player.vimeo.com/video/1194363473?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
    },
];

export const writingPortfolio: PortfolioItem[] = [
    {
        id: "atlas-of-deep-ones",
        title: "Atlas of Deep Ones",
        subtitle: "short fiction anthology",
        kind: "writing",
        year: "2023",
        thumbnail: publicAsset("/assets/writing-atlas.svg"),
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
        thumbnail: publicAsset("/assets/writing-magick.svg"),
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
        thumbnail: publicAsset("/assets/writing-blacksmith.svg"),
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
