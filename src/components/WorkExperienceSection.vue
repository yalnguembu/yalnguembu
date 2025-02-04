<script setup lang="ts"></script>

<template>
  <div class="min-h-screen bg-base-300">
    <div class="w-full h-[15dvh] bg-base-200 p-4 rounded-b-[300px]"></div>
    <div
      class="w-full flex flex-col justify-center items-center py-8 pb-12 mt-[5dvh] px-8 md:p-4 lg:p-0"
    >
      <h2 class="text-4xl font-bold text-center max-w-md py-8 mb-8">
        Works and experiences
      </h2>
      <div
        class="card bg-base-200 p-4 md:p-0 lg:p-4 max-w-2xl border border-gray-300"
      >
        <div class="card-body px-4 md:p-0 lg:p-4 rounded-xl mt">
          <div class="collapse mb-3 border collapse-plus">
            <input type="radio" name="work-experiences" :checked="true" />
            <div
              class="collapse-title text-xl font-medium flex gap-x-2 lg:gap-x-4"
            >
              <div class="mask mask-circle border-white">
                <img
                  src="../assets/JavaScript.png"
                  alt="freelance logo"
                  class="w-12 h-12 lg:w-16 lg:h-16 rounded-full"
                />
              </div>
              <div class="w-full">
                <div class="flex justify-between">
                  <h3 class="font-semibold text-xl lg:text-2xl">
                    GRAPHICS SYSTEM SA
                  </h3>
                  <div class="text-gray-500 flex text-sm lg:text-base">
                    <span>11/2024</span>
                    -
                    <span>Present</span>
                  </div>
                </div>
                <h4 class="font-medium text-base lg:text-lg">
                  Junior React Frontend Developer
                </h4>
              </div>
            </div>
            <div class="collapse-content bg-base-200">
              <p class="text-gray-500 pt-4 py-2">
                Established in 1990, it is a leading industrial printing company
                in Cameroon, offering comprehensive visual communication
                solutions. The company specializes in various printing services,
                including offset, screen printing, digital printing, and
                signage. With over three decades of experience, Graphics System
                SA has built a reputation for delivering high-quality products
                and services to its clients. In addition to its core printing
                services, Graphics System SA has diversified its offerings by
                partnering with CANAL+ in 2010 to distribute television
                services. To enhance customer experience, the company developed
                the FUJISAT mobile application, enabling users to manage and
                monitor their CANAL+ subscriptions efficiently.
              </p>
            </div>
          </div>
          <div class="collapse mb-3 border collapse-plus">
            <input type="radio" name="work-experiences" />
            <div
              class="collapse-title text-xl font-medium flex gap-x-2 lg:gap-x-4"
            >
              <div class="mask mask-circle border-white">
                <img
                  src="../assets/JavaScript.png"
                  alt="freelance logo"
                  class="w-12 h-12 lg:w-16 lg:h-16 rounded-full"
                />
              </div>
              <div class="w-full">
                <div class="flex justify-between">
                  <h3 class="font-semibold text-xl lg:text-2xl">LAO SARL</h3>
                  <div class="text-gray-500 flex text-sm lg:text-base">
                    <span>11/2022</span>
                    -
                    <span>06/2024</span>
                  </div>
                </div>
                <h4 class="font-medium text-base lg:text-lg">
                  Junior Frontend Developer
                </h4>
              </div>
            </div>
            <div class="collapse-content bg-base-200">
              <p class="text-gray-500 pt-4 py-2">
                As a Junior Frontend Developer at LAO SARL, I developed and
                maintained responsive web interfaces using Vue.js, TypeScript,
                Vitest, Cypress, translating UI/UX designs into interactive
                components while ensuring seamless integration with RESTful
                APIs. I test and optimized application performance, reduced
                website load times, enhancing scalability and maintainability.
                Collaborating with cross-functional teams, I utilized tools like
                Git, GitHub, Visual Studio Code, Jira, and Confluence,
                delivering user stories.
              </p>
            </div>
          </div>
          <div class="collapse mb-3 border collapse-plus">
            <input type="radio" name="work-experiences" />
            <div
              class="collapse-title text-xl font-medium flex gap-x-2 lg:gap-x-4"
            >
              <div class="mask mask-circle border-white">
                <img
                  src="../assets/JavaScript.png"
                  alt="freelance logo"
                  class="w-12 h-12 lg:w-16 lg:h-16 rounded-full"
                />
              </div>
              <div class="w-full">
                <div class="flex justify-between">
                  <h3 class="font-semibold text-xl lg:text-2xl">
                    Crystal Art Technologie
                  </h3>
                  <div class="text-gray-500 flex text-sm lg:text-base">
                    <span>06/2022</span>
                    -
                    <span>10/2022</span>
                  </div>
                </div>
                <h4 class="font-medium text-base lg:text-lg">
                  Internship Fullstack Developer
                </h4>
              </div>
            </div>
            <div class="collapse-content bg-base-200">
              <p class="text-gray-500 pt-4 py-2">
                During my internship, I contributed to developing scalable and
                efficient web applications, gaining hands-on experience in
                front-end development using JavaScript, React, and TypeScript. I
                collaborated with cross-functional teams to implement
                user-centric features and optimize performance.
              </p>
            </div>
          </div>
          <div class="collapse mb-3 border collapse-plus">
            <input type="radio" name="work-experiences" />
            <div
              class="collapse-title text-xl font-medium flex gap-x-2 lg:gap-x-4"
            >
              <div class="mask mask-circle border-white">
                <img
                  src="../assets/JavaScript.png"
                  alt="freelance logo"
                  class="w-12 h-12 lg:w-16 lg:h-16 rounded-full"
                />
              </div>
              <div class="w-full">
                <div class="flex justify-between">
                  <h3 class="font-semibold text-xl lg:text-2xl">Freelance</h3>
                  <div class="text-gray-500 flex text-sm lg:text-base">
                    <span>10/22</span>
                    -
                    <span>Present</span>
                  </div>
                </div>
                <h4 class="font-medium text-base lg:text-lg">
                  Frontend Developer Junior
                </h4>
              </div>
            </div>
            <div class="collapse-content bg-base-200">
              <p class="text-gray-500 pt-4 py-2">
                As a Freelance Junior Frontend Developer, I specialize in
                designing and developing dynamic, user-friendly web applications
                tailored to clients' unique requirements. I leverage the Vue.js
                framework to deliver scalable and responsive solutions that
                enhance user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
