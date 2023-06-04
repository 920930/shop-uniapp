<template>
  <!-- <view class="header" @touchmove.stop.prevent="() => { }">
    <text class="iconfont header-back" :class="goodSwiper.modal ? 'icon-close1' : 'icon-left'" @tap="goBack"></text>
    <text class="header-center">{{ !goodSwiper.modal ? title : `${goodSwiper.current + 1}/${goodSwiper.total}` }}</text> -->
  <view class="header">
    <text class="iconfont header-back icon-left" @tap="goBack"></text>
    <text class="header-center">{{ title }}</text>
    <!-- #ifdef APP-PLUS -->
    <view class="iconfont icon-fenxiang header-right"></view>
    <!-- #endif -->
  </view>
  <view class="status" v-if="fullstatus"></view>
</template>

<script lang='ts' setup>
import { reactive } from 'vue';
withDefaults(defineProps<{
  topBool: boolean;
  title: string;
  fullstatus?: boolean;
}>(), {
  topBool: false,
  title: '',
  fullstatus: false,
})
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

const goBack = () => uni.navigateBack();

// #ifdef APP-PLUS

// #endif
</script>

<style lang='scss' scoped>
.status {
  // #ifndef APP-PLUS
  height: v-bind("header.top + header.height + 6 + 'px'");
  // #endif
  // #ifdef APP-PLUS
  height: calc(var(--status-bar-height) + 80rpx);
  // #endif
}

.header {
  position: fixed;
  // #ifndef APP-PLUS
  padding-top: v-bind("header.top - 6 + 'px'");
  height: v-bind("header.top + header.height + 6 + 'px'");
  // #endif
  // #ifdef APP-PLUS
  padding-top: var(--status-bar-height);
  height: calc(var(--status-bar-height) + 80rpx);
  // #endif
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  z-index: 10;
  background-color: v-bind('topBool ? "white" : null');
  transition: background-color 0.5s;
  display: flex;
  align-items: center;
  justify-content: v-bind('topBool ? "stretch" : "space-between"');
  border-bottom-width: v-bind('topBool ? "1rpx" : "0"');
  border-bottom-style: solid;
  border-bottom-color: rgba($color: #000000, $alpha: 0.1);

  &-back {
    display: inline-block;
    color: v-bind('topBool ? "black" : "white"');
    background-color: v-bind('topBool ? "rgba(255,255,255,255.5)" : "rgba(0,0,0,0.5)"');
    border-radius: 50%;
    font-size: 50rpx;
    margin-left: 3%;
    transition: all 0.5s;
    width: 60rpx;
    height: 60rpx;
    line-height: 60rpx;
    text-align: center;
    box-sizing: border-box;
  }

  &-center {
    display: v-bind('topBool ? "inline-block" : "none"');
    // #ifndef APP-PLUS
    width: v-bind('header.left + "px"');
    // #endif
    // #ifdef APP-PLUS
    flex: 1;
    // #endif
    text-align: center;
    transition: all 1s ease-out;
    color: black;
  }

  &-right {
    color: v-bind('topBool ? "black" : "white"');
    margin-right: 3%;
    background-color: v-bind('topBool ? "rgba(255,255,255,255.5)" : "rgba(0,0,0,0.5)"');
    font-size: 40rpx;
    border-radius: 50%;
    transition: all 0.5s;
    width: 60rpx;
    height: 60rpx;
    line-height: 60rpx;
    text-align: center;
    box-sizing: border-box;
  }
}
</style>