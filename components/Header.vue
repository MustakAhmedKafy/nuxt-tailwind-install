<template>
  <div>
    <nav class="bg-gray-800 p-4">
      <div class="container px-8">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="flex items-center">
            <!-- <img src="logo.png" alt="Logo" class="h-8 mr-2"> -->
            <h1 class="text-white text-lg font-semibold">Your Logo</h1>
          </div>
          <!-- Menu -->

          <!-- Button -->
          <!-- Login Button -->
          <div class="gap-4 flex">
            <NuxtLink to="/login"
              ><button
              
                class="bg-white text-gray-800 px-4 py-2 rounded-md"
              >
                Login
              </button></NuxtLink
            >
            <!-- Register Button -->
             <NuxtLink to="/register">
              <button class="bg-white text-gray-800 px-4 py-2 rounded-md">
                Register
              </button>
            </NuxtLink>
            <NuxtLink to="/ProductAdd">
              <button class="bg-white text-gray-800 px-4 py-2 rounded-md">
                Add Products
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const goToLogin = () => {
  router.push("/login"); // Change '/login' to the actual route of your login page
};
</script>
