<template>
  <el-popover placement="top" width="220" v-model="visible">
    <!-- <p>这是一段内容这是一段内容确定删除吗？</p> -->
    <mini-form ref="miniForm"></mini-form>
    <div style="text-align: right; margin: 0">
      <el-button size="mini" type="text" @click="resetValidityLogin"
        >取消</el-button
      >
      <el-button type="primary" size="mini" @click="validityLogin"
        >确定</el-button
      >
    </div>
    <el-button
      slot="reference"
      v-waves
      type="primary"
      size="mini"
      >巡检一下</el-button
    >
  </el-popover>
</template>

<script>
import waves from "@/directive/waves/index.js"; // 水波纹指令
import { rquestValidityLogin } from "@/api/checkRepair/patrolInspection";
import { Message } from "element-ui";
export default {
  name: "",
  directives: {
    waves,
  },
  props: {
    requestId: [String, Number]
  },
  methods: {
    /**
     * 验证登录
     */
    async validityLogin() {
      const isOk = await this.$refs.miniForm.submitForm();
      if (isOk) {
        /**
         * 1. 发请求
         * 2. 开始加载动画
         *    - 登录成功就 关闭窗体 携带id跳转页面
         *    - 登录失败就 弹出提示
         */
        this.patrolInspectionLoading = true;
        const { pass, user } = this.$refs.miniForm.ruleForm;
        const result = await rquestValidityLogin(pass, user);
        console.log(result);
        this.patrolInspectionLoading = false;

        const { code, error, res } = result;

        if (code !== 0) {
          return Message({
            message: error,
            type: "error",
          });
        }

        this.resetValidityLogin();
        let routerUrl = this.$router.resolve({
          name: "patrol-inspection-operate",
          query: {
            requestId: this.requestId || 6666,
            token: res.accessToken,
          },
        });

        window.open(routerUrl.href, "_black");
      }
    },
    /**
     * 重置验证登录的表单
     */
    resetValidityLogin() {
      this.$refs.miniForm.resetForm();
      this.visible = false;
    },
  },
};
</script>

<style lang="sass" scoped>
</style>