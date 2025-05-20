<script setup>

</script>
<template>
    <section class="max-w-3xl mx-auto px-4 py-10">
      <h2 class="text-2xl font-bold text-slate-800 mb-6">
        Ajouter un nouveau livre
      </h2>
      <form class="space-y-6 bg-white p-6 rounded-lg shadow-md">
        <!-- Titre -->
        <div>
          <label
            for="title"
            class="block text-sm font-medium text-slate-700 mb-1"
            >Titre</label
          >
          <input
            id="title"
            type="text"
            required
            class="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Année de publication -->
        <div>
          <label
            for="year"
            class="block text-sm font-medium text-slate-700 mb-1"
            >Année de publication</label
          >
          <input
            id="year"
            type="number"
            required
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
            class="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Résumé -->
        <div>
          <label
            for="recap"
            class="block text-sm font-medium text-slate-700 mb-1"
            >Résumé</label
          >
          <textarea
            id="recap"
            rows="4"
            required
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
