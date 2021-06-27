<template>
  <main>
    <search-bar :initial-query="$route.params.query"/>

    <expand-transition>
      <div class="text-center" v-if="advancedSearch">
        <div class="advanced-search">
          <div class="filter-heading">Filter by abilities:</div>
          <div class="abilities">
            <ability-view v-for="ability of allAbilities" :key="ability" :ability="ability"/>
          </div>
        </div>
      </div>
    </expand-transition>

    <a @click="advancedSearch = !advancedSearch" class="text-center d-block">
      {{ advancedSearch ? 'Simple' : 'Advanced' }} search
    </a>

    <div class="results" v-if="articles.length > 0">
      <div>
        <h2>Results:</h2>

        <div v-if="$route.query.ability">
          Only showing results related related to
          <ability-view :ability="$route.query.ability" inline/>
          <close-button title="Remove filter" @click="$router.push({name: $route.name, params: $route.params})" />
        </div>

        <ul>
          <li v-for="article in filteredArticles">
            <nuxt-link :to="article.path">{{ article.title }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>

    <div v-else class="no-results">
      <img src="../../assets/images/ori_shrug.png">

      <h2>
        No results
        <template v-if="$route.query.ability">
          related to <ability-view :ability="$route.query.ability" inline/>
          <close-button title="Remove filter" @click="$router.push({name: $route.name, params: $route.params})" />
        </template>
      </h2>
    </div>
  </main>
</template>

<script>
  import SearchBar from '~/components/search-bar'
  import ExpandTransition from '~/components/expand-transition'
  import AbilityView from '~/components/ability-view'
  import CloseButton from '~/components/close-button'

  export default {
    components: {CloseButton, AbilityView, ExpandTransition, SearchBar},
    async asyncData({$content, params, query}) {
      let articles = []

      const allQuery = $content({deep: true})
      const allArticles = await allQuery.fetch()

      if (params.query) {
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
          textArticles,
        ] = await Promise.all([titleQuery.fetch(), textQuery.fetch()])

        articles = [...titleArticles, ...textArticles]
      } else {
        articles = allArticles
          .filter(a => !!a.title)
          .sort((a, b) => a.title.localeCompare(b.title))
      }

      // Filter unique articles
      articles = articles.filter(
        (article, index) => articles.findIndex(
          a => a.path === article.path
        ) === index
      )

      return {
        articles,
        allAbilities: new Set(allArticles.reduce((acc, article) => {
          return acc.concat(article.tags?.abilities ?? [])
        }, [])),
      }
    },
    data: () => ({
      visible: true,
      advancedSearch: false,
    }),
    computed: {
      filteredArticles() {
        // Do the client side filtering...
        // Filter by ability, if given
        let articles = this.articles
        if (this.$route.query.ability) {
          articles = articles.filter(article => {
            const abilities = article.tags?.abilities ?? null

            if (abilities === null) {
              return false
            }

            return abilities.includes(this.$route.query.ability)
          })
        }

        return articles
      },
    },
    head() {
      return {
        title: 'Search',
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "assets/style/framework";

  .no-results {
    text-align: center;
    padding-top: 2em;

    img {
      width: 4em;
      height: 4em;
    }
  }

  .results {
    display: flex;
    justify-content: center;
  }

  .advanced-search {
    border-radius: 1em;
    background-color: var(--color-background-light);
    margin-top: 1em;
    overflow: hidden;
    display: inline-block;
    text-align: left;
    min-width: 20vw;

    .filter-heading {
      padding: 1em 1em 0;
    }

    .abilities {
      padding-bottom: 0.5em;
      display: grid;
      grid-template-columns: 1fr 1fr;

      @include screen(sm) {
        grid-template-columns: 1fr;
      }
    }
  }
</style>
