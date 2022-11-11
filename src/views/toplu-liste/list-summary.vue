<template>
  <div class="list-summary">
    <div>
      <screen-title>
        <span>清单汇总</span>
        <template #right>
        </template>
      </screen-title>
      <div class="">
        <div class="selected-reset">
          <span>一级源类型</span>
          <el-select v-model="primaryDefault" class="select-reset" placeholder="请选择" popper-class="select-down">
            <el-option
              v-for="(item,index) in primarySource"
              :key="index"
              :label="item.value"
              :value="item.key"
            >
            </el-option>
          </el-select>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue';
import ScreenTitle from '@/components/screen-title.vue';

export default defineComponent({
  name: 'ListSummary',
  components: {
    ScreenTitle,
  },
  setup() {
    const state = reactive({
      // 一级源分类
      primarySource: [
        {
          key: '溶剂使用源',
          value: '溶剂使用源',
        },
        {
          key: '溶剂用源',
          value: '溶剂用源',
        },
      ],
      // 默认下拉一级源
      primaryDefault: '溶剂使用源',
    });

    return {
      ...toRefs(state),
    };
  },

});
</script>

<style lang="scss" scoped>
.list-summary {
  width: 100%;
}

.selected-reset {
  display: flex;
  align-items: center;
  justify-content: right;
  margin-top: 0.15rem;
  color: #FFF;

  .select-reset {
    width: 1.5rem;
    margin-left: 0.12rem;
  }
}
</style>
