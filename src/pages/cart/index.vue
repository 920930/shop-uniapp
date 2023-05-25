<template>
  <view class="list">
    <view>小米京东自营店</view>
    <view class="list-content">
      <image class="list-content-img" src="https://www.zcfsjt.com/storage/images/2023/0420/1_20230420113702_DAKN27gKjc.jpg" />
      <view>
        <text>小米1.5匹 新一级能耗 变频冷热</text>
      </view>
    </view>
  </view>
  <Separ />
  <view class="list">
    <view>小米京东自营店</view>
    <view class="list-content">
      <image class="list-content-img" src="https://www.zcfsjt.com/storage/images/2023/0420/1_20230420113702_DAKN27gKjc.jpg" />
      <view>
        <text>小米1.5匹 新一级能耗 变频冷热</text>
      </view>
    </view>
  </view>
  <view style="height: 100rpx"></view>
  <view class="total">
    <label class="total-check"><checkbox value="cb" checked="true" />选中</label>
    <view class="total-center">
      <text>合计</text><text>￥40</text>
      <view class="total-center-text">不含运费</view>
    </view>
    <view class="total-js">结算(3)</view>
  </view>
</template>

<script lang='ts' setup>
import Separ from '@/components/separator/index.vue';
</script>

<style lang='scss' scoped>
.list{
  padding: 16rpx;
  height: 600rpx;
  &-content{
    display: flex;
    &-img{
      width: 200rpx;
      height: 200rpx;
      margin-right: 20rpx;
    }
  }
}
.total{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: white;
  height: 100rpx;
  border-top: 1rpx solid rgba($color: #000000, $alpha: 0.05);
  box-sizing: border-box;
  &-check{
    flex: 1;
    padding-left: 3%;
  }
  &-center{
    margin-right: 10rpx;
    &-text{
      font-size: 26rpx;
      color: rgba($color: #000000, $alpha: 0.5);
    }
  }
  &-js{
    background-color: red;
    height: 100%;
    line-height: 100rpx;
    padding: 0 10rpx;
    color: white;
  }
}
</style>