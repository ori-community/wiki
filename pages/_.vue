<template>
  <main>
    <header>
      <h1 class="title">{{ article.title }}</h1>
      <div class="spacer"></div>

      <search-bar class="search-bar" />
    </header>
    <div class="article-grid">
      <article>
        <nuxt-content :document="article" />
      </article>
      <aside v-if="!article.hideSidebar">
        <nuxt-link v-for="article in sidebarArticles" :key="article.path" class="button" :to="article.path">
          {{ article.sidebarTitle || article.title }}
        </nuxt-link>
      </aside>
    </div>
  </main>
</template>

<script>
  import SearchBar from '~/components/search-bar'
  import {mapContentPath} from '~/assets/lib/mapContentPaths'

  export default {
    components: {SearchBar},
    async asyncData ({
      $content,
      params,
    }) {
      let path = params.pathMatch.replace(/\/$/, '')

      const article = await $content(path).fetch()

      const sidebarArticles = []
      for (const sidebarArticlePath of (await $content('/sidebar').fetch()).sidebar) {
        const sidebarArticle = await $content(sidebarArticlePath).fetch()
        sidebarArticles.push(
          mapContentPath(
            Array.isArray(sidebarArticle)
              ? sidebarArticle.find(p => p.slug === '_index')
              : sidebarArticle
          )
        )
      }

      return {
        article: Array.isArray(article) ? article.find(p => p.slug === '_index') : article,
        sidebarArticles,
      }
    },
    head () {
      return {
        title: this.article.title,
        meta: [
          {hid: 'description', name: 'description', content: this.article.description},
          {hid: 'og:title', property: 'og:title', content: this.article.title},
          {hid: 'og:description', property: 'og:description', content: this.article.description},
          {hid: 'apple-mobile-web-app-title', property: 'apple-mobile-web-app-title', content: this.article.title},
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "assets/style/framework";

  header {
    display: flex;
    align-items: center;

    @include screen(sm) {
      flex-direction: column-reverse;

      .search-bar {
        margin-left: 0 !important;
      }
    }

    .title {
      display: inline-block;
    }

    .search-bar {
      margin-left: 1em;
    }
  }

  .article-grid {
    display: flex;
    gap: 2em;

    @include screen(sm) {
      flex-direction: column;
    }

    aside {
      min-width: 20%;
      display: flex;
      flex-direction: column;

      .button {
        margin-bottom: 0.2em;
        padding: 0.4em 0.6em;
      }
    }
  }
</style>
