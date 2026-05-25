<script setup lang="ts">
import AccentWave from "@/components/home/AccentWave.vue";
import HeroSection from "@/components/home/HeroSection.vue";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid.vue";
import { videoPortfolio } from "@/data/portfolio";
</script>

<template>
    <HeroSection />
    <AccentWave />

    <section class="home-work" aria-labelledby="featured-work-title">
        <div class="home-work__intro">
            <h2 id="featured-work-title">reel</h2>
        </div>
        <PortfolioGrid :items="videoPortfolio" variant="video" />
    </section>
</template>

<style scoped>
.home-work {
    width: min(100%, calc(var(--max-width) + 2 * var(--page-gutter)));
    margin: 0 auto;
    padding: 0 var(--page-gutter) 5rem;
}

.home-work__intro {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    margin-bottom: 1.2rem;
}

h2 {
    color: var(--color-accent-bright);
    font-family: var(--font-mono);
    font-size: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.16em;
    line-height: 1.2;
    text-transform: uppercase;
    margin: 0.5rem 0;
}

.home-work__intro p:last-child {
    max-width: 23rem;
    margin: 0;
    color: var(--color-text-muted);
    line-height: 1.6;
}

@media (min-width: 900px) {
    h2 {
        margin: 0.75rem 0;
    }
}

@media (max-width: 640px) {
    h2 {
        font-size: clamp(0.95rem, 5vw, 1.35rem);
        letter-spacing: 0.14em;
    }
}
</style>
