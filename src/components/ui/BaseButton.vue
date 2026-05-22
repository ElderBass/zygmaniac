<script setup lang="ts">
withDefaults(
    defineProps<{
        to?: string;
        href?: string;
        label: string;
    }>(),
    {
        to: undefined,
        href: undefined,
    }
);
</script>

<template>
    <RouterLink v-if="to" class="base-button" :to="to">
        {{ label }}
    </RouterLink>
    <a
        v-else-if="href"
        class="base-button"
        :href="href"
        target="_blank"
        rel="noreferrer"
    >
        {{ label }}
    </a>
    <button v-else class="base-button" type="button">
        {{ label }}
    </button>
</template>

<style scoped>
.base-button {
    display: inline-flex;
    min-width: 8.5rem;
    min-height: 2.5rem;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--color-accent-muted);
    border-radius: 0.5rem;
    background: rgba(34, 166, 83, 0.03);
    color: var(--color-accent-bright);
    font-family: var(--font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.08em;
    text-decoration: none;
    text-transform: uppercase;
    transition:
        border-color 180ms ease,
        background 180ms ease,
        color 180ms ease,
        transform 180ms var(--ease-out);
}

.base-button:hover,
.base-button:focus-visible {
    border-color: var(--color-accent);
    background: rgba(34, 166, 83, 0.14);
    color: var(--color-text);
    transform: translateY(-2px);
}
</style>
