<template>
  <section class="app-main">
    <transition name="fade" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.fullPath
    }
  },
  /* NOTE: 2021-01-04 21:14 */

  
  mounted () {
    setTimeout(() => {
      document.querySelector('.app-main').style="height: 100%;"
      let container = document.querySelector('.app-container')
      container&&(container.style = "overflow: hidden;")
    }, 300);
  }
}
</script>
