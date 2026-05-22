<template>
    <div class="accent-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 180" preserveAspectRatio="none">
            <path
                d="M0 112 C245 70 389 56 626 96 C849 134 983 162 1198 132 C1300 118 1380 92 1440 80"
            />
        </svg>
    </div>
</template>

<style scoped>
.accent-wave {
    width: 100%;
    margin: clamp(0.25rem, 1.6vw, 1rem) 0 clamp(1.25rem, 3vw, 2.4rem);
    overflow: hidden;
}

svg {
    width: 100%;
    height: clamp(3.5rem, 8vw, 6.5rem);
}

path {
    fill: none;
    stroke: var(--color-accent);
    stroke-linecap: round;
    stroke-width: 16;
}
</style>
