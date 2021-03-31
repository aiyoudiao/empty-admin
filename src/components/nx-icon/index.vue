<template>
  <i class="fa" :class="`fa-${name}`" aria-hidden="true" />
</template>

<script>
export default {
  name: 'NxIcon',
  props: {
    name: {
      type: String,
      required: false,
      default: 'font-awesome'
    }
  }
}
</script>
