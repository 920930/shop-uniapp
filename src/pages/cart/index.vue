<template>
  <template v-for="list in carts.lists" :key="list.id">
    <view class="list">
      <view>小米京东自营店</view>
      <view class="list-content">
        <checkbox-group @change="(e: any) => carts.toggleCheck(e, list.id)">
          <checkbox :checked="list.check" />
        </checkbox-group>
        <image class="list-content-img" :src="list.img" />
        <view>
          <text>{{ list.title }}</text>
          <view>光速蓝 *+128G</view>
          <view>
            <text>￥{{ list.price }}</text>
            <text>1</text>
          </view>
        </view>
      </view>
    </view>
    <Separ />
  </template>
  <view style="height: 100rpx"></view>
  <view class="total">
    <checkbox-group class="total-check" @change="(e: any) => carts.toggleCheck(e)">
      <label><checkbox value="1" :checked="carts.isAllCheck" />选中</label>
    </checkbox-group>
    
    <view class="total-center">
      <text>合计</text><text>￥{{ carts.total }}</text>
      <view class="total-center-text">不含运费</view>
    </view>
    <view class="total-js">结算(3)</view>
  </view>
</template>

<script lang='ts' setup>
import Separ from '@/components/separator/index.vue';
import { goodCart } from '@/stores/goodCart';
const carts = goodCart()
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