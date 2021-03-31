<template>
  <el-form
    ref="loginForm"
    class="login-form"
    status-icon
    :rules="loginRules"
    :model="loginForm"
    label-width="0"
  >
    <el-form-item prop="username">
      <el-input
        v-model="loginForm.username"
        size="small"
        auto-complete="off"
        placeholder="请输入用户名"
        @keyup.enter.native="handleLogin"
      >
        <i slot="prefix" class="icon-yonghu" />
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        v-model="loginForm.password"
        size="small"
        :type="passwordType"
        auto-complete="off"
        placeholder="请输入密码"
        @keyup.enter.native="handleLogin"
      >
        <i
          slot="suffix"
          class="el-icon-view el-input__icon"
          @click="showPassword"
        />
        <i slot="prefix" class="icon-mima" />
      </el-input>
    </el-form-item>
    <el-form-item prop="captcha">
      <el-input
        v-model="loginForm.captcha"
        size="small"
        name="logVerify"
        auto-complete="off"
        placeholder="请输入验证码"
        style="width: 60%"
      >
      <i slot="prefix" class="icon-yanzhengma" />
      </el-input>
      <div class="vPic">
        <img
          v-if="picPath"
          :src="picPath"
          width="100%"
          height="100%"
          alt="请输入验证码"
          @click="loginVefify()"
        />
      </div>
    </el-form-item>
    <el-checkbox v-model="checked">记住账号</el-checkbox>
    <el-form-item>
      <el-button
        type="primary"
        size="small"
        class="login-submit"
        @click.native.prevent="handleLogin"
        >登录</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
import { mapActions } from "vuex";
import { captcha } from "@/api/api2/user";
import { isvalidUsername } from "@/utils/validate";
export default {
  name: "Userlogin",
  props: [],
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error("请输入正确的用户名"));
      } else {
        callback();
      }
    };
    const validateCode = (rule, value, callback) => {
      if (this.captcha.value !== value) {
        this.loginForm.captcha = "";
        // this.refreshCode();
        callback(new Error("请输入正确的验证码"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "admin",
        password: "123456",
      },
      checked: false,
      captcha: {
        src: "",
        value: "",
        len: 6,
        type: "text",
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, message: "密码长度最少为6位", trigger: "blur" },
        ],
        captcha: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 6, max: 6, message: "验证码长度为6位", trigger: "blur" },
          // { required: true, trigger: "blur", validator: validateCode },
        ],
      },
      passwordType: "password",
      logVerify: "",
      picPath: "",
    };
  },
  computed: {},
  created() {
    this.loginVefify();
  },
  mounted() {},
  methods: {
    ...mapActions("user", ["LoginIn"]),
    async login() {
      return await this.LoginIn(this.loginForm);
    },
    showPassword() {
      this.passwordType === ""
        ? (this.passwordType = "password")
        : (this.passwordType = "");
    },
    async handleLogin() {
      this.$refs.loginForm.validate(async (valid) => {
        if (valid) {
          // this.$store.dispatch("Login", this.loginForm).then((res) => {
          //   this.$router.push({ path: "/dashboard/dashboard" });
          // });
          const flag = await this.login();
          if (!flag) {
            this.loginVefify();
          }
        } else { 
          this.$message({
            type: "error",
            message: "请正确填写登录信息",
            showClose: true,
          });
          this.loginVefify();
          return false;
        }
      });
    },
    loginVefify() {
      captcha({}).then((ele) => {
        this.picPath = ele.data.picPath;
        this.loginForm.captchaId = ele.data.captchaId;
      });
    },
  },
};
</script>
<style  scoped lang="scss">
.vPic {
  width: 33%;
  height: 38px;
  float: right !important;
  background: #ccc;
  img {
    cursor: pointer;
    vertical-align: middle;
  }
}

::v-deep .el-form-item__error {
  top: 88%;
}
</style>
