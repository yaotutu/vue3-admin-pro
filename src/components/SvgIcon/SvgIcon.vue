<template>
  <svg aria-hidden="true">
    <use :href="`${prefix}${name}`" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  prefix: {
    type: String,
    default: '#icon-'
  },
  name: {
    type: String,
    required: true
  }
})
const computedHref = computed(() => `${props.prefix}-${props.name}`)

console.log('SvgIcon')
console.log(computedHref.value)
</script>

<style lang="css"></style>
