<script setup>
const API_URL = "http://localhost:3000/books";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const allBooks = ref({});

onMounted(async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  allBooks.value = data;
  console.log(allBooks);
});
</script>

<template>
  <div
    v-for="book in allBooks"
    :key="book._id"
    class="relative flex flex-col md:flex-row my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96"
  >
    <div class="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
      <img :src="book.coverUri" class="rounded-md md:rounded-lg object-cover" />
    </div>
    <div class="p-6">
      <h4 class="mb-2 text-slate-800 text-xl font-semibold">
        {{ book.title }}
      </h4>
      <h4 class="mb-2 text-slate-800 text-l font-semibold">
        {{ book.author.firstName }} {{ book.author.lastName }}
      </h4>
      <p class="mb-8 text-slate-600 leading-normal font-light">
        {{ book.recap }}
      </p>
      <div>
        <RouterLink
          :to="{name:'home'}"
          class="text-slate-800 font-semibold text-sm hover:underline flex items-center"
        >
          Voir le détail
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ml-2 h-4 w-4"
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
