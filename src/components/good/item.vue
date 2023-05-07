<template>
  <view class="item" @tap="goodLink">
    <image src="https://www.zcfsjt.com/storage/images/2023/0420/1_20230420113702_DAKN27gKjc.jpg" class="item-img"></image>
    <view class="item-info">
      <view class="item-info-title">
        <text>万人团 - </text>
        <text>归口管理法律上的，开放式的了123</text>
      </view>
      <view class="item-info-center">
        <text>先用后付 - </text>
        <text>立减5元</text>
      </view>
      <view class="item-info-price">
        ￥<text class="item-info-price-biger">61</text>.03
        <text class="item-info-price-small">已拼10万件</text>
      </view>
    </view>
  </view>
</template>

<script lang='ts' setup>
import { ref } from 'vue';
const goodLink = () => {
  uni.navigateTo({
    url: `/pages/good/index?id=1`
  })
}
</script>

<style lang='scss' scoped>
.item {
  background-color: white;
  width: 370rpx;
  box-sizing: border-box;

  &-img {
    width: 100%;
    height: 360rpx;
    vertical-align: bottom;
  }

  &-info {
    box-sizing: border-box;
    width: 100%;
    padding: 8rpx 14rpx;

    &-title {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      // white-space: nowrap;
      overflow: hidden;
    }

    &-center {
      font-size: 28rpx;
      margin: 8rpx 0;
      color: $uni-color-primary;
    }

    &-price {
      color: $uni-text-color-placeholder;
      font-size: 30rpx;

      &-biger {
        font-size: 40rpx;
      }

      &-small {
        color: $uni-text-color-placeholder;
      }
    }
  }
}
</style>