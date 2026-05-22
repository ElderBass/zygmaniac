<script setup lang="ts">
    import BaseButton from "@/components/ui/BaseButton.vue";
</script>

<template>
    <section class="hero-section">
        <div class="hero-section__inner">
            <h1>jared zygarlicke</h1>
            <p class="philtrum">editor / writer / storyteller</p>

            <div class="hero-section__actions" aria-label="Primary calls to action">
                <BaseButton label="Writing" to="/writing" />
                <BaseButton label="Contact" to="/contact" />
            </div>
        </div>
    </section>
</template>

<style scoped>
    .hero-section {
        padding: clamp(1.75rem, 4.5vw, 3.5rem) var(--page-gutter) clamp(1.25rem, 3vw, 2.25rem);
    }

    .hero-section__inner {
        width: min(100%, var(--max-width));
        margin: 0 auto;
    }

    h1 {
        max-width: 12ch;
        margin: 0.25rem 0 0;
        color: var(--color-text);
        font-size: clamp(3.1rem, 7vw, 5.4rem);
        font-weight: 850;
        letter-spacing: -0.08em;
        line-height: 0.88;
        text-transform: lowercase;
    }

    .philtrum {
        color: var(--color-accent);
        font-family: var(--font-mono);
        font-size: 0.85rem;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        padding: 0.5rem 0;
    }

    /* p:not(.eyebrow) {
        max-width: 33rem;
        margin: 0.9rem 0 0;
        color: var(--color-text-muted);
        font-size: clamp(1rem, 1.35vw, 1.15rem);
        line-height: 1.55;
    } */

    .hero-section__actions {
        display: flex;
        flex-wrap: wrap;
        gap: clamp(1rem, 4vw, 3rem);
        margin-top: 1.45rem;
    }

    @media (min-width: 900px) {
        .hero-section {
            padding-top: clamp(1rem, 2.6vw, 2.25rem);
            padding-bottom: clamp(0.5rem, 1.4vw, 1rem);
        }

        h1 {
            margin-top: 0.1rem;
        }

        .philtrum {
            padding: 0.5rem 0;
            font-size: 1.125rem;
        }

        .hero-section__actions {
            gap: clamp(1rem, 3vw, 2.25rem);
            margin-top: 1.1rem;
        }
    }
</style>
