<template>
  <nav class="fixed top-0 left-0 w-full bg-white shadow z-50 h-[64px]">
    <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <div class="text-2xl font-bold text-blue-600">
        <RouterLink to="/">
          <div class="grid gap-2 grid-cols-[minmax(0,max-content)_minmax(0,max-content)]">
            <img src="/bagels-bytes-icon.png" alt="logo" class="h-8 w-8" />
            <p>Bagel's Bytes</p>
          </div>
        </RouterLink>
      </div>
      <ul class="flex gap-8 text-gray-700">
        <li><RouterLink to="/" class="hover:text-blue-500">Home</RouterLink></li>
        <li><RouterLink to="/about" class="hover:text-blue-500">About</RouterLink></li>
        <li><RouterLink to="/contact" class="hover:text-blue-500">Contact</RouterLink></li>
      </ul>
    </div>
  </nav>

  <!-- Spacer div to push content below navbar -->
  <div class="h-[64px]"></div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
