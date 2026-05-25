<script setup lang="ts">
import PortfolioGrid from "@/components/portfolio/PortfolioGrid.vue";
import PageBackButton from "@/components/ui/PageBackButton.vue";
import { writingPortfolio } from "@/data/portfolio";
</script>

<template>
    <section class="writing-page page-shell">
        <PageBackButton class="writing-page__back" />

        <div class="writing-page__copy">
            <p class="eyebrow">published fiction</p>
            <h1 class="page-title">writing</h1>
            <p class="lede">
                Jared is a published author with several short fiction pieces
                available to peruse at your leisure.
            </p>
        </div>

        <PortfolioGrid :items="writingPortfolio" variant="writing" />
    </section>
</template>

<style scoped>
.writing-page {
    display: grid;
    grid-template-columns: minmax(18rem, 0.9fr) minmax(0, 1.35fr);
    gap: clamp(2.5rem, 7vw, 6rem);
    align-items: center;
}

.writing-page__back {
    grid-column: 1 / -1;
    margin-bottom: calc(clamp(2.5rem, 7vw, 6rem) * -0.58);
}

.writing-page__copy {
    padding-bottom: clamp(0rem, 5vw, 5rem);
}

.writing-page .page-title {
    letter-spacing: 0.04em;
}

@media (max-width: 900px) {
    .writing-page {
        grid-template-columns: 1fr;
        align-items: start;
    }

    .writing-page__back {
        margin-bottom: -1.25rem;
    }
}
</style>
