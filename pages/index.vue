<script setup lang="ts">
import { ApiResponse } from '~/lib/api-util';

const { data } = await useFetch<ApiResponse<"/api/product", "get">>('/api/product');
</script>
<template>
  <div>
    <NuxtLink to="/about">About</NuxtLink>
  </div>
</template>