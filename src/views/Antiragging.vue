<template>
  <div class="p-6">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-6">Anti Ragging Information</h1>
      <div class="bg-gray-100 p-4 mb-6 rounded">
        <h2 class="text-2xl font-bold mb-2">Resources</h2>
        <ul class="list-disc pl-5">
          <li class="mb-2">
            <a class="text-blue-500 underline" :href="jsonData['Online Anti Ragging Affidavit Form']" target="_blank">
              Online Anti Ragging Affidavit Form
            </a>
          </li>
          <li class="mb-2">
            <a class="text-blue-500 underline" :href="jsonData['Step by Step Guide on How to Fill An Online Anti Ragging Affidavit']" target="_blank">
              Step by Step Guide on How to Fill An Online Anti Ragging Affidavit
            </a>
          </li>
          <li class="mb-2">
            <a class="text-blue-500 underline" :href="jsonData['Anti Ragging Committe Members']" target="_blank">
              Anti Ragging Committee Members
            </a>
          </li>
          <li class="mb-2">
            <a class="text-blue-500 underline" :href="jsonData['Anti Ragging Squad Committe Members']" target="_blank">
              Anti Ragging Squad Committee Members
            </a>
          </li>
          <li class="mb-2">
            <a class="text-blue-500 underline" :href="jsonData['Online Complaint Form']" target="_blank">
              Online Complaint Form
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

 <script>
  import jsonData from '../assets/antiragging.json';
  
  export default {
    data() {
      return {
        jsonData: jsonData
      };
    }
  };
  </script>

<style>
</style>
