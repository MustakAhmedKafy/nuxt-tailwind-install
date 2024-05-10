<template>
  <Header />
  <div class="container mx-auto p-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <!-- Product Cards -->

      <div
        v-for="(product, index) in products"
        :key="index"
        class="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden"
      >
        <div class="relative">
          <img
            class="w-full h-64 object-cover object-center"
            :src="product.image"
            :alt="product.title"
          />
          <div
            v-if="product.isNew"
            class="absolute top-0 left-0 bg-gray-800 text-white px-2 py-1 m-4 rounded-full uppercase text-xs font-semibold"
          >
            New
          </div>
        </div>
        <div class="p-4">
          <h2 class="text-xl font-semibold text-gray-800">
            {{ product.title }}
          </h2>
        </div>
        <!-- <router-link
          :to="{ name: 'product', params: { id: product._id } }"
          class="text-blue-500 hover:underline"
          >View Details</router-link
        > -->
      </div>
    </div>
  </div>
</template>

<script setup>
const products = [
  {
    title: "Product Title 1",
    image: "https://via.placeholder.com/400x250",
    isNew: true,
  },
  {
    title: "Product Title 2",
    image: "https://via.placeholder.com/400x250",
    isNew: false,
  },
  {
    title: "Product Title 3",
    image: "https://via.placeholder.com/400x250",
    isNew: true,
  },
  {
    title: "Product Title 4",
    image: "https://via.placeholder.com/400x250",
    isNew: false,
  },
];
</script>
