<template>
  <el-select
    :value = "value"
    @input = "e => $emit('input',e)"
    v-scroll="toBottom"
    @visible-change="resetCounter"
    filterable
    remote
    clearable
    :remote-method="remoteMethod"
    @change="valueChange"
    @focus="valueFocus"
    size="small"
  >
    <el-option
      v-for="(item,index) in showList"
      :key="index"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>
  
<script>
  export default {
    name: 'CustomSelect',
    props: {
      value: [String,Number],
      orgList: {
        required: true,
        type: Array
      },
      filterable: Boolean,
      remote: Boolean,
      clearable: Boolean,
      remoteMethod: Function,
    },
    computed: {
      showList() {
        const {counter,len} = this
        return this.orgList.slice(0,counter * len)
      }
    },
    data() {
      return {
        len: 15,
        counter: 1
      }
    },
    methods: {
      toBottom() {
        this.counter += 1
      },
      resetCounter(e) {
        if(e === true) {
          this.counter = 1
        }
      },
      valueChange(e){
        this.$emit('change',e)
      },
      valueFocus(e){
        this.$emit('focus',e)
      }
    }
  }
</script>

<style>

</style>