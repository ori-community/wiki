<template>
  <main>
    <search-bar :initial-query="$route.params.query" />

    <ul v-if="articles.length > 0">
      <li v-for="article in articles">
        <nuxt-link :to="article.path">{{ article.title }}</nuxt-link>
      </li>
    </ul>
    <div v-else class="no-results">
      <img src="../../assets/images/ori_shrug.png">

      <h2>No results</h2>
    </div>
  </main>
</template>

<script>
  import SearchBar from '~/components/search-bar'
  import {mapContentPaths} from '~/assets/lib/mapContentPaths'

  export default {
    components: {SearchBar},
    async asyncData({$content, params}) {
      const articles = mapContentPaths(await $content({deep: true}).search(params.query).fetch())

      return {
        articles: articles
      }
    },
    data: () => ({
      visible: true,
    }),
    head() {
      return {
        title: 'Search',
      }
    },
  }
</script>

<style lang="scss" scoped>
  .no-results {
    text-align: center;
    padding-top: 2em;

    img {
      width: 4em;
      height: 4em;
    }
  }
</style>
