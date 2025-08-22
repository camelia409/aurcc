<template>
  <main class="flex justify-center items-center min-h-screen bg-indigo-100 p-3 sm:p-4">
    <div class="mobile-card bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-4xl w-full font-serif">
      <div class="text-center mb-4 sm:mb-6">
        <img src="/velraj.webp" alt="Vice-Chancellor's Photo" class="w-48 sm:w-56 lg:w-60 h-auto mx-auto rounded-lg shadow-md">
        <h2 class="mt-3 sm:mt-4 font-bold mobile-text-lg lg:mobile-text-xl xl:mobile-text-2xl">Dr. R. Velraj</h2>
        <a href="#" @click.prevent="openPopover" class="mobile-text-sm lg:mobile-text-base text-blue-500 hover:underline">View Profile</a>
      </div>
      <div>
        <h1 class="mobile-text-lg sm:mobile-text-xl lg:mobile-text-2xl xl:mobile-text-3xl font-semibold text-blue-800 mb-3 sm:mb-4">{{ vcMessage.title }}</h1>
        <h2 class="mobile-text-base lg:mobile-text-lg xl:mobile-text-xl font-semibold mb-3 sm:mb-4">Greetings to all!</h2>
        <p class="mobile-text-sm lg:mobile-text-base xl:mobile-text-lg leading-relaxed" v-html="formattedMessageContent"></p>
        <p class="text-right font-semibold mt-3 sm:mt-4 mobile-text-sm lg:mobile-text-base">{{ vcMessage.signature }}</p>
      </div>
    </div>

    <div v-if="showPopover" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-3 sm:p-4">
      <div class="mobile-card bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-4xl w-full overflow-y-auto max-h-[90vh]">
        <button @click="showPopover = false" class="absolute top-3 sm:top-4 right-3 sm:right-4 bg-red-500 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">✕</button>
        <h1 class="mobile-text-xl sm:mobile-text-2xl lg:mobile-text-3xl font-bold text-blue-500 text-center mb-6 sm:mb-8 lg:mb-10">PROFILE</h1>
        <div class="flex flex-col md:flex-row">
          <div class="text-center md:text-left md:mr-6 lg:mr-8 mb-4 sm:mb-6 md:mb-0">
            <img src="/velraj.webp" alt="Profile Picture" class="h-48 sm:h-56 lg:h-64 w-36 sm:w-40 lg:w-48 rounded-lg shadow-lg mx-auto md:mx-0">
            <h2 class="mt-3 sm:mt-4 mobile-text-base lg:mobile-text-lg font-semibold">{{ selectedStaff.name }}</h2>
          </div>
          <div class="flex-grow space-y-4 sm:space-y-6">
            <div>
              <h3 class="mobile-text-base lg:mobile-text-lg font-semibold">Position:</h3>
              <p class="mobile-text-sm lg:mobile-text-base text-gray-700">{{ selectedStaff.position }}</p>
            </div>
            <div>
              <h3 class="mobile-text-base lg:mobile-text-lg font-semibold">Email:</h3>
              <p class="mobile-text-sm lg:mobile-text-base text-gray-700">{{ selectedStaff.email }}</p>
            </div>
            <template v-if="selectedStaff.education">
              <div>
                <h3 class="mobile-text-base lg:mobile-text-lg font-semibold">Education</h3>
                <ul class="list-disc list-inside text-gray-700 mobile-text-sm lg:mobile-text-base">
                  <li v-for="edu in selectedStaff.education" :key="edu.degree">
                    {{ edu.degree }}, {{ edu.institution }} ({{ edu.year }})
                  </li>
                </ul>
              </div>
            </template>
            <template v-if="selectedStaff.professional_experience">
              <div>
                <h3 class="mobile-text-base lg:mobile-text-lg font-semibold">Professional Experience</h3>
                <ul class="list-disc list-inside text-gray-700 mobile-text-sm lg:mobile-text-base">
                  <li v-for="exp in selectedStaff.professional_experience" :key="exp.position">
                    {{ exp.position }}, {{ exp.institution }} ({{ exp.duration }})
                  </li>
                </ul>
              </div>
            </template>
            <template v-if="selectedStaff.research_interests">
              <div>
                <h3 class="mobile-text-base lg:mobile-text-lg font-semibold">Research Interests</h3>
                <ul class="list-disc list-inside text-gray-700 mobile-text-sm lg:mobile-text-base">
                  <li v-for="interest in selectedStaff.research_interests" :key="interest">{{ interest }}</li>
                </ul>
              </div>
            </template>
            <template v-if="selectedStaff.achievements">
              <div>
                <h3 class="mobile-text-base lg:mobile-text-lg font-semibold">Achievements</h3>
                <ul class="list-disc list-inside text-gray-700 mobile-text-sm lg:mobile-text-base">
                  <li v-for="achievement in selectedStaff.achievements" :key="achievement">{{ achievement }}</li>
                </ul>
              </div>
            </template>
            <template v-if="selectedStaff.additional_details">
              <div>
                <h3 class="mobile-text-base lg:mobile-text-lg font-semibold">Additional Details</h3>
                <p class="mobile-text-sm lg:mobile-text-base text-gray-700">{{ selectedStaff.additional_details }}</p>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import vcMessageData from '../assets/vcMessage.json';

export default {
  data() {
    return {
      vcMessage: vcMessageData.vc_message,
      showPopover: false,
      selectedStaff: {
        name: "Dr. R. Velraj",
        position: "Professor, Institute for Energy Studies",
        email: "velraj@annauniv.edu",
        image: "velraj.webp",
        education: [
          { degree: "Bachelor of Engineering", institution: "Annamalai University", year: "1990" },
          { degree: "Masters on Energy Engineering", institution: "Anna University", year: "1995" },
          { degree: "Ph.D.", institution: "Anna University", year: "2000" }
        ],
        professional_experience: [
          { position: "Deputy Director", institution: "Centre for Engineering Partnership", duration: "2004-2010" },
          { position: "Director", institution: "AU-FRG Institute for CAD/CAM", duration: "2010-2013" },
          { position: "Director", institution: "Institute for Energy Studies", duration: "2013-2018" }
        ],
        research_interests: [
          "Thermal Energy Storage",
          "Solar Energy",
          "Desalination",
          "Energy Efficient Buildings",
          "Energy Auditing and Management"
        ],
        achievements: [
          "DAAD Fellowship by Germany",
          "Tamil Nadu Scientist Award (TANSA) 2014",
          "Active Consultant Award - 2011"
        ],
        links: {
          "Google Scholar": "https://scholar.google.com/citations?user=abcdefg",
          "ResearchGate": "https://www.researchgate.net/profile/Velraj"
        },
        additional_details: "Recognized as the top 2% Scientists (International Level) in the field of Energy."
      }
    };
  },
  computed: {
    formattedMessageContent() {
      return this.vcMessage.content
        .replace(/\n/g, '<br><br>')
        .replace(/a\)/g, '<br>&nbsp;&nbsp;&nbsp;&nbsp;a)')
        .replace(/b\)/g, '<br>&nbsp;&nbsp;&nbsp;&nbsp;b)')
        .replace(/•/g, '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•');
    }
  },
  methods: {
    openPopover() {
      this.showPopover = true;
    }
  }
};
</script>
