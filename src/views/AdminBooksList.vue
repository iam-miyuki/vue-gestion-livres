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


const deleteBook = async (id) => {
  const deleteBookUrl = `http://localhost:3000/books/${id}`;

  try {
    const response = await fetch(deleteBookUrl, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Échec de la suppression');
    }

    alert('Le livre a été supprimé avec succès.');
  } catch (error) {
    console.error('Erreur lors de la suppression :', error);
    alert('Une erreur est survenue lors de la suppression du livre.');
  }
};
</script>

<template>
  <!-- Header admin -->
  <div class="w-full flex justify-between items-center mb-4 mt-2 px-4">
    <h3 class="text-xl font-semibold text-slate-800">Admin - Livres</h3>
    <RouterLink to="/admin/books/create">
      <button
        class="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        Ajouter un livre
      </button>
    </RouterLink>
  </div>

  <!-- Tableau de livres -->
  <div class="overflow-x-auto px-4">
    <div class="relative w-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg">
      
      <!-- Message de chargement -->
      <h2 v-if="isLoading" class="p-4 text-slate-600">Chargement...</h2>
      
      <!-- Table de livres -->
      <table v-else class="w-full text-left table-auto min-w-max">
        <thead>
          <tr class="border-b border-slate-300 bg-slate-50">
            <th class="p-4 text-sm font-semibold text-slate-600">Cover</th>
            <th class="p-4 text-sm font-semibold text-slate-600">Titre</th>
            <th class="p-4 text-sm font-semibold text-slate-600">Année</th>
            <th class="p-4 text-sm font-semibold text-slate-600">Auteur</th>
            <th class="p-4 text-sm font-semibold text-slate-600 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="book in allBooks"
            :key="book._id"
            class="hover:bg-slate-50 border-b border-slate-200"
          >
            <td class="p-4">
              <img
                :src="book.coverUri"
                alt="cover"
                class="w-16 h-20 object-cover rounded"
              />
            </td>
            <td class="p-4">
              <p class="font-semibold text-slate-800">{{ book.title }}</p>
            </td>
            <td class="p-4">
              <p class="text-slate-700">{{ book.publicationYear }}</p>
            </td>
            <td class="p-4">
              <p class="text-slate-600">
                {{ book.author.lastName.toUpperCase() }} {{ book.author.firstName }}
              </p>
            </td>
            <td class="p-4 flex justify-end gap-2">
              <!-- Bouton modifier -->
              <RouterLink :to="`/admin/books/update/${book._id}`">
                <button class="text-gray-600 hover:text-gray-800" title="Modifier">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712L3.65 16.638a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"
                    />
                  </svg>
                </button>
              </RouterLink>
              <!-- Bouton supprimer -->
              <button
                class="text-gray-600 hover:text-gray-800"
                title="Supprimer"
                @click="deleteBook(book._id)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
