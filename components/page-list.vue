<template>
  <div>
    <ul>
      <li v-for="page in articles">
        <nuxt-link :to="page.path">{{ page.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: 'page-list',
    props: ['byTag', 'byPath'],
    data: () => ({
      articles: [],
    }),
    computed: {
      byTagArray() {
        if (!this.byTag) {
          return []
        }

        if (Array.isArray(this.byTag)) {
          return this.byTag
        }

        return this.byTag.split(',').map(s => s.trim())
      }
    },
    async fetch() {
      let query

      if (this.byPath) {
        query = this.$content(this.byPath, {deep: true}).where({slug: {$ne: '_index'}})
      } else {
        query = this.$content({deep: true})
      }

      if (this.byTagArray.length > 0) {
        query = query.where({tags: {$contains: this.byTagArray}})
      }

      query = query
        .only(['slug', 'title', 'tags', 'path'])
        .sortBy('title', 'asc')

      this.articles = await query.fetch()
    },
  }
</script>

<style scoped>

</style>
