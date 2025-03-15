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
    images: ["img1.webp", "img2.webp"], 
    tags: ["Web App", "Education", "CRM"],
    category: "Web Development"
  },
  {
    title: "Kaput!",
    description: "Advanced control application for poultry farms, with real-time monitoring, automated feeding systems, and analytics dashboard.",
    images: ["img3.webp"],
    tags: ["IoT", "Agriculture", "Dashboard"],
    category: "IoT Solutions"
  },
  {
    title: "Equipo Guru",
    description: "A modern SSR website implementation with dynamic content management and optimized performance for a professional services firm.",
    images: ["img4.webp", "img5.webp"],
    tags: ["Web Development", "SSR", "UX Design"],
    category: "Web Development"
  },
  {
    title: "Financial Dashboard",
    description: "Interactive financial analytics platform with real-time market data, portfolio tracking, and personalized investment recommendations.",
    images: ["finance-1.jpg"],
    tags: ["Finance", "Dashboard", "Analytics"],
    category: "Data Visualization"
  },
  {
    title: "Health Tracker App",
    description: "Mobile application for health monitoring, fitness tracking, and nutritional guidance with personalized wellness plans.",
    images: ["health-1.jpg", "health-2.jpg"],
    tags: ["Mobile App", "Healthcare", "UX Design"],
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