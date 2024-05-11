<template>
  <div class="container mx-auto p-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <NuxtLink
        v-for="(product, index) in products"
        :key="index"
        :to="`/product/${product.id}`"
        class="col-span-1"
      >
        <!-- Pass product as prop to ProductCard -->
        <ProductCard :product="product" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
// Assuming you have products data available here
const products = [
  {
    id: 1,
    title: "Product 1",
    image: "https://via.placeholder.com/400x250",
    isNew: true,
  },
  {
    id: 2,
    title: "Product 2",
    image: "https://via.placeholder.com/400x250",
    isNew: false,
  },
  {
    id: 3,
    title: "Product 3",
    image: "https://via.placeholder.com/400x250",
    isNew: true,
  },
  {
    id: 4,
    title: "Product 4",
    image: "https://via.placeholder.com/400x250",
    isNew: false,
  },
  // Add more products as needed
];
</script>

<style lang="scss" scoped>
/* Your styles here */
</style>
