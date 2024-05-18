<template>
    <main class="flex-grow">
        <!-- Hero section -->
        <section class="bg-cover bg-center relative -z-10" :style="'background-image: url(http://192.168.72.231:5173/src/assets/dgate-hero.jpg)'">
            <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <div class="container mx-auto py-16 text-white p-9 relative z-10">
                <h1 class="text-4xl font-bold mb-4">{{ libraryData.name }}</h1>
                <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Learn More</button>
            </div>
        </section>

        <!-- Content sections -->
        <section class="container mx-auto py-8 p-9">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h2 class="text-2xl font-bold mb-4 flex items-center">
                        <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                        </svg>
                        Sections
                    </h2>
                    <div class="flex flex-col">
                        <button v-for="(section, index) in sections" :key="index" @click="currentSection = section" :class="{'bg-blue-500 text-white': currentSection === section, 'bg-white hover:bg-gray-100 text-gray-800': currentSection !== section}" class="font-semibold py-2 px-4 border border-gray-400 rounded shadow flex items-center mb-2">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                            {{ section }}
                        </button>
                    </div>
                </div>
                <section v-if="currentSection !== null" class="container mx-auto py-8 p-9 md:col-span-3">
                    <div v-if="currentSection === 'About Library'">
                        <h2 class="text-2xl font-bold mb-4">About Library</h2>
                        <p class="text-xl mb-8">{{ libraryData.description }}</p>
                        <h2 class="text-2xl font-bold mb-4">E-journals</h2>
                        <div>
                            <p>{{ libraryData.e_journals.description }}</p>
                            <ul class="list-disc pl-4">
                                <li v-for="feature in libraryData.e_journals.library_salient_features" :key="feature">{{ feature }}</li>
                            </ul>
                            <p>Library Services:</p>
                            <ul class="list-disc pl-4">
                                <li v-for="service in libraryData.e_journals.library_services" :key="service">{{ service }}</li>
                            </ul>
                        </div>
                    </div>
                    <div v-else-if="currentSection === 'Library Resources'">
                        <h2 class="text-2xl font-bold mb-4">Library Resources</h2>
                        <div>
                            <p>{{ libraryData.library_resources.description }}</p>
                            <ul class="list-disc pl-4">
                                <li>Books: {{ libraryData.library_resources.collection.books }}</li>
                                <li>Reference Books: {{ libraryData.library_resources.collection.reference_books }}</li>
                                <li>CDs: {{ libraryData.library_resources.collection.cds }}</li>
                                <li>Donation Books Collection: {{ libraryData.library_resources.collection.donation_books_collection }}</li>
                                <li>Bound Volumes of Journals: {{ libraryData.library_resources.collection.bound_volumes_of_journals }}</li>
                                <li>Project Reports: {{ libraryData.library_resources.collection.project_reports }}</li>
                                <li>Subscription to Journals: {{ libraryData.library_resources.collection.subscription_to_journals }}</li>
                                <li>Journal Binding Volumes: {{ libraryData.library_resources.journal_binding.volumes }}</li>
                            </ul>
                            <div class="container mx-auto py-4">
                                <h1 class="text-2xl font-bold mb-4">Members Details</h1>
                                <table class="min-w-full bg-white border border-gray-200">
                                    <thead>
                                    <tr>
                                        <th class="px-4 py-2 border-b">S.No</th>
                                        <th class="px-4 py-2 border-b">Members Details</th>
                                        <th class="px-4 py-2 border-b">No. of Books</th>
                                        <th class="px-4 py-2 border-b">Validity</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="member in libraryData.library_resources.members_details" :key="member.sino">
                                        <td class="px-4 py-2 border-b">{{ member.sino }}</td>
                                        <td class="px-4 py-2 border-b">{{ member.members_details }}</td>
                                        <td class="px-4 py-2 border-b">{{ member.no_of_books }}</td>
                                        <td class="px-4 py-2 border-b">{{ member.validity }}</td>
                                    </tr>
                                    </tbody>
                                </table>
                                </div>

                        </div>
                    </div>
                    <div v-else-if="currentSection === 'Digital Library'">
                        <h2 class="text-2xl font-bold mb-4">Digital Library</h2>
                        <div>
                            <p>{{ libraryData.digital_library.description }}</p>
                            <ul class="list-disc pl-4">
                                <li>{{ libraryData.digital_library.e_resources }}</li>
                                <li>{{ libraryData.digital_library.multimedia }}</li>
                            </ul>
                        </div>
                    </div>
                    <div v-else-if="currentSection === 'Open Access Resources'">
                        <h2 class="text-2xl font-bold mb-4">Open Access Resources</h2>
                        <ul class="list-disc pl-4">
                            <li v-for="resource in libraryData.open_access_resources" :key="resource">{{ resource }}</li>
                        </ul>
                    </div>
                    <div v-else-if="currentSection === 'Library Sections'">
                        <h2 class="text-2xl font-bold mb-4">Library Sections</h2>
                        <div>
                            <h3 class="text-lg font-semibold mb-2">Reading Hall</h3>
                            <p>{{ libraryData.library_section.reading_hall }}</p>
                            <h3 class="text-lg font-semibold mb-2">Reference Section</h3>
                            <p>{{ libraryData.library_section.reference_section }}</p>
                            <h3 class="text-lg font-semibold mb-2">Circulation Section</h3>
                            <p>{{ libraryData.library_section.circulation_section }}</p>
                            <h3 class="text-lg font-semibold mb-2">Periodical Section</h3>
                            <p>{{ libraryData.library_section.periodical_section }}</p>
                        </div>
                    </div>
                    <div v-else-if="currentSection === 'Faculty'">
                        <h2 class="text-2xl font-bold mb-4">Faculty</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div v-for="faculty in libraryData.faculty" :key="faculty.name" class="bg-white shadow-md rounded-md p-4">
                                <h3 class="text-lg font-semibold">{{ faculty.name }}</h3>
                                <p>{{ faculty.designation }}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </main>
</template>

<script>
import libraryData from '../assets/library.json';

export default {
    data() {
        return {
            libraryData: libraryData,
            sections: [
                'About Library',
                'Library Resources',
                'Digital Library',
                'Open Access Resources',
                'Library Sections',
                'Faculty'
            ],
            currentSection: null
        };
    },
    created() {
        // Default to first section
        if (this.sections.length > 0) {
            this.currentSection = this.sections[0];
        }
    }
};
</script>

<style scoped>
/* Add your styles here */
</style>
