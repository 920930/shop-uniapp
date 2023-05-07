<template>
  <LayoutHeader :height="60">
    <template v-slot:right>
      <i class="iconfont icon-message" style="font-size: 56rpx; margin-top: 7rpx;"></i>
    </template>
    <template #nav>
      <Navs />
    </template>
  </LayoutHeader>
  <swiper class="swiper" circular autoplay :interval="2000">
    <swiper-item>
      <image src="../../static/index/banner/bn1.jpg" mode="widthFix" />
    </swiper-item>
    <swiper-item>
      <image src="../../static/index/banner/bn1.jpg" mode="widthFix" />
    </swiper-item>
    <swiper-item>
      <image src="../../static/index/banner/bn1.jpg" mode="widthFix" />
    </swiper-item>
  </swiper>
  <Separator />
  <scroll-view scroll-x class="menu">
    <view class="menu-item" v-for="(item, i) in navIndex" :key="i">
      <image :src="item.src" class="menu-item-img" />
      <view class="menu-list-item">{{ item.title }}</view>
    </view>
  </scroll-view>
  <Separator />
  <view class="food">
    <view class="food-nav">
      <image src="../../static/index/秒杀.png" class="food-nav-img" />
      <view class="food-nav-title">限时秒杀</view>
      <text class="food-nav-ftitle">次日送达</text>
    </view>
    <view class="food-item">
      <image class="food-item-img"
        src="https://www.zcfsjt.com/storage/images/2023/0420/1_20230420113702_DAKN27gKjc.jpg" />
      <text>商品1</text>
    </view>
    <view class="food-item">
      <image class="food-item-img"
        src="https://www.zcfsjt.com/storage/images/2023/0420/1_20230420113702_DAKN27gKjc.jpg" />
      <text>商品1</text>
    </view>
    <view class="food-item">
      <image class="food-item-img"
        src="https://www.zcfsjt.com/storage/images/2023/0420/1_20230420113702_DAKN27gKjc.jpg" />
      <text>商品1</text>
    </view>
    <view class="food-item">
      <image class="food-item-img"
        src="https://www.zcfsjt.com/storage/images/2023/0420/1_20230420113702_DAKN27gKjc.jpg" />
      <text>商品1</text>
    </view>
  </view>
  <Separator />
  <view class="food">
    <view class="food-nav">
      <image src="../../static/index/百亿补贴.png" class="food-nav-img" />
      <view class="food-nav-title">百亿补贴</view>
      <text class="food-nav-ftitle">大牌正品</text>
    </view>
    <view class="food-item">
      <image class="food-item-img"
        src="https://www.zcfsjt.com/storage/images/2023/0420/1_20230420113702_DAKN27gKjc.jpg" />
      <text>商品1</text>
    </view>
    <view class="food-item">
      <image class="food-item-img"
        src="https://www.zcfsjt.com/storage/images/2023/0420/1_20230420113702_DAKN27gKjc.jpg" />
      <text>商品1</text>
    </view>
    <view class="food-item">
      <image class="food-item-img"
        src="https://www.zcfsjt.com/storage/images/2023/0420/1_20230420113702_DAKN27gKjc.jpg" />
      <text>商品1</text>
    </view>
    <view class="food-item">
      <image class="food-item-img"
        src="https://www.zcfsjt.com/storage/images/2023/0420/1_20230420113702_DAKN27gKjc.jpg" />
      <text>商品1</text>
    </view>
  </view>
  <Separator />
  <view class="list">
    <GoodItem />
    <GoodItem />
    <GoodItem />
    <GoodItem />
    <GoodItem />
    <GoodItem />
    <GoodItem />
  </view>
</template>

<script setup lang="ts">
import LayoutHeader from '../../components/layout/header.vue';
import Navs from '../../components/layout/nav.vue';
import GoodItem from '../../components/good/item.vue';
import Separator from '@/components/separator/index.vue'
const navIndex = [
  { id: 1, title: '充值中心', src: '../../static/index/充值.png' },
  { id: 2, title: '竞拍专场', src: '../../static/index/竞拍.png' },
  { id: 3, title: '预售商品', src: '../../static/index/商品.png' },
  { id: 4, title: '积分商城', src: '../../static/index/积分.jpeg' },
  { id: 5, title: '领券中心', src: '../../static/index/领券.jpeg' },
  { id: 5, title: '特价产品', src: '../../static/index/充值.png' },
]
</script>

<style lang="scss" scoped>
.menu {
  width: 100%;
  height: 140rpx;
  white-space: nowrap;
  color: rgba($color: #000000, $alpha: 0.7);
  box-sizing: border-box;

  &-item {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150rpx;
    height: 100%;
    font-size: small;

    &-img {
      width: 65rpx;
      height: 65rpx;
      padding-bottom: 10rpx;
    }
  }
}

.swiper {
  width: 100%;
  height: 300rpx;

  image {
    width: 100%;
  }
}

.food {
  padding: 10rpx 1%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8rpx;
  align-items: center;

  &-nav {
    text-align: center;
    border-right: 1rpx solid #f2f2f2;
    padding-right: 6rpx;
    margin-right: 6rpx;
    font-size: small;

    &-img {
      width: 60rpx;
      height: 60rpx;
    }

    &-title {
      font-weight: bold;
    }

    &-ftitle {
      font-size: smaller;
      color: rgba($color: #000000, $alpha: 0.7);
    }
  }

  &-item {
    text-align: center;

    &-img {
      width: 100%;
      height: 130rpx;
    }
  }
}

.list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10rpx;
  background-color: rgba($color: #000000, $alpha: 0.06);
  min-width: 0;
}
</style>
