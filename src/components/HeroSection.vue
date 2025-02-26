<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n({
  inheritLocale: true,
});
</script>

<template>
  <div class="hero w-full bg-base-300 min-h-screen overflow-hidden">
    <div class="hero-content text-center">
      <div class="max-w-md items-center flex flex-col gap-y-12">
        <div class="avatar rounded-full border-2 border-white tooltip tooltip-bottom tooltip-accent" data-tip="Yal Jovane Nguembu Fotso">
          <div class="mask mask-circle w-32">
            <img
              class="object-cover w-full object-center"
              src="../assets/me-2.jpg"
             alt="Yal Nguembu"/>
          </div>
        </div>

        <h1 class="text-4xl font-bold capitalize lg:text-5xl">
          Building <br class="lg:hidden"> intuitive, ergonomic and fast web app
        </h1>
        <button class="btn btn-lg btn-neutral">Get Resume</button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
