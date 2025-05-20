<script setup>
const API_URL = "http://localhost:3000/books";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const allBooks = ref([]);
const isLoading = ref(true);

onMounted(async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  allBooks.value = data;
  isLoading.value = false;
  console.log(allBooks);
});
</script>

<template>
  <h2 v-if="isLoading">Chargement...</h2>
  <div
    v-else
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-4"
  >
    <div
      v-for="book in allBooks"
      :key="book._id"
      class="flex flex-col sm:flex-row bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden"
    >
      <!-- Image à gauche -->
      <div class="sm:w-1/3 w-full h-48 sm:h-auto">
        <img
          :src="book.coverUri"
          alt="Cover"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Contenu à droite -->
      <div class="flex flex-col justify-between p-4 flex-grow">
        <div>
          <h4 class="text-lg font-semibold text-slate-800 mb-1">
            {{ book.title }}
          </h4>
          <p class="text-slate-600 text-sm mb-2">
            {{ book.author.firstName }} {{ book.author.lastName.toUpperCase() }}
          </p>
        </div>
        <RouterLink
          :to="`/books/${book._id}`"
          class="mt-2 inline-flex items-center text-sm font-medium text-blue-600 hover:underline"
        >
          Voir le détail
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ml-1 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
