<script setup lang="ts">
import type { PortfolioItem } from "@/types/portfolio";

defineProps<{
    item: PortfolioItem;
}>();

defineEmits<{
    select: [item: PortfolioItem];
}>();
</script>

<template>
    <button class="portfolio-card" type="button" @click="$emit('select', item)">
        <img
            class="portfolio-card__image"
            :src="item.thumbnail"
            :alt="`${item.title} thumbnail`"
        />
        <span class="portfolio-card__shade" aria-hidden="true"></span>
        <span class="portfolio-card__content">
            <span class="portfolio-card__title">{{ item.title }}</span>
            <span class="portfolio-card__subtitle">{{ item.subtitle }}</span>
        </span>
    </button>
</template>

<style scoped>
.portfolio-card {
    position: relative;
    display: block;
    width: 100%;
    overflow: hidden;
    border: 0;
    border-radius: 0;
    aspect-ratio: 16 / 9;
    background: var(--color-surface);
    box-shadow: 0 1.25rem 3rem rgba(0, 0, 0, 0.16);
    cursor: pointer;
    isolation: isolate;
    padding: 0;
    text-align: left;
}

.portfolio-card__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.01);
    transition:
        filter 300ms ease,
        transform 600ms var(--ease-out);
}

.portfolio-card__shade {
    position: absolute;
    inset: 0;
    z-index: 1;
    background:
        linear-gradient(180deg, rgba(0, 0, 0, 0.18), rgba(0, 0, 0, 0.64)),
        rgba(15, 22, 15, 0.3);
    opacity: 0;
    transition: opacity 260ms ease;
}

.portfolio-card__content {
    position: absolute;
    inset: 0;
    z-index: 2;
    display: grid;
    place-content: center;
    gap: 0.75rem;
    padding: 1.25rem;
    color: var(--color-text);
    opacity: 0;
    text-align: center;
    transform: translateY(0.75rem);
    transition:
        opacity 260ms ease,
        transform 360ms var(--ease-out);
}

.portfolio-card__title {
    font-family: var(--font-mono);
    font-size: clamp(0.9rem, 1.4vw, 1.2rem);
    font-weight: 800;
    letter-spacing: 0.18em;
    line-height: 1.25;
    text-transform: uppercase;
}

.portfolio-card__subtitle {
    color: var(--color-text-muted);
    font-family: var(--font-mono);
    font-size: 0.68rem;
    letter-spacing: 0.24em;
    text-transform: uppercase;
}

.portfolio-card:hover .portfolio-card__image,
.portfolio-card:focus-visible .portfolio-card__image {
    filter: grayscale(0.3) brightness(0.54);
    transform: scale(1.055);
}

.portfolio-card:hover .portfolio-card__shade,
.portfolio-card:focus-visible .portfolio-card__shade,
.portfolio-card:hover .portfolio-card__content,
.portfolio-card:focus-visible .portfolio-card__content {
    opacity: 1;
}

.portfolio-card:hover .portfolio-card__content,
.portfolio-card:focus-visible .portfolio-card__content {
    transform: translateY(0);
}

.portfolio-card:focus-visible {
    outline: 2px solid var(--color-accent-bright);
    outline-offset: 4px;
}
</style>
