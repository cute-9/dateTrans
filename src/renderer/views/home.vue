<template>
  <div class="home">
    <div class="content">
      <div class="left">
        <el-tabs v-model="activeName" style="width: 170px">
          <el-tab-pane label="" name="first"></el-tab-pane>
          <el-tab-pane label="装备状态预览" name="second"></el-tab-pane>
        </el-tabs>
        <div class="pie"><pieEcharts /></div>
      </div>
      <div class="right">
        <el-tabs v-model="activeName" style="width: 170px">
          <el-tab-pane label="" name="first"></el-tab-pane>
          <el-tab-pane label="飞行讲评系统" name="second"></el-tab-pane>
        </el-tabs>
        <!-- <div style="width: 100%"> -->
        <img src="../assets/video.png" class="img" />
        <!-- </div> -->
      </div>
    </div>
    <div class="content-footer">
      <div class="left-footer">
        <el-tabs v-model="activeName" style="width: 170px">
          <el-tab-pane label="" name="first"></el-tab-pane>
          <el-tab-pane label="任务机推荐" name="second"></el-tab-pane>
        </el-tabs>
        <div class="mission-machine">
          <el-tabs
            tab-position="left"
            style="height: calc(100% - 58px); width: 110px"
          >
            <el-tab-pane label="状态">
              <span slot="label"
                ><i class="el-icon-s-home"></i> 状态</span
              ></el-tab-pane
            >
            <el-tab-pane label="质检报告">
              <span slot="label"><i class="el-icon-s-grid"></i> 质检报告</span>
            </el-tab-pane>
            <el-tab-pane label="维修历史">
              <span slot="label"
                ><i class="el-icon-notebook-1"></i> 维修历史</span
              >
            </el-tab-pane>
          </el-tabs>
          <div class="pie">
            <lineEcharts />
          </div>
          <el-carousel
            style="min-width: 280px; height: calc(100% - 55px)"
            arrow="always"
          >
            <el-carousel-item style="width: 280px; height: 100%">
              <img
                style="width: 280px; height: 100%"
                src="../assets/歼-15.png"
              />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="right">
        <el-tabs v-model="activeName" style="width: 170px">
          <el-tab-pane label="" name="first"></el-tab-pane>
          <el-tab-pane label="故障分析类比系统" name="second"></el-tab-pane>
        </el-tabs>
        <div class="right-footer">
          <!-- 表格 -->
          <div class="tableLine">
            <div
              v-for="item in tableLine"
              :key="item.id"
              class="line"
              :style="{
                backgroundColor: item.visible ? '#A6ACAD' : '#fff'
              }"
            >
              <span>{{ item.title }}</span>
            </div>
            <div class="tables">
              <el-table :data="tableData" border v-if="visible">
                <el-table-column prop="date" label="机型"> </el-table-column>
                <el-table-column prop="date1" label="J15"> </el-table-column>
                <el-table-column prop="date2" label="编号"> </el-table-column>
                <el-table-column prop="date3" label="J15EV2014045644">
                </el-table-column>
                <el-table-column prop="date4" label="是否列表">
                </el-table-column>
                <el-table-column prop="date5" label="否"> </el-table-column>
              </el-table>
              <div class="mask"></div>
              <div class="btn">
                <el-button size="mini" type="primary">视频播放</el-button>
                <el-button size="mini">参数分析</el-button>
                <el-button size="mini">查看报告</el-button>
                <el-button size="mini">相似案例</el-button>
              </div>
            </div>
          </div>

          <el-pagination
            style="text-align: center; margin-top: 10px"
            background
            layout="prev, pager, next"
            :total="1000"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pieEcharts from '@/components/Echarts/pieEcharts.vue'
import lineEcharts from '@/components/Echarts/lineEcharts.vue'
export default {
  name: 'HomeView',
  components: { pieEcharts, lineEcharts },
  data() {
    return {
      activeName: 'second',
      tableLine: [
        {
          id: 1,
          title: 'J15-特设-雷达-雷达异常警告-201406250912',
          visible: false
        },
        {
          id: 2,
          title: 'J15-特设-雷达-雷达异常警告-201408141656',
          visible: true
        }
      ],
      tableData: [
        {
          date: '故障/警告时间',
          date1: '2018-04-24 18:00:00',
          date2: '恢复时间',
          date3: '2018-04-24 18:32:00'
        },
        {
          date: '所属分类',
          date1: '特设',
          date2: '故障归属',
          date3: '9564401254-2'
        },
        {
          date: '故障详情',
          date1: '雷达异常警告'
        },
        {
          date: '详细描述',
          date1: '巡航其健雷达异常告警，辐射范围无敌方目标'
        }
      ],
      visible: true
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  background-color: #18445e;
  .content {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: space-around;
    // background-color: red;
    .left {
      // height: 0%;
      // flex: 1;
      .pie {
        position: relative;
        height: calc(100% - 80px);
      }
      .mission-machine {
        height: 100%;
        display: flex;
        /deep/ .el-tabs__item {
          color: #fff;
          padding: 5px;
        }
        /deep/.el-tabs__item.is-active {
          color: #409eff;
        }
      }
    }
    .right {
      width: 50%;
      margin-left: 65px;
      height: 100%;
      .img {
        height: calc(100% - 80px);
      }
    }
  }
  .content-footer {
    height: 60%;
    display: flex;
    justify-content: space-around;
    .pie {
      position: relative;
      height: calc(100% - 5px);
    }
    .left-footer {
      // flex: 1;
      // background-color: red;
      .mission-machine {
        height: calc(100% - 70px);
        display: flex;
        /deep/.el-tabs__item {
          color: #fff;
          padding: 5px;
        }
        /deep/.el-tabs__item.is-active {
          color: #409eff;
        }

        /deep/.el-tabs--left .el-tabs__item.is-left {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          background-color: #358a96;
          border-bottom: 1px solid #ccc;
        }

        /deep/.el-tabs--left .el-tabs__nav.is-left {
          height: 33.3% !important;
        }
        /deep/.el-carousel__container {
          height: 100%;
        }
      }
    }
    .right {
      width: 50%;
      height: 100%;
      .right-footer {
        height: calc(100% - 70px);
      }
      .tableLine {
        height: calc(100% - 55px);
        overflow-y: auto;
        overflow-x: hidden;
        // border: 1px solid #fff;
        .line {
          width: 100%;
          background-color: white;
          padding: 10px;
          border-bottom: 1px solid #c4c4c4;
          font-size: 14px;
        }
        .tables {
          position: relative;
        }
        .mask {
          height: 100%;
          position: absolute;
          top: 0;
          bottom: 0px;
          right: 0;
          left: 0;
          margin: 0 auto;
          background-color: #666666;
          opacity: 0.2;
        }
        .btn {
          position: absolute;
          text-align: right;
          bottom: 30px;
          right: 0;
          left: 0;
          margin: 0 auto;
        }
      }
    }
  }
  /deep/.el-tabs__item {
    color: #fff;
  }
  /deep/.el-tabs__item.is-active {
    color: #409eff;
  }
}
</style>
