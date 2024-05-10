<template>
  <div class="container mx-auto p-8">
    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
      <div class="col-span-1"></div>
      <div class="col-span-1">
        <h1 class="text-3xl font-semibold mb-4 pt-24">Register</h1>
        <form @submit.prevent="registerUser">
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
            Register
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

const registerUser = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/v1/user/signup", {
      method: "POST",
      mode: "no-cors", // Set 'no-cors' mode to bypass CORS restrictions
      headers: {
        "Content-Type": "application/json", // Specify that the request body is JSON
      },
     body: JSON.stringify({ // Stringify the object
        name: "username.value",
        password: "password.value",
      }),
    });
    console.log(res);
  } catch (error) {
    console.error("Error registering user:", error);
  }
};
</script>
