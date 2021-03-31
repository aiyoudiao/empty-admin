<template>
  <div class="menu-wrapper">
    <template v-for="item in routes">
      <template v-if="!item.hidden && item.children">
        <template
          v-if="hasOneShowingChild(item.children,item) &&!item.alwaysShow">
        >
          <router-link
            class="test1"
            :key="item.name"
            :to="resolvePath(item.path + '/' + item.children[0].path)"
          >
            <el-menu-item
              :index="resolvePath(item.path + '/' + item.children[0].path)"
              :class="{ 'submenu-title-noDropdown': !isNest }"
            >
              <svg-icon
                v-if="item.children[0].meta.icon||(item.meta&&item.meta.icon)"
                :icon-class="item.children[0].meta.icon||(item.meta&&item.meta.icon)"
              />
              <span
                v-if="item.children[0].meta.title"
                slot="title"
                >{{ generateTitle(item.children[0].meta.title) }}</span
              >
            </el-menu-item>
          </router-link>
        </template>

        <template v-else>
          <el-submenu :key="item.name" :index="item.name || item.path">
            <template slot="title">
              <svg-icon
                v-if="item.meta && item.meta.icon"
                :icon-class="item.meta.icon"
              />
              <span v-if="item.meta && item.meta.title" slot="title">{{
                generateTitle(item.meta.title)
              }}</span>
            </template>

            <template v-for="child in item.children">
              <sidebar-item
                v-if="child.children && child.children.length > 0"
                :key="child.path"
                :is-nest="true"
                class="nest-menu"
                :base-path="resolvePath(item.path)"
                :routes="[child]"
              />

              <router-link
                v-else
                :key="child.name"
                class="test2"
                :to="resolvePath(item.path + '/' + child.path)"
              >
                <el-menu-item
                  :index="resolvePath(item.path + '/' + child.path)"
                >
                  <svg-icon
                    v-if="child.meta && child.meta.icon"
                    :icon-class="child.meta.icon"
                  />
                  <span v-if="child.meta && child.meta.title" slot="title">{{
                    generateTitle(child.meta.title)
                  }}</span>
                </el-menu-item>
              </router-link>
            </template>
          </el-submenu>
        </template>
      </template>
    </template>
  </div>
</template>

<script>
import path from "path";
import { generateTitle } from "@/utils/i18n";
import FixiOSBug from "./FixiOSBug";
import { isExternal } from "@/utils/validate";

export default {
  name: "SidebarItem",
  mixins: [FixiOSBug],
  props: {
    // route object
    routes: {
      type: Array,
    },
    isNest: {
      type: Boolean,
      default: true,
    },
    basePath: {
      type: String,
      default: "",
    },
  },
  created() {
    for (const o in this.routes) {
      const obj = this.routes[o];
      if (obj.path.indexOf("myiframe") >= 0) {
        obj.children[0].path = "urlPath?src=https://www.baidu.com";
      }
    }
  },
  data() {
    return {
      onlyOneChild: null,
    };
  },
  methods: {
    generateTitle,
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter((item) => {
        if (item.hidden) {
          return false;
        } else {
          return true;
        }
      });

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true;
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        return true;
      }

      return false;
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(this.basePath)) {
        return this.basePath;
      }
      return path.resolve(this.basePath, routePath);
    },
  },
};
</script>
