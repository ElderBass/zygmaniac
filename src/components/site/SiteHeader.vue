<template>
    <header class="site-header">
        <RouterLink class="site-logo" to="/" aria-label="Jared Zygarlicke home">
            jared zygarlicke
        </RouterLink>

        <nav class="site-nav" aria-label="Primary navigation">
            <RouterLink to="/">home</RouterLink>
            <RouterLink to="/writing">writing</RouterLink>
            <RouterLink to="/contact">contact</RouterLink>
        </nav>
    </header>
</template>

<style scoped>
.site-header {
    position: sticky;
    top: 0;
    z-index: 20;
    display: flex;
    min-height: var(--header-height);
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    padding: 0 var(--page-gutter);
    background: linear-gradient(
        180deg,
        rgba(21, 29, 22, 0.96),
        rgba(21, 29, 22, 0.78)
    );
    backdrop-filter: blur(14px);
}

.site-logo {
    color: var(--color-text);
    font-size: clamp(1rem, 1.7vw, 1.25rem);
    font-weight: 800;
    letter-spacing: -0.06em;
    text-decoration: none;
    text-transform: lowercase;
}

.site-nav {
    display: flex;
    align-items: center;
    gap: clamp(1rem, 2.8vw, 2rem);
    color: var(--color-text);
    font-size: clamp(0.95rem, 1.25vw, 1.12rem);
    font-weight: 650;
    text-transform: lowercase;
}

.site-nav a {
    position: relative;
    padding: 0.45rem 0;
    color: inherit;
    text-decoration: none;
    opacity: 0.84;
    transition:
        color 180ms ease,
        opacity 180ms ease;
}

.site-nav a::after {
    position: absolute;
    right: 0;
    bottom: 0.25rem;
    left: 0;
    height: 1px;
    background: currentColor;
    content: "";
    opacity: 0;
    transform: scaleX(0);
    transform-origin: center;
    transition:
        opacity 180ms ease,
        transform 180ms ease;
}

.site-nav a:hover,
.site-nav a:focus-visible {
    color: var(--color-accent);
    opacity: 1;
}

.site-nav a.router-link-exact-active {
    color: var(--color-accent);
    opacity: 1;
}

.site-nav a:hover::after,
.site-nav a:focus-visible::after,
.site-nav a.router-link-exact-active::after {
    opacity: 1;
    transform: scaleX(1);
}

@media (max-width: 560px) {
    .site-header {
        min-height: auto;
        justify-content: space-between;
        padding-block: 1rem;
    }

    .site-nav {
        gap: 1rem;
    }
}
</style>
