<template>
  <div class="search-container">
    <div class="relative">
      <input
        v-model="searchQuery"
        class="search-input"
        type="text"
        @keydown.enter="search"
      >
      <svg v-if="!searchQuery" class="search-icon" viewBox="0 0 24 24">
        <path
          d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
          fill="currentColor"
        />
      </svg>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'search-bar',
    props: ['initialQuery'],
    data: vm => ({
      searchQuery: vm.initialQuery ?? '',
    }),
    methods: {
      search() {
        if (this.$route.params.query !== this.searchQuery) {
          if (this.searchQuery) {
            this.$router.push({name: 'search-query', params: {query: this.searchQuery}, query: this.$route.query})
          } else {
            this.$router.push({name: 'search-query', query: this.$route.query})
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .search-container {
    display: flex;
    justify-content: center;

    .relative {
      position: relative;
    }

    .search-icon {
      color: var(--color-secondary);
      height: 80%;
      left: 1em;
      margin: 0.4em 0;
      pointer-events: none;
      position: absolute;
      transition: opacity 150ms, transform 150ms;
    }

    .search-input {
      background-color: var(--color-background-light);
      border: none;
      border-radius: 2.5em;
      color: var(--color-foreground);
      font-size: 1.1em;
      line-height: 1;
      max-width: calc(100vw - 4em);
      padding: 0.8em 0.7em 0.7em 1em;

      &:hover,
      &:focus {
        background-color: var(--color-background-lighter);
        outline: none;
      }

      &:focus + .search-icon {
        opacity: 0;
        transform: translateX(10px);
      }
    }
  }
</style>
