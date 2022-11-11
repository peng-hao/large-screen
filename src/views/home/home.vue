<template>
  <div class="home">
    <div class="home-up">
      <div class="home-up-container">
        <div class="filter-criteria">
          <span>一级源：</span>
          <el-select
            v-model="primaryDefault"
            class="select"
            placeholder="Select"
          >
            <el-option
              v-for="item in primarySource"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="charts">
          <e-charts-bar></e-charts-bar>
        </div>
      </div>
      <div class="home-up-container">
        <div class="filter-criteria">
          <span>一级源：</span>
          <el-select
            v-model="primaryDefault"
            class="select"
            placeholder="Select"
            popper-class="select-down"
          >
            <el-option
              v-for="item in primarySource"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="charts">
          <e-charts-pie
            :name="secondaryData.name"
            :pie-data="secondaryData.data"
            :inner-circle="secondaryDataCount"
          ></e-charts-pie>
        </div>
      </div>
      <div class="home-up-container">
        <div class="charts"></div>
      </div>
    </div>
    <div class="home-down"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, watch } from 'vue';
import qs from 'qs';
import {
  getPrimarySource,
  getSecondary,
  getPrimaryCount,
} from '@/service/home/home';
import { formatSelect } from '@/utils/index';

// 组件
import EChartsBar from '@/components/echarts/echarts-bar.vue';
import EChartsPie from '@/components/echarts/echarts-pie.vue';

export default defineComponent({
  name: 'Home',
  components: {
    EChartsBar,
    EChartsPie,
  },
  setup() {
    interface Source {
      label: string;
      value: string;
    }

    interface Any {
      [propName: string]: any;
    }

    const state = reactive({
      // 一级源分类
      primarySource: [] as Source[],
      // 默认下拉一级源
      primaryDefault: '溶剂使用源',
      // 二级源小计chart
      secondaryData: {} as Any,
      secondaryDataCount: [] as Any[],
    });

    /**
     * 获取一级源分类
     */
    const getPrimarySourceData = () => {
      getPrimarySource().then((res: any) => {
        state.primarySource = res.message;
        console.log(state.primarySource, '一级源');
      });
    };

    /**
     * 获取一级源对应二级源小计chart
     */
    const getSecondaryData = () => {
      const params = {
        primarySource: state.primaryDefault,
      };
      getSecondary(params).then((res: any) => {
        console.log(res.data, '一级源-->二级');
        state.secondaryDataCount = [];
        state.secondaryData.name = state.primaryDefault;
        state.secondaryData.data = res.message;
      });
    };

    /**
     * 获取一级源污染物小计chart
     */
    const getPrimaryCountData = () => {
      const params = {
        primarySource: state.primaryDefault,
      };
      getPrimaryCount(params).then((res) => {
        console.log(res.data, '获取一级源污染物小计');
      });
    };

    watch(
      () => state.primaryDefault,
      (newVal, oldVal) => {
        console.log(newVal, oldVal);
        getSecondaryData();
      },
    );
    onMounted(() => {
      getPrimarySourceData();
      getSecondaryData();
      getPrimaryCountData();
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: calc(100% - 0.8rem);
  background-color: #EBE3D687;
  font-size: 0.14rem;

  &-up {
    display: flex;
    height: 50%;

    &-container {
      display: flex;
      flex: 1;
      flex-direction: column;
      overflow: hidden;
      margin: 0.1rem;
      border: 1px solid #CCC0C0;
      border-radius: 0.05rem;
      box-shadow: inset 0 0 10px #CCC0C0;

      .charts {
        flex: 1;
      }
    }
  }

  &-down {
    height: 50%;
  }

  .hello {
    width: 4rem;
    height: 4rem;
  }

  #main {
    width: 4rem;
    height: 4rem;
  }
}

// 下拉
.filter-criteria {
  display: flex;
  align-items: center;
  justify-content: right;
  margin: 0.05rem;

  .select {
    margin-right: 0;
  }
}
</style>
