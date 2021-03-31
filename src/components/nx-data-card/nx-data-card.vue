<template>
  <div class="data-card">
    <el-row :span="24">
      <el-col v-for="(item,index) in data" :key="index" :span="span">
        <div class="item">
          <img :src="item.src" class="item-img">
          <div class="item-text" :style="{color:colorText,backgroundColor:bgText}">
            <h3>{{ item.name }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'NxDataCard',
  props: {
    option: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      span: this.option.span || 6,
      data: this.option.data || [],
      colorText: this.option.colorText || '#fff',
      bgText: this.option.bgText || '#2e323f',
      borderColor: this.option.borderColor || '#2e323f'
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
