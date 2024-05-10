<!-- pages/product/_id.vue -->
<template>
  <div>
    <h1>Product Details</h1>
    <img :src="product.image" alt="Product Image">
    <p>{{ product.name }}</p>
    <!-- Other product details -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const product = ref({});

const fetchProductDetails = async () => {
  // Fetch product details using 'this.$route.params.id'
  try {
    const productId = $route.params.id; // Assuming $route is available in the component
    const response = await fetch(`api/products/${productId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product details');
    }
    const data = await response.json();
    product.value = data;
  } catch (error) {
    console.error(error);
  }
};

onMounted(fetchProductDetails);
</script>
