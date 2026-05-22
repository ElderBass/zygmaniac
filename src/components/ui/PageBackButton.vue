<script setup lang="ts">
withDefaults(
    defineProps<{
        to?: string;
        label?: string;
        ariaLabel?: string;
    }>(),
    {
        to: "/",
        label: "back home",
        ariaLabel: "Back to home",
    }
);
</script>

<template>
    <RouterLink class="page-back-button" :to="to" :aria-label="ariaLabel">
        <span class="page-back-button__arrow" aria-hidden="true">←</span>
        <span>{{ label }}</span>
    </RouterLink>
</template>

<style scoped>
.page-back-button {
    display: inline-flex;
    min-height: 2.75rem;
    align-items: center;
    gap: 0.55rem;
    padding: 0.5rem 1rem;
    align-self: start;
    justify-self: start;
    width: fit-content;
    border: 1px solid transparent;
    border-radius: 999px;
    color: var(--color-text-muted);
    font-family: var(--font-mono);
    font-size: 0.74rem;
    letter-spacing: 0.12em;
    text-decoration: none;
    text-transform: lowercase;
    transition:
        border-color 180ms ease,
        color 180ms ease,
        transform 180ms var(--ease-out);
}

.page-back-button__arrow {
    font-family: var(--font-display);
    font-size: 1.1rem;
    line-height: 1;
    transition: transform 180ms var(--ease-out);
}

.page-back-button:hover,
.page-back-button:focus-visible {
    border-color: var(--color-accent-muted);
    color: var(--color-accent);
    transform: translateX(-2px);
}

.page-back-button:hover .page-back-button__arrow,
.page-back-button:focus-visible .page-back-button__arrow {
    transform: translateX(-0.18rem);
}

.page-back-button:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 4px;
}
</style>
