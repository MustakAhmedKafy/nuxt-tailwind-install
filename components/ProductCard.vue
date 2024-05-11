<template>
  <div
    v-if="product.id"
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
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>

<style lang="scss" scoped></style>
