<template>
  <div class="nx-container-full-bs">
    <div v-if="$slots.header" ref="header" class="nx-container-full-bs__header">
      <slot name="header" />
    </div>
    <div ref="wrapper" class="nx-container-full-bs__body">
      <div style="padding: 20px 0px;">
        <slot />
      </div>
    </div>
    <div v-if="$slots.footer" ref="footer" class="nx-container-full-bs__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
// 插件
import BScroll from 'better-scroll'

export default {
  name: 'NxContainerFullBs',
  data() {
    return {
      BS: null
    }
  },
  mounted() {
    this.scrollInit()
  },
  beforeDestroy() {
    this.scrollDestroy()
  },
  methods: {
    scrollInit() {
      this.BS = new BScroll(this.$refs.wrapper, {
        mouseWheel: true,
        scrollbar: {
          fade: true,
          interactive: false
        }
      })
    },
    scrollDestroy() {
      if (this.BS) {
        this.BS.destroy()
      }
    }
  }
}
</script>
