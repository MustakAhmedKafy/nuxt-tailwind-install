<!-- pages/product/_id.vue -->
<template>
  <div>
    <h1>Product Details</h1>
    <img :src="product.image" alt="Product Image" />
    <p>{{ product.name }}</p>

    <!-- <ProductCard v-if="product" :product="product"/> -->
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const product = ref({});

const route = useRoute();

const fetchProductDetails = async () => {
  try {
    const productId = route.params.id;
    console.log(route);
    const response = await fetch(`api/product/${productId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch product details");
    }
    const data = await response.json();
    product.value = data;
  } catch (error) {
    console.error(error);
  }
};

onMounted(async () => {
  await fetchProductDetails();
});
</script>

<!-- <script setup>
const route = useRoute();
</script>

<template>
  <div>
    <h1>This is product page for ID: {{ $route.params.id }}</h1>
  </div>
</template>

<script setup></script> -->

<!-- pages/product/_id.vue -->
