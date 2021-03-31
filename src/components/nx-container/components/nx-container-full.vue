<template>
  <div class="nx-container-full">
    <div v-if="$slots.header" ref="header" class="nx-container-full__header">
      <slot name="header" />
    </div>
    <div class="nx-container-full__body">
      <slot />
    </div>
    <div v-if="$slots.footer" ref="footer" class="nx-container-full__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'NxContainerFull'
}
</script>
