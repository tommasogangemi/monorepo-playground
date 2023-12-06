<template>
  <div>I am the nuxt project</div>
</template>

<script setup lang="ts">
defineComponent({ name: 'NuxtProjectPage' })

type WithName = { name: string }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const a: WithName = { name: '22' }
</script>
