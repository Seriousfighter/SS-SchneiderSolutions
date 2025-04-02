<template>
  <div class="bg-gray-900 py-16 px-4 md:px-8">
    <!-- Page Header -->
    <div class="max-w-4xl mx-auto text-center mb-16">
      <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
        Our <span class="text-[#E1FF2D]">Portfolio</span>
      </h1>
      <p class="text-gray-400 max-w-2xl mx-auto">
        Explore our collection of successful projects. Each one represents our commitment to quality, innovation, and meeting our clients' unique needs.
      </p>
    </div>

    <!-- Filter Controls (Optional) -->
    <div class="max-w-6xl mx-auto mb-12">
      <div class="flex flex-wrap justify-center gap-3">
        <button 
          @click="activeFilter = 'all'" 
          class="px-4 py-2 rounded-full border transition-colors"
          :class="activeFilter === 'all' ? 'bg-[#E1FF2D] text-black border-[#E1FF2D]' : 'border-gray-600 text-gray-300 hover:border-[#E1FF2D]/50'"
        >
          All Projects
        </button>
        <button 
          v-for="category in categories" 
          :key="category"
          @click="activeFilter = category" 
          class="px-4 py-2 rounded-full border transition-colors"
          :class="activeFilter === category ? 'bg-[#E1FF2D] text-black border-[#E1FF2D]' : 'border-gray-600 text-gray-300 hover:border-[#E1FF2D]/50'"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <!-- Projects Grid -->
    <div class="max-w-6xl mx-auto">
      <div 
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
        v-if="filteredProjects.length > 0"
      >
        <div 
          v-for="(project, index) in filteredProjects" 
          :key="index" 
          class="h-full"
        >
          <project 
            :images="project.images"
            :title="project.title"
            :description="project.description"
            :tags="project.tags"
          />
        </div>
      </div>

      <!-- No Projects Message -->
      <div v-else class="text-center py-12">
        <p class="text-gray-400">No projects match the selected filter.</p>
      </div>
    </div>

    <!-- CTA Section -->
    <cta />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

// Active filter state
const activeFilter = ref('all');

// Project data - Just pass the file names
const projects = [
  {
    title: "Escuelita Virtual",
    description: "A comprehensive SaaS CRM solution for educational institutions, featuring student management, grading systems, and parent communication tools.",
    // Just pass the file names, not full paths
    images: ["../projects/escuelita/img1.png", "../projects/escuelita/img2.png", "../projects/escuelita/img3.png", "../projects/escuelita/img4.png"], 
    tags: ["Web App", "Education", "CRM","Saas"],
    category: "Web Development"
  },
  {
    title: "Kaput!",
    description: "Advanced control application for poultry farms, with real-time monitoring, automated feeding systems, and analytics dashboard.",
    images: ["../projects/Kaput/img1.png","../projects/Kaput/img2.png","../projects/Kaput/img3.png"],
    tags: ["IoT", "Agriculture", "Dashboard","Under cosntruction"],
    category: "IoT Solutions"
  },
  {
    title: "Equipo Guru",
    description: "A modern SSR website implementation with dynamic content management and optimized performance for a professional services firm.",
    images: ["../projects/EquipoGuru/img1.png", "../projects/EquipoGuru/img2.png","../projects/EquipoGuru/img3.png"],
    tags: ["Web Development", "SSR", "UX Design"],
    category: "Web Development"
  },
  {
    title: "Domus",
    description: "CRM for real state administration. ",
    images: ["../projects/Domus/img1.png"],
    tags: ["Real State", "CRM", "Web App","Under cosntruction"],
    category: "Data Visualization"
  },
  {
    title: "Baires Vive",
    description: "Design implementation in existing project. We took the desing, the existing code and made it work together.",
    images: ["../projects/BairesVive/img1.png", "../projects/BairesVive/img2.png","../projects/BairesVive/img3.png"],
    tags: ["Design Integration", "Frontend Development", "UI Implementation"],
    category: "Mobile Development"
  },
  {
    title: "E-commerce Platform",
    description: "Full-featured e-commerce solution with inventory management, payment processing, and customer relationship tools.",
    images: ["ecommerce-1.jpg"],
    tags: ["E-commerce", "Web App", "Payment Systems"],
    category: "Web Development"
  }
];

// Extract unique categories
const categories = [...new Set(projects.map(project => project.category))];

// Filter projects based on active filter
const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects;
  }
  return projects.filter(project => project.category === activeFilter.value);
});
</script>