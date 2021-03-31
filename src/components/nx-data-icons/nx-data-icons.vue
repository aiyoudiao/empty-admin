<template>
  <div class="data-icons">
    <el-row :span="24">
      <template v-for="item in data">
        <el-col :span="span">
          <div class="item" :class="[{'item--easy':discount}]">
            <div class="item-icon" :style="{color:color}">
              <i :class="item.icon" />
            </div>
            <div class="item-info">
              <span>{{ item.title }}</span>
              <h3 :style="{color:color}"><nx-count-up :start="14" :end="item.count" /></h3>
            </div>
          </div>
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script>
import nxCountUp from '@/components/nx-count-up/index.vue'
export default {
  name: 'NxDataIcons',
  components: {
    nxCountUp
  },
  props: {
    option: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      span: this.option.span || 6,
      data: this.option.data,
      color: this.option.color || 'rgb(63, 161, 255)',
      discount: this.option.discount || false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
