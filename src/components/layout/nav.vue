<template>
  <scroll-view scroll-x class="scroll" :scroll-into-view="`tabId-${activeId}`">
    <view v-for="(item, i) in 10" :id="`tabId-${i}`" @tap="setActive(i)" :key="item" class='scroll-item'>
      <text>推荐</text>
      <text :class="{ 'scroll-item-active': i === activeId }"></text>
    </view>
  </scroll-view>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
const activeId = ref(0);
const setActive = (id: number) => {
  activeId.value = id
}
</script>

<style scoped lang="scss">
.scroll {
  white-space: nowrap;
  width: 100%;
  height: 74rpx;
  padding-left: 10rpx;
  border-bottom: 1rpx solid #ededed;
  background-color: white;
  box-sizing: border-box;
  overflow: hidden;

  &::-webkit-scrollbar {
    width: 0;
  }

  &-item {
    display: inline-block;
    width: 120rpx;
    height: 100%;
    text-align: center;
    position: relative;
    box-sizing: border-box;
    padding-top: 15rpx;

    &-active {
      border-bottom: 6rpx solid red;
      position: absolute;
      width: 80rpx;
      height: 2rpx;
      left: 20rpx;
      bottom: 2rpx;
    }
  }
}

.scroll::-webkit-scrollbar {
  width: 0;
}
</style>