<template>
  <div class="baidu-map">
    <baidu-map></baidu-map>
    <div class="screen left-screen">
      <list-summary></list-summary>
      <div class="left-bg"></div>
      <div class="right-bg"></div>
    </div>
    <div class="screen right-screen">
      <div class="left-bg"></div>
      <div class="right-bg"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue';
import BaiduMap from '@/components/baiduMap.vue';
import ListSummary from '@/views/toplu-liste/list-summary.vue';

export default defineComponent({
  name: 'About',
  components: {
    ListSummary,
    BaiduMap,
  },
});
</script>

<style lang="scss" scoped>
.baidu-map {
  position: relative;
  width: 100%;
  height: 100%;
}

.screen {
  position: absolute;
  width: 4.5rem;
  height: 8.87rem;
  border-radius: 0.04rem;
}

.left-screen {
  top: 0.5rem;
  left: 0.2rem;
  background: url('~@/assets/images/bg-blue/left-bg.png') center no-repeat;
  background-size: contain;
}

.right-screen {
  top: 0.5rem;
  right: 0.2rem;
  background: url('~@/assets/images/bg-blue/right-bg.png') center no-repeat;
  background-size: contain;
}

.left-bg {
  position: absolute;
  top: -1px;
  left: -1px;
  width: 15px;
  height: 15px;
  border: 2px solid #0FF;
  border-right: 0;
  border-bottom: 0;
}

.right-bg {
  position: absolute;
  top: -1px;
  right: -1px;
  width: 15px;
  height: 15px;
  border: 2px solid #0FF;
  border-bottom: 0;
  border-left: 0;
}
</style>
