<template>
  <div class="header">
    <div class="header-title">
      可视化大数据监控中心
    </div>
    <!--    <div class="header-router">-->
    <!--      <router-link to="/">-->
    <!--        首页-->
    <!--      </router-link>-->
    <!--      <router-link to="/about">-->
    <!--        模块一-->
    <!--      </router-link>-->
    <!--      <router-link to="/about">-->
    <!--        模块二-->
    <!--      </router-link>-->
    <!--      <router-link to="/about">-->
    <!--        模块三-->
    <!--      </router-link>-->
    <!--    </div>-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  height: 0.8rem;
  padding: 0 0.15rem;
  background: #1C316F url('~@/assets/images/header.png') center no-repeat;
  background-size: cover;
  font-size: 0.4rem;
  line-height: 0.8rem;

  &-router {
    a {
      margin-left: 0.25rem;
      background: linear-gradient(0deg, #89B9F2 0%, #FFF 100%);
      color: #FFF;
      font-weight: 400;
      font-size: 0;
      line-height: 30px;
      -webkit-text-fill-color: transparent;
    }
  }
}

.header-title {
  background: linear-gradient(0deg, #5EC9FF 0%, #FFF 100%);
  background-clip: text;
  color: transparent;
  font-weight: bold;
  font-size: 0.5rem;
  text-align: center;
}
</style>
