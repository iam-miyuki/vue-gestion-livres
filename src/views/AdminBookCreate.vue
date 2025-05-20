<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const newBook = ref({
  title: "",
  publicationYear: "",
  recap: "",
  coverUri: "",
  author: {
    firstName: "",
    lastName: "",
  },
});

const createBook = async () => {
  const newBookUrl = `http://localhost:3000/books`;

  try {
    const response = await fetch(newBookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook.value),
    });

    if (!response.ok) {
      throw new Error("Échec de la création");
    }

    const createdBook = await response.json();
    console.log("Livre a été créé avec succès :", createdBook);
    alert("Le livre a été créé avec succès.");
    router.push("/admin/books"); // ✅ redirection correcte
  } catch (error) {
    console.error("Erreur lors de la création :", error);
    alert("Une erreur est survenue lors de la création du livre.");
  }
};
</script>


<template>
  <section class="max-w-3xl mx-auto px-4 py-10">
    <h2 class="text-2xl font-bold text-slate-800 mb-6">
      Ajouter un nouveau livre
    </h2>
    <form
      @submit.prevent="createBook()"
      class="space-y-6 bg-white p-6 rounded-lg shadow-md"
    >
      <!-- Titre -->
      <div>
        <label for="title" class="block text-sm font-medium text-slate-700 mb-1"
          >Titre</label
        >
        <input
          id="title"
          type="text"
          required
          v-model="newBook.title"
          class="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <!-- Année de publication -->
      <div>
        <label for="year" class="block text-sm font-medium text-slate-700 mb-1"
          >Année de publication</label
        >
        <input
          id="year"
          type="number"
          required
          v-model="newBook.publicationYear"
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
          required
          v-model="newBook.author.firstName"
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
          required
          v-model="newBook.author.lastName"
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
          v-model="newBook.recap"
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
          required
          v-model="newBook.coverUri"
          class="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <!-- Bouton -->
      <div class="pt-4">
        <button
          type="submit"
          class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Ajouter le livre
        </button>
      </div>
    </form>
  </section>
</template>
