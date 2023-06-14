<template>
  <view class="cart">
    <view class="cart-item">
      <text class="iconfont icon-dianpu1" style="font-size: large;"></text>
      <text>店铺</text>
    </view>
    <view class="cart-item">
      <text class="iconfont icon-chat" style="font-size: large;"></text>
      <text>客服</text>
    </view>
    <view class="cart-item" @click="toCart">
      <text class="iconfont icon-cart" style="font-size: large;"></text>
      <text>购物车</text>
    </view>
    <view class="cart-in">加入购物车</view>
    <view class="cart-buy">立即购买</view>
  </view>
  <view style="height: 110rpx"></view>
</template>

<script lang='ts' setup>
const toCart = () => uni.switchTab({
  url: '/pages/cart/index'
});
</script>

<style lang='scss' scoped>
.cart {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100rpx;
  box-sizing: border-box;
  display: flex;
  background-color: white;
  box-shadow: 0 -5rpx 10rpx rgba($color: #000000, $alpha: 0.03);

  &-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 110rpx;
    font-size: 28rpx;
  }

  &-in {
    background: linear-gradient(to top right, #FFA60b, #FFBA03);
    flex: 1;
    margin-left: 10rpx;
    color: white;
    line-height: 100rpx;
    text-align: center;
  }

  &-buy {
    background: linear-gradient(to top right, #F20701, #FC4D16);
    flex: 1;
    color: white;
    line-height: 100rpx;
    text-align: center;
  }
}
</style>