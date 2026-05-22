<script setup lang="ts">
import SiteHeader from "@/components/site/SiteHeader.vue";
</script>

<template>
  <SiteHeader />
  <main class="site-main" aria-label="Main content">
    <RouterView />
  </main>
</template>

<style>
:root {
  --color-bg: #151d16;
  --color-bg-deep: #10160f;
  --color-surface: #1d271e;
  --color-surface-elevated: #253226;
  --color-accent: #22a653;
  --color-accent-bright: #36c86a;
  --color-accent-muted: rgba(34, 166, 83, 0.34);
  --color-text: #f4f4ef;
  --color-text-muted: #c6cec3;
  --color-border: rgba(244, 244, 239, 0.12);
  --color-shadow: rgba(0, 0, 0, 0.42);
  --font-display:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", sans-serif;
  --font-mono:
    "IBM Plex Mono", "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  --page-gutter: clamp(1.5rem, 5vw, 5rem);
  --max-width: 1120px;
  --header-height: 5.25rem;
  --ease-out: cubic-bezier(0.19, 1, 0.22, 1);
}

* {
  box-sizing: border-box;
}

html {
  min-width: 320px;
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-display);
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

body {
  min-height: 100vh;
  margin: 0;
  background:
    radial-gradient(
      circle at 85% 0%,
      rgba(34, 166, 83, 0.08),
      transparent 28rem
    ),
    linear-gradient(180deg, var(--color-bg) 0%, var(--color-bg-deep) 100%);
}

body.is-lightbox-open {
  overflow: hidden;
}

button,
input,
textarea,
select {
  font: inherit;
}

button {
  color: inherit;
}

a {
  color: inherit;
}

img,
svg,
iframe {
  display: block;
  max-width: 100%;
}

::selection {
  background: var(--color-accent);
  color: var(--color-bg);
}

#app {
  min-height: 100vh;
}

.site-main {
  min-height: calc(100vh - var(--header-height));
}

.page-shell {
  width: min(100%, var(--max-width));
  margin: 0 auto;
  padding: clamp(3rem, 9vw, 6.5rem) var(--page-gutter) 5rem;
}

.eyebrow {
  color: var(--color-accent-bright);
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

.page-title {
  margin: 0;
  color: var(--color-accent);
  font-size: clamp(3.25rem, 9vw, 6rem);
  font-weight: 800;
  letter-spacing: -0.07em;
  line-height: 0.88;
  text-transform: lowercase;
}

.lede {
  max-width: 34rem;
  margin: 1rem 0 0;
  color: var(--color-text);
  font-size: clamp(1rem, 1.4vw, 1.18rem);
  line-height: 1.7;
}

.muted {
  color: var(--color-text-muted);
}

.text-link {
  color: var(--color-text);
  text-decoration-color: var(--color-accent);
  text-decoration-thickness: 0.08em;
  text-underline-offset: 0.28em;
  transition:
    color 180ms ease,
    text-decoration-color 180ms ease;
}

.text-link:hover,
.text-link:focus-visible {
  color: var(--color-accent-bright);
  text-decoration-color: currentColor;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
</style>
