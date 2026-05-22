<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from "vue";

import type { PortfolioItem } from "@/types/portfolio";

const props = defineProps<{
  item: PortfolioItem;
}>();

const emit = defineEmits<{
  close: [];
}>();

const closeButton = ref<HTMLButtonElement | null>(null);

const hasVideo = computed(
  () => props.item.kind === "video" && Boolean(props.item.embedUrl),
);
const itemMeta = computed(() =>
  [props.item.year, props.item.role ?? props.item.publication]
    .filter(Boolean)
    .join(" / "),
);

function closeLightbox() {
  emit("close");
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === "Escape") {
    closeLightbox();
  }
}

onMounted(async () => {
  document.body.classList.add("is-lightbox-open");
  window.addEventListener("keydown", onKeydown);
  await nextTick();
  closeButton.value?.focus();
});

onBeforeUnmount(() => {
  document.body.classList.remove("is-lightbox-open");
  window.removeEventListener("keydown", onKeydown);
});
</script>

<template>
  <Teleport to="body">
    <div
      class="lightbox"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="`${item.id}-title`"
    >
      <button
        class="lightbox__backdrop"
        type="button"
        aria-label="Close overlay"
        @click="closeLightbox"
      ></button>

      <article class="lightbox__panel">
        <button
          ref="closeButton"
          class="lightbox__close"
          type="button"
          @click="closeLightbox"
        >
          <span aria-hidden="true">×</span>
          <span class="sr-only">Close overlay</span>
        </button>

        <div
          class="lightbox__media"
          :class="{ 'lightbox__media--cover': item.kind === 'writing' }"
        >
          <iframe
            v-if="hasVideo"
            :src="item.embedUrl"
            :title="`${item.title} video player`"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
          <img v-else :src="item.thumbnail" :alt="`${item.title} artwork`" />
        </div>

        <div class="lightbox__body">
          <p v-if="itemMeta" class="lightbox__meta">{{ itemMeta }}</p>
          <h2 :id="`${item.id}-title`">{{ item.title }}</h2>
          <p class="lightbox__summary">{{ item.summary }}</p>
          <p v-for="paragraph in item.description" :key="paragraph">
            {{ paragraph }}
          </p>

          <a
            v-if="item.externalUrl"
            class="lightbox__link"
            :href="item.externalUrl"
            target="_blank"
            rel="noreferrer"
          >
            {{ item.ctaLabel ?? "Open Project" }}
          </a>
        </div>
      </article>
    </div>
  </Teleport>
</template>

<style scoped>
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  padding: clamp(1rem, 4vw, 3rem);
}

.lightbox__backdrop {
  position: absolute;
  inset: 0;
  border: 0;
  background: rgba(10, 13, 10, 0.82);
  cursor: zoom-out;
}

.lightbox__panel {
  position: relative;
  z-index: 1;
  display: grid;
  width: min(100%, 68rem);
  max-height: min(86vh, 58rem);
  grid-template-columns: minmax(0, 1.45fr) minmax(18rem, 0.9fr);
  overflow: hidden;
  border: 1px solid var(--color-border);
  background: rgba(21, 29, 22, 0.98);
  box-shadow: 0 2rem 5rem var(--color-shadow);
}

.lightbox__close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 2;
  display: grid;
  width: 2.4rem;
  height: 2.4rem;
  place-items: center;
  border: 1px solid rgba(244, 244, 239, 0.2);
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.42);
  color: var(--color-text);
  cursor: pointer;
  font-size: 1.45rem;
  line-height: 1;
  transition:
    background 180ms ease,
    border-color 180ms ease;
}

.lightbox__close:hover,
.lightbox__close:focus-visible {
  border-color: var(--color-accent);
  background: rgba(34, 166, 83, 0.3);
}

.lightbox__media {
  display: grid;
  min-height: 24rem;
  place-items: center;
  background: #070907;
}

.lightbox__media iframe {
  width: 100%;
  height: 100%;
  min-height: 30rem;
  border: 0;
}

.lightbox__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.lightbox__media--cover {
  padding: clamp(1.5rem, 4vw, 3rem);
  background:
    radial-gradient(
      circle at 50% 30%,
      rgba(34, 166, 83, 0.18),
      transparent 18rem
    ),
    #0b100b;
}

.lightbox__media--cover img {
  width: min(100%, 19rem);
  height: auto;
  max-height: 70vh;
  box-shadow: 0 1.5rem 3.5rem rgba(0, 0, 0, 0.42);
}

.lightbox__body {
  overflow-y: auto;
  padding: clamp(2rem, 4vw, 3.5rem);
}

.lightbox__meta {
  margin: 0 0 1rem;
  color: var(--color-accent-bright);
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.lightbox__body h2 {
  margin: 0;
  color: var(--color-text);
  font-size: clamp(2.2rem, 5vw, 4.6rem);
  letter-spacing: -0.07em;
  line-height: 0.9;
  text-transform: lowercase;
}

.lightbox__summary {
  color: var(--color-text);
  font-size: 1.05rem;
}

.lightbox__body p {
  color: var(--color-text-muted);
  line-height: 1.7;
}

.lightbox__link {
  display: inline-flex;
  margin-top: 1rem;
  color: var(--color-text);
  font-family: var(--font-mono);
  font-size: 0.76rem;
  letter-spacing: 0.16em;
  text-decoration-color: var(--color-accent);
  text-underline-offset: 0.4em;
  text-transform: uppercase;
}

@media (max-width: 820px) {
  .lightbox {
    align-items: end;
    padding: 0;
  }

  .lightbox__panel {
    max-height: 92vh;
    grid-template-columns: 1fr;
    overflow-y: auto;
  }

  .lightbox__media,
  .lightbox__media iframe {
    min-height: 18rem;
  }

  .lightbox__body {
    overflow: visible;
  }
}
</style>
