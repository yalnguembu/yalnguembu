<script setup lang="ts">
import LinkIcon from "@/components/icons/LinkIcon.vue";
</script>

<template>
  <div class="min-h-[110dvh] mt-[-10dvh] md:mt-[-10dvh] pb-[25dvh] bg-base-300">
    <div class="w-full bg-base-100 rounded-b-[300px] h-[5dvh] md:h-[-10dvh] lg:h-[15dvh]"></div>
    <div
      class="w-full flex flex-col items-center justify-center py-8 px-6 lg:px-0 lg:py-24 gap-y-4 md:gap-y-12"
    >
      <h2 class="text-4xl font-bold text-center max-w-md py-8 capitalize">
        Recent realisations
      </h2>
      <div class="md:w-full md:max-w-4xl lg:max-w-6xl bg-base-200 rounded-2xl p-4 md:p-8 lg:p-12 grid md:grid-cols-2 gap-4 lg:gap-8 lg:grid-cols-3">
        <div
          v-for="i in 6"
          class="card card-compact shadow-none border border-transparent hover:border-base-300"
        >
          <div class="card-body">
            <div class="avatar w-min rounded-full mb-4">
              <div class="mask mask-circle w-24">
                <img
                  class="object-cover w-full object-center"
                  src="../assets/JavaScript.png"
                  alt="Yal Nguembu"
                />
              </div>
            </div>
            <h2 class="card-title">
              Suku!
            </h2>
            <p>Learning and quiz bases testings platform</p>
            <a
              href="/"
              class="flex mt-2 px-3 py-1.5 text-gray-500 font-semibold border hover:font-semibold border-transparent w-min rounded-full hover:border-info hover:text-info gap-x-2"
            >
              <LinkIcon class="h-4 w-4" />
              <span>suku.cm</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
