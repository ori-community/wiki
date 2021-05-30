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
      const terms = params.query.split(' ')

      const titleQuery = $content({deep: true}).search({
        query: {
          type: 'bool',
          operator: 'and',
          minimum_should_match: terms.length,
          should: terms.map(term => ({
            type: 'match',
            field: 'title',
            value: term,
            prefix_length: 1,
            fuzziness: 0,
            extended: false
          }))
        }
      })

      const textQuery = $content({deep: true}).search({
        query: {
          type: 'bool',
          operator: 'and',
          minimum_should_match: terms.length,
          should: terms.map(term => ({
            type: 'match',
            field: 'text',
            value: term,
            prefix_length: 1,
            fuzziness: 0,
            extended: false
          }))
        }
      })

      const [
        titleArticles,
        textArticles
      ] = await Promise.all([titleQuery.fetch(),  textQuery.fetch()])
      const articles = [...titleArticles, ...textArticles]

      const uniqueArticles = articles.filter(
        (article, index) => articles.findIndex(
          a => a.path === article.path
        ) === index
      )

      return {articles: uniqueArticles}
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
