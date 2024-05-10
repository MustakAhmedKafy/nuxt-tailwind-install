<template>
  <div class="container mx-auto p-8">
    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
      <div class="col-span-1"></div>
      <div class="col-span-1">
        <h1 class="text-3xl font-semibold mb-4 pt-24">Login</h1>
        <form  @submit.prevent="loginUser">
          <div class="mb-4">
            <label
              for="username"
              class="block text-sm font-medium text-gray-700"
              >Username</label
            >
            <input
              type="text"
              v-model="username"
              id="username"
              name="username"
              class="form-input mt-1 block w-full"
              required
            />
          </div>
          <div class="mb-4">
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
              >Password</label
            >
            <input
              type="password"
              v-model="password"
              id="password"
              name="password"
              class="form-input mt-1 block w-full"
              required
            />
          </div>
          <button
            type="submit"
            class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
      <div class="col-span-1"></div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const username = ref("");
const password = ref("");

const loginUser = async () => {
  try {
    // Call API to authenticate user
    // Redirect to product add page after successful login
  } catch (error) {
    console.error("Error logging in:", error);
  }
};
</script>
