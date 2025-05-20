<script setup>
import { ref } from "vue";
</script>
<template>


<header class="bg-white shadow-md px-6 py-4 flex items-center justify-between">
  <div class="flex items-center space-x-4">
    <!-- Icône Home -->
    <RouterLink to="/" class="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-4 0h4" />
      </svg>
      <span>SF Books</span>
    </RouterLink>

    <!-- Icône Admin -->
    <RouterLink to="/admin/books" class="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A3 3 0 006 21h12a3 3 0 00.879-5.196M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <span>Admin</span>
    </RouterLink>
  </div>
</header>


</template>
