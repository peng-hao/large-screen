<template>
  <div class="screen-title">
    <div class="left-bg"></div>
    <div class="center-bg">
      <span class="title-font">菜单总览</span>
    </div>
    <div class="right-bg"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue';

export default defineComponent({
  name: 'ScreenTitle',
});
</script>

<style lang="scss" scoped>
.screen-title {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 0.47rem;
  margin-top: -0.05rem;
  color: #FFF;
  font-family: FZZongYi-M05S;
}

.left-bg {
  width: 0.51rem;
  height: 0.41rem;
  background: url('~@/assets/images/bg-blue/titleft.png') center no-repeat;
}

.center-bg {
  width: auto;
  height: 0.41rem;
  background: url('~@/assets/images/bg-blue/titbg.png') center no-repeat;
  line-height: 0.41rem;

  .title-font {
    font-weight: 300;
  }
}

.right-bg {
  width: 0.51rem;
  height: 0.41rem;
  background: url('~@/assets/images/bg-blue/titright.png') center no-repeat;
}
</style>
