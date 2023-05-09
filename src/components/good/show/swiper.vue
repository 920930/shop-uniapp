<template>
  <view class="swiper-box" @tap="open">
    <swiper circular :value="current" @change="change" class="swiper-box-swiper">
      <swiper-item v-for="im in imgs" :key="im">
        <image :src="im" mode="aspectFill" class="swiper-box-swiper-item" />
      </swiper-item>
    </swiper>
    <view class="swiper-box-dot">{{ current + 1 }}/{{ imgs.length }}</view>
  </view>

  <view class="swiper" v-if="goodSwiper.modal" @tap="open" @touchmove.stop.prevent="() => { }"></view>
</template>

<script lang='ts' setup>
import { ref } from 'vue';
import { useGoodSwiperStore } from '@/stores/goodSwiper'
const props = withDefaults(defineProps<{
  imgs?: string[]
}>(), {
  imgs: () => [
    'https://rs1.huanqiucdn.cn/dp/api/files/imageDir/f539fc9724206a17e7ee69941ae1d77c.jpg',
    'https://rs1.huanqiucdn.cn/dp/api/files/imageDir/83a432ffdcbf2bae25a1f62799455b61.jpg',
    'https://rs1.huanqiucdn.cn/dp/api/files/imageDir/4af15ee2e3f5493980faca89855d2b4e.jpg',
  ]
})
const goodSwiper = useGoodSwiperStore()
const current = ref(0)
const change = (e: any) => {
  current.value = e.detail.current;
  goodSwiper.setCurrentTotal({ current: current.value, total: props.imgs.length })
}

// #ifdef APP-PLUS
goodSwiper.setCurrentTotal({ current: current.value, total: props.imgs.length })
// #endif

const open = () => {
  // #ifdef MP
  uni.previewImage({
    urls: props.imgs
  })
  // #endif
  // #ifdef APP-PLUS
  goodSwiper.toggleModal();
  // #endif
}

</script>

<style lang='scss' scoped>
.swiper-box {
  height: 700rpx;
  position: relative;
  top: v-bind("goodSwiper.modal ? '50%' : '0'");
  transform: v-bind("goodSwiper.modal ? 'translateY(-50%)' : 'translateY(0)'");
  z-index: 12;
  translate: all 1s;

  &-swiper {
    width: 100%;
    height: 100%;

    &-item {
      height: 100%;
      width: 100%;
    }
  }

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

.swiper {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: black;
  left: 0;
  bottom: 0;
  z-index: 11;
  overflow: hidden;
}
</style>