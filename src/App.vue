<template>
  <div class="w-screen h-screen overflow-hidden flex">
    <div class="w-full relative h-screen overflow-y-auto">
      <TheHeader />
      <main class="overflow-y-auto">
        <HeroSection />
        <AboutSection />
        <WorkExperienceSection />
        <SchoolAndEducationSection />
        <ProjectsSection />
        <SkillsSection />
      </main>
      <TheFooter />
    </div>
  </div>
</template>
<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import HeroSection from "@/components/HeroSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import WorkExperienceSection from "@/components/WorkExperienceSection.vue";
import ProjectsSection from "@/components/ProjectsSection.vue";
import SkillsSection from "@/components/ContactSection.vue";
import SchoolAndEducationSection from "@/components/SchoolAndEducationSection.vue";
</script>
