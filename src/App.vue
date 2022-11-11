<template>
  <Header></Header>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/header.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
  },
  setup() {
    let deviceWidth;

    function setHtmlFontSize() {
      // 1920是设计稿的宽度，当大于1920时采用1920宽度，比例也是除以19.20
      deviceWidth = document.documentElement.clientWidth > 1920 ? 1920 : document.documentElement.clientWidth;
      document.getElementsByTagName('html')[0].style.cssText = 'font-size:' + deviceWidth / 19.20 + 'px !important';
    }

    setHtmlFontSize();
    if (window.addEventListener) {
      window.addEventListener('resize', () => {
        setHtmlFontSize();
      }, false);
    }
    return {};
  },
});
</script>

<style lang="scss">
@import '~@/assets/css/common.css';
@import '~@/assets/css/element-reset';

#app {
  overflow: hidden;
  width: 19.2rem;
  height: 10.8rem;
}
</style>
