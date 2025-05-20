<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const thisBook = ref({
  author: {},
});

const isLoading = ref(true);
const route = useRoute();

const fetchBook = async () => {
  const bookDetail = `http://localhost:3000/books/${route.params.id}`;
  const response = await fetch(bookDetail);
  const data = await response.json();
  return data;
};

onMounted(async () => {
  try {
    thisBook.value = await fetchBook();
  } catch (error) {
    console.error('Failed to fetch book:', error);
  } finally {
    isLoading.value = false;
  }
});

const updateBook = async () => {
  const bookDetail = `http://localhost:3000/books/${route.params.id}`;

  try {
    const response = await fetch(bookDetail, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(thisBook.value),
    });

    if (!response.ok) {
      throw new Error('Échec de la mise à jour');
    }

    const updatedBook = await response.json();
    console.log('Livre mis à jour avec succès :', updatedBook);
    alert('Le livre a été modifié avec succès.');
  } catch (error) {
    console.error('Erreur lors de la mise à jour :', error);
    alert('Une erreur est survenue lors de la modification du livre.');
  }
};

</script>


<template>
  <section class="max-w-3xl mx-auto px-4 py-10">
    <h2 v-if="isLoading && !thisBook">Chargement...</h2>
    <h2 v-else class="text-2xl font-bold text-slate-800 mb-6">
      Modifier un livre
    </h2>
    <form 
    @submit.prevent="updateBook()"
    class="space-y-6 bg-white p-6 rounded-lg shadow-md">
      <!-- Titre -->
      <div>
        <label for="title" class="block text-sm font-medium text-slate-700 mb-1"
          >Titre</label
        >
        <input
          v-model="thisBook.title"
          id="title"
          type="text"
          class="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <!-- Année de publication -->
      <div>
        <label for="year" class="block text-sm font-medium text-slate-700 mb-1"
          >Année de publication</label
        >
        <input
          v-model="thisBook.publicationYear"
          id="year"
          type="number"
          class="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <!-- Auteur prénom -->
      <div>
        <label        
          for="firstName"
          class="block text-sm font-medium text-slate-700 mb-1"
          >Prénom de l'auteur</label
        >
        <input
          id="firstName"
          type="text"
          v-model="thisBook.author.firstName"
          class="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <!-- Auteur nom -->
      <div>
        <label
          for="lastName"
          class="block text-sm font-medium text-slate-700 mb-1"
          >Nom de l'auteur</label
        >
        <input
          id="lastName"
          type="text"
          v-model="thisBook.author.lastName"
          class="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <!-- Résumé -->
      <div>
        <label for="recap" class="block text-sm font-medium text-slate-700 mb-1"
          >Résumé</label
        >
        <textarea
          id="recap"
          rows="4"
          v-model="thisBook.recap"
          class="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <!-- Image (URL) -->
      <div>
        <label
          for="coverUri"
          class="block text-sm font-medium text-slate-700 mb-1"
          >URL de l’image de couverture</label
        >
        <input
          id="coverUri"
          type="url"
          v-model="thisBook.coverUri"
          class="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <!-- Bouton -->
      <div class="pt-4">
        <button
          type="submit"
          class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Modifier
        </button>
      </div>
    </form>
  </section>
</template>
