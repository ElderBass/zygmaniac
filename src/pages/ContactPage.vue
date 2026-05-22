<template>
  <section class="contact-page page-shell">
    <p class="eyebrow">say hello</p>
    <h1 class="page-title">contact</h1>

    <address class="contact-page__links">
      <a class="text-link" href="mailto:jzygarlicke@gmail.com">jzygarlicke@gmail.com</a>
      <a
        class="text-link"
        href="https://www.instagram.com/teh_question/"
        target="_blank"
        rel="noreferrer"
      >
        instagram.com/teh_question/
      </a>
    </address>
  </section>
</template>

<style scoped>
.contact-page {
  min-height: calc(100vh - var(--header-height));
}

.contact-page__links {
  display: grid;
  gap: 1.3rem;
  margin-top: 2.6rem;
  font-style: normal;
  font-weight: 650;
}
</style>
