<template>
  <pre class="nx-highlight" v-html="highlightHTML" />
</template>

<script>
// https://highlightjs.org/usage/
// http://highlightjs.readthedocs.io/en/latest/api.html#configure-options
import highlight from 'highlight.js'
export default {
  name: 'NxHighlight',
  props: {
    code: {
      type: String,
      required: false,
      default: `console.log('you lost code prop')`
    }
  },
  data() {
    return {
      highlightHTML: ''
    }
  },
  watch: {
    code() {
      this.highlight()
    }
  },
  mounted() {
    this.highlight()
  },
  methods: {
    highlight() {
      this.highlightHTML = highlight.highlightAuto(this.code).value
    }
  }
}
</script>

<style lang="scss" scoped>
.nx-highlight {
  margin: 0px;
  border-radius: 4px;
}
</style>
