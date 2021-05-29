export const mapContentPath = article => ({
  ...article,
  ...{
    path: article.slug === '_index'
      ? article.path.substr(0, article.path.length - 6)
      : article.path
  }
})

export const mapContentPaths = articles => articles.map(mapContentPath)
