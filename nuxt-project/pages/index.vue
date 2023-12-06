<template>
  <div>I am the nuxt project</div>
</template>

<script setup lang="ts">
// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

defineComponent({ name: 'NuxtProjectPage' })

type WithName = { name: string }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const a: WithName = { name: '22' }
</script>
