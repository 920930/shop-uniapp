<template>
  <view class="swiper" @tap="open" @touchmove.stop.prevent="() => { }">
    <swiper circular :value="current" @change="change" class="swiper-box">
      <swiper-item v-for="im in imgs" :key="im">
        <image :src="im" mode="aspectFill" class="swiper-box-item" />
      </swiper-item>
    </swiper>
    <view class="swiper-dot">{{ current + 1 }}/{{ imgs.length }}</view>
  </view>

  <!-- #ifdef APP-PLUS -->
  <view class="swiper-modal" v-if="goodSwiper.modal" @tap="open" @touchmove.stop.prevent="() => { }">
    <view class="swiper-modal-header">
      <text class="iconfont icon-close1 swiper-modal-header-back"></text>
      <text class="swiper-modal-header-center">{{ `${goodSwiper.current + 1}/${goodSwiper.total}` }}</text>
      <view class="iconfont icon-fenxiang swiper-modal-header-right" @tap.stop="() => { }"></view>
    </view>
    <swiper circular :value="current" @change="change" class="swiper-modal-box">
      <swiper-item v-for="im in imgs" :key="im">
        <image :src="im" mode="aspectFill" class="swiper-box-item" />
      </swiper-item>
    </swiper>
    <view class="swiper-modal-title" @tap.stop="() => { }">JFK JFK JFK是结果JFK就公开警告国际法快捷方式国家科技发生范德萨</view>
    <view class="swiper-modal-info" @tap.stop="() => { }">
      <view class="swiper-modal-info-price">券后￥<text class="swiper-info-price-b">4078</text>历史最低价格</view>
      <view class="swiper-modal-info-btn" @tap.stop="byFn">去下单</view>
    </view>
  </view>
  <!-- #endif -->
</template>

<script lang='ts' setup>
import { ref } from 'vue';
import { useGoodSwiperStore } from '@/stores/goodSwiper'
const props = withDefaults(defineProps<{
  imgs?: string[];
  title?: string;
}>(), {
  imgs: () => [
    'https://rs1.huanqiucdn.cn/dp/api/files/imageDir/f539fc9724206a17e7ee69941ae1d77c.jpg',
    'https://rs1.huanqiucdn.cn/dp/api/files/imageDir/83a432ffdcbf2bae25a1f62799455b61.jpg',
    'https://rs1.huanqiucdn.cn/dp/api/files/imageDir/4af15ee2e3f5493980faca89855d2b4e.jpg',
  ],
  title: 'JFK JFK数据库设计收费的'
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
  console.log('open')
  goodSwiper.toggleModal();
  goodSwiper.toggleTopBool(!goodSwiper.modal)
}

const byFn = () => {
  console.log(123)
}

const envet = ref('stop')
</script>

<style lang='scss' scoped>
.swiper {
  height: 700rpx;
  position: relative;

  &-box {
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

// #ifdef APP-PLUS
.swiper-modal {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: black;
  left: 0;
  bottom: 0;
  z-index: 12;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &-header {
    position: absolute;
    color: white;
    padding: var(--status-bar-height) 3% 0;
    height: calc(var(--status-bar-height) + 80rpx);
    left: 0;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;

    &-back {
      font-size: 50rpx;
    }

    &-right {
      font-size: 50rpx;
    }
  }

  &-box {
    width: 100%;
    height: 700rpx;

    &-item {
      height: 100%;
      width: 100%;
    }
  }

  &-title {
    color: white;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 15rpx;
    padding: 0 10rpx;
    font-size: small;
  }

  &-info {
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 40rpx;
    padding: 0 10rpx;
    font-size: small;

    &-price {
      &-b {
        font-size: x-large;
        margin-right: 16rpx;
      }
    }

    &-btn {
      background-color: red;
      padding: 8rpx 16rpx;
      border-radius: 10rpx;
      font-size: medium;
    }
  }
}

// #endif
</style>