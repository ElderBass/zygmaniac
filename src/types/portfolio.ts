export type PortfolioKind = "video" | "writing";

export interface PortfolioItem {
    id: string;
    title: string;
    subtitle: string;
    kind: PortfolioKind;
    year: string;
    thumbnail: string;
    summary: string;
    description: string[];
    role?: string;
    publication?: string;
    embedUrl?: string;
    externalUrl?: string;
    ctaLabel?: string;
}
