<script setup lang="ts">
import EmailIcon from "@/components/icons/EmailIcon.vue";
</script>

<template>
  <div
    class="w-full bg-base-200 min-h-[50dvh] mt-[-20dvh] md:mt-[-10dvh] overflow-hidden rounded-t-[70px] lg:rounded-t-[200px]"
  >
    <div class="hero py-[5dvh] md:py-[7dvh] lg:py-[10dvh]">
      <div class="hero-content items-center flex-col gap-6">
        <div class="avatar rounded-full border-2 border-base-200">
          <div class="mask mask-circle w-24">
            <img
              class="object-cover w-full object-center"
              src="../assets/JavaScript.png"
              alt="Yal Nguembu"
            />
          </div>
        </div>
        <h2 class="text-4xl lg:text-5xl max-w-sm font-bold text-center">
          Tell me ore about your next Project
        </h2>
        <div class="flex gap-x-8 pt-2">
          <button class="btn btn-lg btn-neutral gapxp-2">
            <EmailIcon class="inline h-6 w-6" />
            <span>Email me</span>
          </button>
          <button class="btn btn-lg btn-outline">Whatsapp</button>
        </div>
      </div>
    </div>
  </div>
</template>
