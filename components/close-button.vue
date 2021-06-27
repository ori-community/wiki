<template>
  <a @click="$emit('click')">
    <svg class="close-button-svg" viewBox="0 0 24 24">
      <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
    </svg>
  </a>
</template>

<script>
  export default {
    name: 'close-button'
  }
</script>

<style lang="scss" scoped>
  .close-button-svg {
    height: 1em;
    width: 1em;
    vertical-align: middle;
  }
</style>
