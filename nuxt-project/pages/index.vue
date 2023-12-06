<template>
  <div>I am the nuxt project</div>
</template>

<script setup lang="ts">
defineComponent({ name: 'NuxtProjectPage' })

type WithName = { name: string }

const a: WithName = { name: '22' }
</script>
