<template>
  <view class="sm">
    <image src="https://img2.woyaogexing.com/2023/05/05/7935163d9e7e34ba7a3b00c8ea638987.jpg" mode="scaleToFill" />
    <view class="sm-title">飞鸽牌山地自信车成人男女铝合金</view>
    <view class="sm-info">
      <text class="sm-info-price">￥37122</text>
      <text class="sm-info-num">已拼8.3万件</text>
    </view>
  </view>
</template>

<script lang='ts' setup>
import { ref } from 'vue';

</script>

<style lang='scss' scoped>
.sm {
  width: 100%;

  image {
    width: 100%;
    height: 220rpx;
    border-radius: 5rpx;
  }

  &-title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &-info {
    color: rgba($color: #000000, $alpha: 0.6);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: $uni-font-size-xs;
    margin-top: 6rpx;

    &-price {
      color: red;
      font-size: $uni-font-size-sm;
      margin-right: 10rpx;
      flex: 1;
    }

    &-num {
      display: inline-block;
      max-width: 100rpx;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      // 让省略号在左侧
      text-align: left;
      direction: rtl;
    }
  }
}
</style>
