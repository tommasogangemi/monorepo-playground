<template>
  <div>
    <div>I am the nuxt project</div>
    <div>{{ fromApiModule }}</div>
  </div>
</template>

<script setup lang="ts">
import { getApiCommonFlag } from 'api-common'

defineComponent({ name: 'NuxtProjectPage' })

type WithName = { name: string }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const a: WithName = { name: '22' }

const fromApiModule = getApiCommonFlag()
</script>
