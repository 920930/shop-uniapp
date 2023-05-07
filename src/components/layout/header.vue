<template>
  <view class="state_bar"></view>
  <view class="search">
    <view class="search-item">
      <text v-if="back" class="iconfont icon-left search-item-left" @tap="goBack"></text>
      <view class="search-item-center" @tap="toSearch">
        <text class="iconfont icon-search icon"></text>
        <input :value="search" :focus="bool" :disabled="!bool" type="text" @input="inputFn" @confirm="searchFn"
          confirm-type="search" class="search-item-center-input" placeholder="请输入商品名称" />
      </view>
      <slot name="right">
        <text @tap="searchFn">搜索</text>
      </slot>
    </view>
    <slot name="nav"></slot>
  </view>
  <view class="iHeight" v-if="height"></view>
</template>

<script lang='ts' setup>
import { reactive, computed } from 'vue'
const props = withDefaults(defineProps<{
  back?: boolean;
  height?: number;
  value?: string;
}>(), {
  back: false,
  height: 0,
  value: ''
})
const emits = defineEmits<{
  (e: 'search', v: string): void;
  (e: 'updateBool'): void;
}>()
// #ifndef APP-PLUS
const ret = uni.getMenuButtonBoundingClientRect();
const header = reactive({
  top: 0,
  height: 0,
  left: 0,
})
header.top = ret.top;
header.height = ret.height;
header.left = ret.left;
// #endif
const search = computed({
  get() {
    return props.value
  },
  set(val: string) {
    emits('search', val)
  }
})
const routes = getCurrentPages()
const bool = computed(() => routes[routes.length - 1].route?.includes('search'))

const toSearch = () => !bool.value && uni.navigateTo({ url: '/pages/search/index' })
const goBack = () => uni.navigateBack()

const inputFn = (e: any) => !e.detail.value.length && emits('updateBool')
const searchFn = (e: any) => search.value = e.detail.value
</script>

<style lang='scss' scoped>
.state_bar {
  // #ifndef APP-PLUS
  height: v-bind("header.top + header.height + 8 + 'px'");
  // #endif
  // #ifdef APP-PLUS
  height: calc(var(--status-bar-height) + 100rpx);
  // #endif
}

.search {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  padding-bottom: 6rpx;
  // #ifndef APP-PLUS
  padding-top: v-bind('header.top + "px"');
  height: v-bind('header.height + "px"');
  // #endif
  // #ifdef APP-PLUS
  padding-top: calc(var(--status-bar-height) + 14rpx);
  // #endif
  // background-color: #F2F2F2;
  background-color: white;

  &-item {
    display: inline-flex;
    align-items: center;
    // #ifndef APP-PLUS
    width: v-bind('header.left + "px"');
    // #endif
    // #ifdef APP-PLUS
    width: 100%;
    // #endif
    padding-right: 3%;
    box-sizing: border-box;

    &-left {
      font-size: 60rpx;
      margin-right: 6rpx;
    }

    &-center {
      position: relative;
      background-color: white;
      margin-left: v-bind('back ? "1px" : "10px"');
      // #ifndef APP-PLUS
      height: v-bind('header.height + "px"');
      // #endif
      // #ifdef APP-PLUS
      height: 70rpx;
      // #endif
      border-radius: 4px;
      flex: 1;
      margin-right: 18rpx;
      display: inline-flex;
      align-items: center;

      .icon {
        position: absolute;
        left: 3px;
        top: 50%;
        transform: translateY(-50%);
      }

      &-input {
        width: 100%;
        height: 100%;
        padding: 0 6px 0 22px;
        background-color: #F2F2F2;
      }
    }
  }
}

.iHeight {
  height: v-bind('height + "rpx"');
}
</style>