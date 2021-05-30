# Ori Randomizer Wiki


## Contributing


### Prerequisites

- Node.js
- Yarn


### Start a local server

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```


### Writing content

Content is written in Markdown in the `/content` directory.
Images and other assets referenced in Markdown documents must be placed
in the `/static` directory.

Links to other articles must be absolute, e.g.:

```markdown
[some link](/features/some-link)
```

Tip: To replace all relative internal links with absolute ones, regexp-replace
`([^!]\[[^\]]+\]\()(?!https)(?!/)([^\)]+)\)` with `$1/$2\)`.


### Content tags

Each Markdown document has a header section at the top containing meta information
for that document (e.g. the title). Below is a scheme which properties can/must be set:

```yaml
# Document title, required.
title: Document Title

# Title to use in sidebar. Defaults to title.
sidebarTitle: Home

meta:
  # List all abilities that are referenced in this document.
  # Used for advanced search. Use lower case names.
  abilities:
  - hammer
  - double jump
  - grapple

  # If this document is tied to or only applicable to specific
  # in-game zones, reference them here.
  zones:
  - marsh
  - pools
```
