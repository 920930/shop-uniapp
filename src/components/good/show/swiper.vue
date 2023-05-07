<template>
  <view circular class="swiper-box">
    <swiper circular class="swiper" :value="current" @change="change">
      <swiper-item class="swiper-item" v-for="im in imgs" :key="im">
        <image :src="im" mode="aspectFill" class="swiper-item" />
      </swiper-item>
    </swiper>
    <view class="swiper-box-dot">{{ current + 1 }}/{{ imgs.length }}</view>
  </view>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
withDefaults(defineProps<{
  imgs?: string[]
}>(), {
  imgs: () => [
    'https://rs1.huanqiucdn.cn/dp/api/files/imageDir/f539fc9724206a17e7ee69941ae1d77c.jpg',
    'https://rs1.huanqiucdn.cn/dp/api/files/imageDir/83a432ffdcbf2bae25a1f62799455b61.jpg',
    'https://rs1.huanqiucdn.cn/dp/api/files/imageDir/4af15ee2e3f5493980faca89855d2b4e.jpg',
  ]
})

const current = ref(0)
const change = (e: any) => current.value = e.detail.current
</script>

<style lang='scss' scoped>
.swiper {
  height: 700rpx;

  &-item {
    height: 100%;
    width: 100%;
  }

}

.swiper-box {
  height: 700rpx;
  position: relative;

  &-dot {
    position: absolute;
    right: 10rpx;
    bottom: 16rpx;
    background-color: rgba($color: #000000, $alpha: 0.5);
    padding: 0 14rpx;
    border-radius: 100rpx;
    color: white;
    font-size: 24rpx;
  }
}
</style>