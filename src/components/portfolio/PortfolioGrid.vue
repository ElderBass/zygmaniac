<script setup lang="ts">
import { ref } from "vue";

import type { PortfolioItem } from "@/types/portfolio";

import PortfolioCard from "./PortfolioCard.vue";
import PortfolioLightbox from "./PortfolioLightbox.vue";

defineProps<{
  items: PortfolioItem[];
  variant?: "video" | "writing";
}>();

const selectedItem = ref<PortfolioItem | null>(null);

function openItem(item: PortfolioItem) {
  selectedItem.value = item;
}

function closeItem() {
  selectedItem.value = null;
}
</script>

<template>
  <section
    class="portfolio-grid"
    :class="variant ? `portfolio-grid--${variant}` : undefined"
  >
    <PortfolioCard
      v-for="item in items"
      :key="item.id"
      :item="item"
      @select="openItem"
    />
  </section>

  <PortfolioLightbox
    v-if="selectedItem"
    :item="selectedItem"
    @close="closeItem"
  />
</template>

<style scoped>
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.55rem;
}

.portfolio-grid--writing {
  grid-template-columns: repeat(3, minmax(9rem, 1fr));
  align-items: start;
}

.portfolio-grid--writing :deep(.portfolio-card) {
  aspect-ratio: 0.72;
}

@media (max-width: 900px) {
  .portfolio-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
}
</style>
