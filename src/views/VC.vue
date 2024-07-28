<template>
  <main class="container">
    <div class="vc-message">
      <div class="photo">
        <img src="@/assets/velraj.webp" alt="Vice-Chancellor's Photo" />
        <h2 class="bold">Dr.R.Velraj</h2>
        <a href="#" @click.prevent="openPopover">View Profile</a>
      </div>
      <div class="content">
        <h1>{{ vcMessage.title }}</h1>
        <h2><strong>Greetings to all!</strong></h2>
        <p v-html="formattedMessageContent"></p>
        <p class="signature">{{ vcMessage.signature }}</p>
      </div>
    </div>

    <div v-if="showPopover" class="modal modal-open">
      <div class="modal-box relative rounded-lg flex flex-col max-w-4xl p-6 overflow-y-auto">
        <button @click="showPopover = false" class="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
        <h1 class="font-bold text-3xl mb-10 text-center w-full text-blue-500">PROFILE</h1>
        <div class="flex flex-col md:flex-row">
          <div class="flex-shrink-0 text-center mt-4 md:mt-0 my-auto mr-8">
            <img src="@/assets/velraj.webp" alt="Profile Picture" class="h-96 w-72 rounded-lg shadow-lg object-cover">
            <h2 class="text-lg font-semibold mt-4">{{ selectedStaff.name }}</h2>
          </div>
          <div class="md:overflow-auto flex-grow max-h-[50vh] pr-6 shadow-inner">
            <h3 class="text-xl font-semibold text-black"><strong>Position:</strong> {{ selectedStaff.position }}</h3>
            <h3 class="text-xl font-semibold text-black"><strong>Email:</strong> {{ selectedStaff.email }}</h3>
            <template v-if="selectedStaff.education">
              <h3 class="text-md font-semibold text-black mt-4"><strong>Education</strong></h3>
              <ul class="list-disc ml-6">
                <li v-for="edu in selectedStaff.education" :key="edu.degree">{{ edu.degree }}, {{ edu.institution }} ({{ edu.year }})</li>
              </ul>
            </template>
            <template v-if="selectedStaff.professional_experience">
              <h3 class="text-md font-semibold text-black mt-4"><strong>Professional Experience</strong></h3>
              <ul class="list-disc ml-6">
                <li v-for="exp in selectedStaff.professional_experience" :key="exp.position">{{ exp.position }}, {{ exp.institution }} ({{ exp.duration }})</li>
              </ul>
            </template>
            <template v-if="selectedStaff.research_interests">
              <h3 class="text-md font-semibold text-black mt-4"><strong>Research Interests</strong></h3>
              <ul class="list-disc ml-6">
                <li v-for="interest in selectedStaff.research_interests" :key="interest">{{ interest }}</li>
              </ul>
            </template>
            <template v-if="selectedStaff.achievements">
              <h3 class="text-md font-semibold text-black mt-4"><strong>Achievements</strong></h3>
              <ul class="list-disc ml-6">
                <li v-for="achievement in selectedStaff.achievements" :key="achievement">{{ achievement }}</li>
              </ul>
            </template>
            <template v-if="selectedStaff.additional_details">
              <h3 class="text-md font-semibold text-black mt-4"><strong>Additional Details</strong></h3>
              <p>{{ selectedStaff.additional_details }}</p>
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
      return this.vcMessage.content.replace(/\n/g, '<br><br>').replace(/a\)/g, '<br>&nbsp;&nbsp;&nbsp;&nbsp;a)').replace(/b\)/g, '<br>&nbsp;&nbsp;&nbsp;&nbsp;b)').replace(/•/g, '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•');
    }
  },
  methods: {
    openPopover() {
      this.showPopover = true;
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f7f7f7;
  padding: 16px;
}

.vc-message {
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  max-width: 800px;
  width: 100%;
}

.photo {
  margin-bottom: 16px;
  text-align: center;
}

.photo img {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.photo h2 {
  margin-top: 8px;
  font-weight: bold;
}

.content {
  padding-left: 24px;
}

h1 {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: #3b82f6;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: black;
}

p {
  font-size: 1.125rem;
  margin-bottom: 16px;
}

.signature {
  font-weight: 600;
  text-align: right;
}

a {
  color: #3b82f6;
  text-decoration: none;
  display: block;
  margin-top: 8px;
}

a:hover {
  text-decoration: underline;
}

@media (min-width: 768px) {
  .vc-message {
    flex-direction: row;
  }

  .photo {
    margin-bottom: 0;
    flex: 1;
  }

  .content {
    padding-left: 24px;
    flex: 2;
  }
}

.modal-box {
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  max-width: 800px;
  width: 100%;
}

.text-blue-500 {
  color: #3b82f6;
}

.text-black {
  color: black;
}

.modal-box .list-disc {
  list-style-type: disc;
}

h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 16px;
  color: black;
}

ul {
  margin-bottom: 16px;
}

p {
  font-size: 1.125rem;
  margin-bottom: 16px;
}

.modal-box .flex-grow {
  overflow: auto;
  max-height: calc(100vh - 160px);
}
</style>
