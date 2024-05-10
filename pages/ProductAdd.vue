<template>
  <div class="container mx-auto p-8">
    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
      <div class="col-span-1"></div>
      <div class="col-span-1">
        <h1 class="text-3xl font-semibold mb-4">Welcome, {{ username }}</h1>
        <h2 class="text-xl font-semibold mb-2">Add Product</h2>
        <form @submit.prevent="addProduct">
          <div class="mb-4">
            <label
              for="productName"
              class="block text-sm font-medium text-gray-700"
              >Product Name</label
            >
            <input
              type="text"
              v-model="productName"
              id="productName"
              name="productName"
              class="form-input mt-1 block w-full"
              required
            />
          </div>
          <div class="mb-4">
            <label
              for="productImage"
              class="block text-sm font-medium text-gray-700"
              >Product Image</label
            >
            <input
              type="file"
              ref="fileInput"
              accept="image/*"
              @change="handleFileChange"
              required
            />
          </div>
          <button
            type="submit"
            class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Add Product
          </button>
        </form>
        <div class="mt-8">
          <h2 class="text-xl font-semibold mb-2">Products</h2>
          <div
            v-for="product in products"
            :key="product._id"
            class="flex items-center border-b border-gray-200 py-4"
          >
            <img
              :src="product.imageUrl"
              alt="Product Image"
              class="w-20 h-20 object-cover mr-4"
            />
            <div>
              <h3 class="text-lg font-semibold">{{ product.name }}</h3>
              <!-- Add link to view product details page -->
              <router-link
                :to="{ name: 'product', params: { id: product._id } }"
                class="text-blue-500 hover:underline"
                >View Details</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-1"></div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import axios from "axios";

const productName = ref("");
const productData = reactive({
  image: null,
});

const handleFileChange = (event) => {
  productData.image = event.target.files[0];
};

const addProduct = async () => {
  try {
    const formData = new FormData();
    formData.append("productName", productName.value);
    formData.append("productImage", productData.image);

    const response = await axios.post("/api/products", formData);

    productName.value = "";
    productData.image = null;

    fetchProducts();
  } catch (error) {
    console.error("Error adding product:", error);
  }
};

// Your existing fetchProducts function
</script>
