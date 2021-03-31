<template>
  <div class="device-check">
    <el-header>
      <div class="left-box">
        <el-form :model="form" ref="form" label-width="80px" :rules="formRules">
          <el-form-item label="设备自检" prop="content">
            <custom-select
              v-model="form.content"
              placeholder="请输入自检内容"
              filterable
              remote
              :remote-method="querySearch"
              :orgList="form.options"
              @focus="focus"
              clearable
            ></custom-select>
          </el-form-item>
          <el-button
            type="primary"
            round
            size="mini"
            @click="selfCheck"
            :loading="loading"
            >自检</el-button
          >
          <el-button
            type="primary"
            round
            size="mini"
            plain
            v-if="showDetailButton"
            @click="selfCheckDetail"
            >自检详情</el-button
          >
          <span v-if="showMessage">{{ queryThread }}</span>
        </el-form>
      </div>
      <div class="right-box">
        <patrol-inspection-plugin></patrol-inspection-plugin>
      </div>
    </el-header>
    <el-container class="container">
      <div class="container-shadow">
        <div class="container-main"></div>
        <el-dialog :visible.sync="showError" width="40%">
          <span>{{ errMessage }}</span>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="showError = false"
              >确定</el-button
            >
          </span>
        </el-dialog>
      </div>
    </el-container>
  </div>
</template>
<script>
import PatrolInspectionPlugin from "@/views/CheckRepair/Components/PatrolInspectionPlugin/PatrolInspectionPlugin.vue";
import CustomSelect from "@/views/CheckRepair/Components/CustomSelect/CustomSelect.vue";
import { querySearch } from "@/api/checkRepair/deviceCheck";

export default {
  name: "DeviceCheck",
  components: {
    CustomSelect,
    PatrolInspectionPlugin,
  },
  data() {
    return {
      visible: false,
      patrolInspectionLoading: false,
      tableType: "device",
      formRules: {
        content: [
          { required: true, message: "请选择设备名称", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    querySearch(query) {
      if (query) {
        query = "%" + query + "%";
        querySearch(query).then((res) => {
          this.form.options = res.content;
        });
      }
    },

    selfCheck() {
      this.selfCollapseData = [];
      this.showResponseData = [];
      this.selfShow = false;
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$set(this.postData, "data", this.form.content);
          this.createWebSocket(
            this.postData,
            "/selfCheck/checkDevice",
            "device"
          );
          this.selfShow = true;
          this.$nextTick(function () {
            this.$refs.selfCollapse1.clearData();
          });
          this.label = this.findLabel(this.form.content);
        }
      });
    },
  },
};
</script>

<style lang="scss">
.device-check {
  width: 100%;
  height: 100%;
  .el-dialog {
    width: 93%;
    margin-top: 8vh;
  }
  .el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: #f5f7fa;
  }
  .el-form {
    .el-form-item {
      width: 27%;
      .el-select {
        width: 100%;
        .el-input {
          width: 100%;
        }
      }
    }
  }
  .el-header {
    height: 45px !important;
    padding-left: 0;
    display: flex;
    .left-box {
      width: 100%;
    }
    .right-box {
      width: 15%;
      text-align: right;
      // padding-top: 20px;
      // padding-right: 20px;
    }
  }
  .container {
    width: 100%;
    height: 92%;
    .container-shadow {
      width: 100%;
      height: 100%;
      background: white;
      border-radius: 5px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      .container-main {
        padding: 20px 0;
        overflow-y: scroll;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
