<template>
  <div class="data-tabs">
    <el-row :span="24">
      <el-col v-for="(item,index) in data" :key="index" :span="span">
        <div class="item" :style="{background:item.color}">
          <div class="item-header">
            <p>{{ item.title }}</p>
            <span>{{ item.subtitle }}</span>
          </div>
          <div class="item-body">
            <h2><nx-count-up :start="14" :end="item.count" /></h2>
          </div>
          <div class="item-footer">
            <span>{{ item.allcount }}</span>
            <p>{{ item.text }}</p>
          </div>
          <p class="item-tip">{{ item.key }}</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import nxCountUp from '@/components/nx-count-up/index.vue'
export default {
  name: 'NxDataTabs',
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
      data: this.option.data || []
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
