<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const thisBook = ref({});
const isLoading = ref(true);
const route = useRoute();
const bookDetail = `http://localhost:3000/books/${route.params.id}`;

onMounted(async () => {
  const response = await fetch(bookDetail);
  const data = await response.json();
  thisBook.value = data;
  isLoading.value=false
  console.log(thisBook);
});
</script>

<template>
<h2 v-if="isLoading">Loading...</h2>
<section v-else class="py-24 relative">
    <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
      <div
        class="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1"
      >
        <div
          class="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex"
        >
          <div
            class="w-full flex-col justify-start lg:items-start items-center gap-4 flex"
          >
            <h2
              class="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center"
            >
              {{ thisBook.title }}
            </h2>
            <p
              class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center"
            >
              {{ thisBook.publicationYear }}
            </p>
            <h4 class="mb-2 text-slate-800 text-l font-semibold">
              {{ thisBook.author.firstName }}
              {{ thisBook.author.lastName.toUpperCase() }}
            </h4>
            <p
              class="text-gray-900 text-base font-normal leading-relaxed lg:text-start text-center"
            >
              {{ thisBook.recap }}
            </p>
          </div>
        </div>
        <img
          class="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
          :src="thisBook.coverUri"
          alt="about Us image"
        />
      </div>
    </div>
  </section>
</template>
