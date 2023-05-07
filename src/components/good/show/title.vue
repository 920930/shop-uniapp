<template>
  <view class="act">
    <view class="act-left">
      <view class="act-left-t">补贴价￥<text class="act-left-t-price">28.9</text>30天内最低价</view>
      <view class="act-left-b">已卖213件<text class="act-left-b-price">官方补贴16.9元</text></view>
    </view>
    <view class="act-right">
      <view>百亿补贴</view>
      <view style="font-size: 30rpx; margin-top: 6rpx;">买贵必赔</view>
    </view>
  </view>
  <view class="price">
    <view class="price-l">￥<text class="price-l-price">379</text>起</view>
    <view class="price-r">已卖2.1万件</view>
  </view>
  <view class="ticket">
    <view class="ticket-left">
      <text class="ticket-left-item">30元无门槛价格</text>
      <text class="ticket-left-item">2件9.9折</text>
    </view>
    <text class="ticket-right iconfont icon-right"></text>
  </view>
  <view class="out">退货包运费 | 不满意包退货运费，退换无忧</view>
  <view class="title">
    <text class="title-cu">五一大促</text>
    <text class="title-brand">品牌</text>
    <text class="title-info">凤凰铝合金山地自行车男女式越野变速单车公路车青少年中学生成人</text>
  </view>
  <view class="brand">
    <view class="brand-l">
      <image src="" mode="scaleToFill" style="height: 10rpx; width: 10rpx" />
      <text style="font-weight: bold; margin-right: 5rpx;">凤凰</text> |
      <text style="margin-left: 5rpx">品牌官方授权，100%正品</text>
    </view>
    <text class="iconfont icon-right brand-r"></text>
  </view>
  <view class="send">
    <view class="send-l">
      <text class="send-l-out">预计24小时内发货</text> |
      <text>承诺24小时内发货</text>
    </view>
    <text class="iconfont icon-right ricon"></text>
  </view>
  <view class="send">
    <view class="send-l">品质险由中国人保财险承保</view>
    <text class="iconfont icon-right ricon"></text>
  </view>
  <view class="send">
    <view class="send-l">退货包运费·假一赔十·降价补差·全场包邮</view>
    <text class="iconfont icon-right ricon"></text>
  </view>
  <view class="collect">
    <view class="collect-item"><text class="iconfont icon-collection" style="margin-right: 10rpx"></text>收藏商品</view>
    <view class="collect-item"><text class="iconfont icon-fenxiang" style="margin-right: 10rpx"></text>分享商品</view>
  </view>
</template>

<script lang='ts' setup>
import { ref } from 'vue'

</script>

<style lang='scss' scoped>
.ricon {
  color: #C9CDCE;
}

.act {
  background-color: #F44250;
  height: 130rpx;
  display: flex;
  color: white;

  &-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 3%;
    font-size: 28rpx;

    &-t {
      &-price {
        font-size: 46rpx;
        margin-right: 15rpx;
      }
    }

    &-b {
      margin-top: 6rpx;

      &-price {
        background-color: #FED5B9;
        color: #BA534D;
        padding: 2rpx 10rpx;
        margin-left: 15rpx;
        border-radius: 100rpx;
      }
    }
  }

  &-right {
    width: 200rpx;
    background-color: #E8323E;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 32rpx;
  }
}

.price {
  display: flex;
  font-size: small;
  margin: 16rpx 3% 0;
  align-items: center;

  &-l {
    flex: 1;
    color: red;

    &-price {
      font-size: 46rpx;
      margin-right: 12rpx;
    }
  }

  &-r {
    color: #575757;
  }
}

.ticket {
  display: flex;
  padding: 20rpx 3%;

  &-left {
    flex: 1;
    color: #9A424A;
    margin-left: -15rpx;

    &-item {
      border: 1rpx solid #9A424A;
      margin-left: 15rpx;
      padding: 2rpx 10rpx;
      border-radius: 5rpx;
    }
  }

  &-right {
    font-size: large;
    color: #E1E1E1;
  }
}

.out {
  background-color: #EDF9ED;
  color: #23AD14;
  margin: 0 3% 15rpx;
  padding: 8rpx 15rpx;
  font-weight: bold;
}

.title {
  margin: 0 3% 10rpx;
  font-weight: bold;

  &-cu {
    background-color: #EA000b;
    padding: 2rpx 10rpx;
    color: white;
    border-radius: 5rpx;
    margin-right: 10rpx;
    font-size: small;
  }

  &-brand {
    background-color: #232323;
    padding: 2rpx 10rpx;
    color: white;
    border-radius: 5rpx;
    margin-right: 10rpx;
    font-size: small;
  }

  &-out {
    background-color: #23B515;
    padding: 2rpx 10rpx;
    color: white;
    border-radius: 5rpx;
    font-size: small;
    margin-left: 10rpx;
  }
}

.brand {
  background-color: #E8ECEF;
  margin: 14rpx 3%;
  padding: 16rpx;
  display: flex;
  align-items: center;
  font-size: 30rpx;

  &-l {
    flex: 1;
  }

  &-r {
    color: #C9CDCE;
  }
}

.send {
  margin: 20rpx 3% 10rpx;
  display: flex;
  border-top: 1rpx solid rgba($color: #000000, $alpha: 0.05);
  padding-top: 20rpx;
  color: #565656;
  align-items: center;
  font-size: 32rpx;

  &-l {
    flex: 1;

    &-out {
      color: #23AD14;
    }
  }
}

.collect {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-top: 1rpx solid rgba($color: #000000, $alpha: 0.05);
  margin: 20rpx 3% 10rpx;
  padding: 20rpx 0 10rpx;
  justify-items: center;
  font-size: 30rpx;
  color: #575757;

  &-item {
    display: flex;
    align-items: center;
  }
}
</style>