<template>
  <nuxt-link class="ability-view" :to="{name: 'search-query', params: $route.params, query: {ability}}" :class="{inline}">
    <img class="ability-icon" :src="`/media/abilities/${ability}.png`" :alt="ability">
    {{ abilityDisplayString }}
  </nuxt-link>
</template>

<script>
  export default {
    name: 'ability-view',
    props: {
      ability: String,
      inline: {
        type: Boolean,
        default: false,
      }
    },
    computed: {
      abilityDisplayString() {
        return this.ability.replace(/\b[a-z]/g, letter => letter.toUpperCase())
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ability-view {
    height: 2em;
    display: flex;
    align-items: center;
    position: relative;
    padding: 0.25em 1em;
    color: var(--color-foreground);

    &.inline {
      display: inline;
      height: 1.5em;
      padding: 0 !important;

      .ability-icon {
        height: 1.7em;
        margin-right: 0.25em;
        vertical-align: middle;
        transform: translateY(-0.2em);
      }
    }

    &:not(.inline) {
      &:first-of-type {
        margin-top: 0.25em;
      }

      &:last-of-type {
        margin-bottom: 0.25em;
      }

      &:hover {
        background-color: var(--color-background-lighter);
      }
    }
  }

  .ability-icon {
    margin-right: 1em;
    height: 100%;
  }
</style>
