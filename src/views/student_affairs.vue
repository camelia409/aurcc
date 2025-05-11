<template>
  <div class="flex-grow font-serif">
    <!-- Hero Section -->
    <section class="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <img :src="backgroundImage" alt="Background" class="h-full w-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80"></div>
      </div>
      <div class="relative text-center px-4 max-w-4xl mx-auto z-20">
        <h1 class="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Student <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">Affairs</span>
        </h1>
        <p class="text-lg md:text-xl text-blue-200">
          The Office of Student Affairs is dedicated to students’ academic and personal success.
        </p>
      </div>
    </section>

    <!-- Sticky Tabs -->
    <div class="sticky top-0 z-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white/95 backdrop-blur-sm shadow-lg rounded-full -mt-6 py-1 px-2 flex justify-center overflow-x-auto no-scrollbar">
          <nav role="tablist" class="tabs flex space-x-1 md:space-x-2">
            <button
              v-for="section in sections"
              :key="section.key"
              @click="scrollToSection(section.key)"
              role="tab"
              :aria-selected="currentSection === section.key"
              :class="[
                'font-medium px-4 md:px-5 py-2 md:py-3 rounded-full text-sm md:text-base transition duration-300 whitespace-nowrap',
                currentSection === section.key
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              ]"
            >
              {{ section.name }}
            </button>
          </nav>
        </div>
      </div>
    </div>

    <!-- Content Sections -->
    <section class="max-w-7xl mx-auto px-4 py-10 space-y-20">
      <!-- Description -->
      <div ref="description" class="section-box">
        <h2 class="section-title">Description</h2>
        <ul class="list-disc ml-5 space-y-2 text-gray-700" v-for="(item, index) in content.description" :key="index">{{ item }}
          
        </ul>
      </div>

      <!-- Re-Admission -->
      <div ref="reAdmission" class="section-box">
        <h2 class="section-title">Re-Admission</h2>
        <p class="text-gray-700 leading-relaxed whitespace-pre-line">
          {{ content['Re-Admission'] }}
        </p>
      </div>

      <!-- Scholarships -->
      <div ref="scholarships" class="section-box">
        <h2 class="section-title">Scholarships</h2>
        <p class="mb-4 text-gray-700">{{ content.Scholarship.description }}</p>
        <ul class="list-disc ml-6 space-y-2 text-gray-700">
          <li
            v-for="(scholarship, index) in content.Scholarship['list of scholarships']"
            :key="index"
          >
            {{ scholarship }}
          </li>
        </ul>
      </div>

      <!-- Fees -->
      <div ref="fees" class="section-box">
        <h2 class="section-title">Fees Details</h2>
        <a :href="content['fees details']" target="_blank" class="text-blue-600 underline">
          {{ content['fees details'] }}
        </a>
      </div>

      <!-- Staff -->
      <div ref="staff" class="section-box">
        <h2 class="section-title">Administration Staff</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="staff in content['Office bearers']['Administration staff']"
            :key="staff['S.No']"
            class="bg-white rounded-xl p-4 shadow border border-blue-100 flex flex-col items-center text-center"
          >
            <img
              :src="staff.Image"
              alt="staff image"
              class="w-24 h-24 rounded-full object-cover mb-3 border-4 border-indigo-100 shadow-md"
            />
            <h3 class="font-semibold text-lg">{{ staff["Name of the Staff"] }}</h3>
            <p class="text-sm text-gray-600">{{ staff["Name of the Post"] }}</p>
          </div>
        </div>
      </div>

      <!-- Contact -->
      <div ref="contact" class="section-box">
        <h2 class="section-title">Contact Us</h2>
        <p class="text-gray-700 whitespace-pre-line">{{ content["contact us"] }}</p>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import content from '../assets/student_affairs.json'

const backgroundImage = '/studentaffairs.webp'
const currentSection = ref('description')

const sections = [
  { key: 'description', name: 'Description' },
  { key: 'reAdmission', name: 'Re-Admission' },
  { key: 'scholarships', name: 'Scholarships' },
  { key: 'fees', name: 'Fees Details' },
  { key: 'staff', name: 'Staff' },
  { key: 'contact', name: 'Contact Us' }
]

// Section refs
const description = ref(null)
const reAdmission = ref(null)
const scholarships = ref(null)
const fees = ref(null)
const staff = ref(null)
const contact = ref(null)

const sectionRefs = {
  description,
  reAdmission,
  scholarships,
  fees,
  staff,
  contact
}

function scrollToSection(key) {
  const el = sectionRefs[key]?.value
  if (el && typeof el.scrollIntoView === 'function') {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function onScroll() {
  for (const section of sections) {
    const el = sectionRefs[section.key]?.value
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= 200 && rect.bottom > 200) {
        currentSection.value = section.key
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.section-box {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  scroll-margin-top: 6rem;
}
.section-title {
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
}
</style>
