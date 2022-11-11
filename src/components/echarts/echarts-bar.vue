<template>
  <div ref="chartBar" class="chart-bar"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import * as echarts from 'echarts';

export default defineComponent({
  name: 'EChartsBar',
  props: {
    barData: {
      type: Object,
      default: () => ({
        title: 'ECharts--Bar示例',
        xData: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        chartData: [
          {
            name: 'Bar示例',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
          },
          {
            name: 'Bar1示例',
            type: 'bar',
            data: [15, 20, 6, 10, 23, 20],
          },
        ],
        // 是否显示x轴刻度
        axisTick: false,
        // 是否显示Y轴
        axisLine: true,
      }),
    },
  },
  setup(props) {
    const chartBar = ref<Element | null>();

    const drawBar = () => {
      const chart = echarts.init(chartBar.value as HTMLElement);
      const option = {
        title: {
          text: props.barData.title,
        },
        tooltip: {},
        xAxis: {
          data: props.barData.xData,
          axisTick: {
            show: props.barData.axisTick || false,
          },
        },
        yAxis: {
          axisLine: {
            show: props.barData.axisLine || true,
          },
        },
        series: props.barData.chartData.map((item: any) => ({
          name: item.name || 'Bar示例',
          type: 'bar',
          data: item.data,
        })),
      };
      chart.setOption(option);
    };

    onMounted(() => {
      drawBar();
    });
    return {
      chartBar,
    };
  },
});
</script>

<style lang="scss" scoped>
.chart-bar {
  width: 100%;
  height: 100%;
}
</style>
