<template>
  <div id="map" class="baidu-map">
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue';

export default defineComponent({
  name: 'BaiduMap',
  props: {
    // 传入需要定位的经纬度 116.404, 39.915
    latitude: {
      type: Number,
      default: () => 39.915,
    },
    longitude: {
      type: Number,
      default: () => 116.404,
    },
    /*
     * width: {
     *   type: Number,
     *   default: 598,
     * },
     * height: {
     *   type: Number,
     *   default: 346,
     * },
     */
  },
  setup(props, { emit }) {
    const { BMap } = window as any;

    onMounted(() => {
      const map = new BMap.Map('map');
      const point = new BMap.Point(props.longitude, props.latitude);
      // 地图类型
      map.addControl(new BMap.MapTypeControl());

      // 添加标注
      const marker = new BMap.Marker(point); // 创建标注
      map.addOverlay(marker); // 将标注添加到地图中

      map.centerAndZoom(point, 10);
      map.enableScrollWheelZoom(true);
      map.addEventListener('click', (e: any) => {
        //   let a = JSON.parse(e)
        console.log('点击的经纬度：' + e.point.lng + ',' + e.point.lat); //
        emit('update:longitude', e.point.lng);
        emit('update:latitude', e.point.lat);
      });
    });
  },
});
</script>

<style lang="scss" scoped>
.baidu-map {
  width: 100%;
  height: 100%;
}
</style>
