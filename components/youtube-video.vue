<template>
  <div class="youtube-video">
    <iframe
      class="embedded-player"
      :src="`https://www.youtube.com/embed/${id}`"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>

<script>
  export default {
    name: 'youtube-video',
    props: ['id'],
  }
</script>

<style lang="scss" scoped>
  .youtube-video {
    display: flex;
    justify-content: center;
    height: 16em;

    .embedded-player {
      border: none;
      width: 100%;
      height: 100%;
    }
  }
</style>
