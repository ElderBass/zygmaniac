<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue';
</script>

<template>
  <section class="hero-section">
    <div class="hero-section__inner">
      <p class="eyebrow">editor / writer / storyteller</p>
      <h1>jared zygarlicke</h1>
      <p>
        A minimalist portfolio for video edits, branded stories, and published fiction.
      </p>

      <div class="hero-section__actions" aria-label="Primary calls to action">
        <BaseButton label="Writing" to="/writing" />
        <BaseButton label="Contact" to="/contact" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  padding: clamp(2rem, 7vw, 5rem) var(--page-gutter) clamp(2rem, 5vw, 4rem);
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

p:not(.eyebrow) {
  max-width: 33rem;
  margin: 1.15rem 0 0;
  color: var(--color-text-muted);
  font-size: clamp(1rem, 1.35vw, 1.15rem);
  line-height: 1.65;
}

.hero-section__actions {
  display: flex;
  flex-wrap: wrap;
  gap: clamp(1rem, 5vw, 4rem);
  margin-top: 2rem;
}
</style>
