<template>
  <div class="main-container">
    <div class="nuxt-wrapper">
      <transition name="fade" mode="out-in">
        <Nuxt />
      </transition>
    </div>
    <footer>
      <img src="../assets/images/footer.png">
    </footer>
  </div>
</template>

<style lang="scss">
  @import "style/index";
</style>

<style lang="scss" scoped>
  @import "assets/style/framework";

  .main-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    .nuxt-wrapper {
      z-index: 1;
      padding: 3em 2em;
      max-width: 1100px;
      flex-grow: 1;

      @include screen(sm) {
        padding: 3em 1em;
      }
    }
  }

  footer {
    margin-top: -20vw;
    position: relative;

    img {
      width: 100vw;
      opacity: 0.5;
    }
  }
</style>
