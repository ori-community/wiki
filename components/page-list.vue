<template>
  <div>
    <!-- <nuxt-link v-for="page in articles" :to="page.path" class="button">{{
      page.title
    }}</nuxt-link> -->
    <ul class="container">
      <li v-for="page in articles" class="list-item">
        <nuxt-link :to="page.path" class="button">{{ page.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "page-list",
  props: { byTag: String, byPath: String, deep: Boolean },
  data: () => ({
    articles: []
  }),
  computed: {
    byTagArray() {
      if (!this.byTag) {
        return [];
      }

      if (Array.isArray(this.byTag)) {
        return this.byTag;
      }

      return this.byTag.split(",").map(s => s.trim());
    }
  },
  async fetch() {
    let query;

    if (this.byPath) {
      query = this.$content(this.byPath, { deep: this.deep }).where({
        slug: { $ne: "_index" }
      });
    } else {
      query = this.$content({ deep: true });
    }

    if (this.byTagArray.length > 0) {
      query = query.where({ tags: { $contains: this.byTagArray } });
    }

    query = query
      .only(["slug", "title", "tags", "path"])
      .sortBy("title", "asc");

    this.articles = await query.fetch();
  }
};
</script>

<style scoped>
.container {
  padding-left: 0;
  list-style-type: none;
}
.list-item {
  list-style: none;
}
.button {
  background-color: transparent;
  margin-bottom: 0.2em;
  padding: 0.1em 0.5em;
}
</style>
