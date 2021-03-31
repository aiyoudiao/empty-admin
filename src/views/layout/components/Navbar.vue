<template>
  <el-menu class="navbar" mode="horizontal">
    <nx-hamburger
      class="hamburger-container"
      :toggle-click="toggleSideBar"
      :is-active="sidebar.opened"
    />

    <nx-breadcrumb class="breadcrumb-container" />

    <div class="right-menu">
      <error-log class="errLog-container right-menu-item" />

      <!-- <nx-github style="margin-top: 2px" class="nx-help right-menu-item" /> -->
      <!-- <error-log class="errLog-container right-menu-item"></error-log> -->
      <!-- <nx-help class="nx-help right-menu-item" /> -->
      <nx-top-lock style="cursor: pointer" class="nx-help" />
      <el-tooltip effect="dark" content="全屏" placement="bottom">
        <nx-full-screen class="screenfull right-menu-item" />
      </el-tooltip>

      <!-- <lang-select class="international right-menu-item"></lang-select> -->
      <nx-lang-select class="international right-menu-item" />

      <el-tooltip effect="dark" content="主题" placement="bottom">
        <!-- <theme-picker class="theme-switch right-menu-item"></theme-picker> -->
        <nx-skin class="theme-switch right-menu-item" />
      </el-tooltip>

      <el-dropdown class="avatar-container right-menu-item" trigger="click">
        <div class="avatar-wrapper">
          <!-- <img
            class="user-avatar"
            src="https://mgbq.github.io/nx-admin-site/home.png"
          /> -->
          <img class="user-avatar" :src="userImgSrc" />

          <!-- <span style="margin-left: 5px">{{ userInfo.nickName}}</span>
          <i class="el-icon-caret-bottom" /> -->
          <!-- <CustomPic /> -->

          <i class="el-icon-arrow-down"></i>
        </div>

        <el-dropdown-menu slot="dropdown">
          <!-- <router-link to="/">
            <el-dropdown-item>
              home
            </el-dropdown-item>
          </router-link> -->
          <!-- <el-dropdown-item icon="el-icon-s-custom"
            >
            个人信息
            <el-badge is-dot />
          </el-dropdown-item> -->
          <el-dropdown-item divided @click.native="logout" icon="el-icon-table-lamp"
            >登 出</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-menu>
</template>

<script>
import { mapGetters } from "vuex";
import ErrorLog from "@/components/ErrorLog";
import nxTopLock from "@/components/nx-top-lock";
import nxBreadcrumb from "@/components/nx-breadcrumb";
import nxHamburger from "@/components/nx-hamburger";
// import nxHelp from "@/components/nx-help/index";
import nxFullScreen from "@/components/nx-full-screen/index";
import nxLangSelect from "@/components/nx-lang-select/index";
import nxSkin from "@/components/nx-skin/index";
// import nxGithub from "@/components/nx-github/index";
import userImg from '@/assets/images/user.jpg'

export default {
  name: "NavBar",
  data () {
    return {
      userImgSrc: userImg
    }
  },
  components: {
    nxBreadcrumb,
    nxHamburger,
    // nxHelp,
    nxFullScreen,
    nxLangSelect,
    nxSkin,
    nxTopLock,
    // nxGithub,
    ErrorLog,
  },
  computed: {
    ...mapGetters(["sidebar", "name", "avatar", "userInfo"]),
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("ToggleSideBar");
    },
    async logout() {
      await this.$store.dispatch("user/LoginOut");
    }
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .breadcrumb-container {
    float: left;
  }
  .nx-help {
    display: inline-block;
    vertical-align: top;
  }
  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
  .right-menu {
    float: right;
    height: 100%;
    &:focus {
      outline: none;
    }
    .right-menu-item {
      display: inline-block;
      margin: 0 8px;
    }
    .screenfull {
      height: 20px;
    }
    .international {
      vertical-align: top;
    }
    .theme-switch {
      vertical-align: 15px;
    }
    .avatar-container {
      height: 50px;
      margin-right: 30px;
      .avatar-wrapper {
        cursor: pointer;
        margin-top: 5px;
        position: relative;
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
