<template>
  <div ref="chartPie" class="chart-pie"></div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import * as echarts from 'echarts';

export default defineComponent({
  name: 'EChartsPie',
  props: {
    name: {
      type: String,
      default: 'ECharts--pie示例',
    },
    // 外环数据
    pieData: {
      type: Array,
      default: () => [],
    },
    // 内环数据
    innerCircle: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const chartPie = ref<Element | null>();

    const drawPie = () => {
      const chart = echarts.init(chartPie.value as HTMLElement);
      const option = {
        legend: {
          bottom: '2%',
        },
        tooltip: {
          trigger: 'item',
        },
        grid: {
          top: '15%',
          /*
           * left: '',
           * right: '',
           * bottom: "15%",
           */
        },
        series: [
          {
            name: props.name,
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['50%', '40%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2,
            },
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: false,
                fontSize: '40',
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: props.pieData,
          },
          {
            name: '小计',
            type: 'pie',
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold',
              },
            },
            radius: [0, '39%'],
            center: ['50%', '40%'],
            itemStyle: {
              color: 'rgb(113, 31, 31)',
            },
            data: props.innerCircle,
          },
        ],
      };
      console.log(option, props.pieData, 'option');

      chart.setOption(option);
    };

    watch(
      () => props.pieData,
      () => {
        drawPie();
      },
    );

    return {
      chartPie,
    };
  },
});
</script>

<style lang="scss" scoped>
.chart-pie {
  width: 100%;
  height: 100%;
}
</style>
