<template>
  <view class="good" @tap="goodLink">
    <image src="https://rs1.huanqiucdn.cn/dp/api/files/imageDir/8813c6e323c99c2635098df6b9d1f5cf.jpg" mode="scaleToFill"
      class="good-img" />
    <view class="good-info">
      <view class="good-info-title">
        <text>户外帐篷户外野营全自动双人担任帐篷可折叠帐篷大容量原始人装备野营露营帐篷</text>
      </view>
      <view class="good-info-bom">
        <view class="good-info-bom-t">
          <text class="good-info-bom-red" style="margin-right: 8rpx;">历史最低价</text><text>正品发票 分期付款</text>
        </view>
        <view>
          <text class="good-info-bom-red">券后</text>
          <text class="good-info-bom-red">￥</text>
          <text class="good-info-bom-red good-info-bom-price">1999</text>
          <text>已拼1万+件</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
const goodLink = () => {
  uni.navigateTo({
    url: `/pages/good/index?id=1`
  })
}
</script>

<style lang='scss' scoped>
.good {
  display: flex;
  margin-bottom: 10rpx;

  &-img {
    width: 250rpx;
    height: 250rpx;
    padding-bottom: 10rpx;
    margin-right: 10rpx;
  }

  &-info {
    flex: 1;
    border-bottom: 1rpx solid rgba($color: #000000, $alpha: 0.05);
    position: relative;

    &-title {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    &-bom {
      position: absolute;
      bottom: 16rpx;
      left: 0;
      width: 100%;
      font-size: 28rpx;
      color: rgba($color: #000000, $alpha: 0.6);

      &-t {
        margin-bottom: 10rpx;
      }

      &-red {
        color: rgba($color: red, $alpha: 0.8);
      }

      &-price {
        font-size: 38rpx;
        margin-right: 10rpx;
      }

    }
  }
}
</style>