<template>
  <GoodHeader :topBool="topBool" title="商品页面" />
  <GoodSwiper />
  <GoodTitle />
  <Separ />
  <Card title="商品评论" link="/pages/good/comment?id=1">
    <view @tap="linkBtn">
      <Comment border :more="false" :len="0" />
      <Comment :more="false" :len="0" />
    </view>
  </Card>
  <Separ />
  <Card title="行家心得">
    <view @tap="linkBtn">
      <Comment :more="false" />
    </view>
  </Card>
  <Separ />
  <view class="shop">
    <image src="https://img2.woyaogexing.com/2023/05/05/7935163d9e7e34ba7a3b00c8ea638987.jpg" mode="scaleToFill"
      class="shop-left" />
    <view class="shop-center">
      <view class="shop-center-top">
        <text class="shop-center-top-title">飞鸽FG FLYING PIGEON自行车官方旗舰店</text>
        <text class="shop-center-top-brank">品牌</text>
      </view>
      <view class="shop-center-company">
        <view class="shop-center-company-name">
          <text class="iconfont icon-icon_yishiming shop-center-company-name-icon"></text>
          <text class="shop-center-company-name-text">天津飞鸽集团天津飞鸽集团有限公司</text>
        </view>
        <text>官方授权</text>
      </view>
    </view>
    <view class="shop-right"><text class="shop-right-item">进店逛逛</text></view>
  </view>
  <view class="bz">
    <view class="bz-left">
      <text class="iconfont icon-wodebaozhang bz-left-icon"></text>
      <text>店铺保障</text>
    </view>
    <view class="bz-right">
      <text class="bz-right-item">退货包运费</text>
      <text class="bz-right-item">假一赔十</text>
      <text>保证金</text>
      <text class="iconfont icon-right"></text>
    </view>
  </view>
  <view class="list">
    <GoodItem />
    <GoodItem />
    <GoodItem />
    <GoodItem />
    <GoodItem />
    <GoodItem />
  </view>
  <Separ />
  <Card title="商品详情">
    <view class="info">
      <view>品牌： 浅色熊</view>
      <view>品牌： 浅色熊</view>
      <view>品牌： 浅色熊</view>
      <view>品牌： 浅色熊</view>
      <view>品牌： 浅色熊</view>
    </view>
    <view class="good">
      <image src="https://img2.woyaogexing.com/2023/05/05/7935163d9e7e34ba7a3b00c8ea638987.jpg" mode="scaleToFill" />
      <image src="https://img2.woyaogexing.com/2023/05/05/7935163d9e7e34ba7a3b00c8ea638987.jpg" mode="scaleToFill" />
      <image src="https://img2.woyaogexing.com/2023/05/05/7935163d9e7e34ba7a3b00c8ea638987.jpg" mode="scaleToFill" />
      <image src="https://img2.woyaogexing.com/2023/05/05/7935163d9e7e34ba7a3b00c8ea638987.jpg" mode="scaleToFill" />
    </view>
  </Card>

  <Separ />
  <view class="like-top">
    <text class="iconfont icon-jifenshangcheng like-top-icon"></text>
    <text>相似商品</text>
  </view>
  <view class="like">
    <GoodList />
    <GoodList />
    <GoodList />
    <GoodList />
    <GoodList />
    <GoodList />
    <GoodList />
    <GoodList />
    <GoodList />
    <GoodList />
    <GoodList />
    <GoodList />
  </view>
  <Cart />
</template>

<script lang='ts' setup>
import { ref } from 'vue';
import { onPageScroll, onBackPress, onUnload } from '@dcloudio/uni-app';
import { useGoodSwiperStore } from '@/stores/goodSwiper'
import GoodHeader from '@/components/good/show/header.vue';
import GoodSwiper from '@/components/good/show/swiper.vue';
import GoodTitle from '@/components/good/show/title.vue';
import Separ from '@/components/separator/index.vue';
import Cart from '@/components/cart/tab.vue';
import Card from '@/components/card/index.vue';
import Comment from '@/components/comment/index.vue';
import GoodItem from '@/components/good/itemsm.vue'
import GoodList from '@/components/good/item.vue';
const goodSwiper = useGoodSwiperStore()
// 页面滚动判断
const topBool = ref(false);
onPageScroll((e: { scrollTop: number }) => topBool.value = e.scrollTop > 6 ? true : false)

// #ifdef APP-PLUS

onBackPress(() => {
  if (goodSwiper.modal) {
    goodSwiper.toggleModal()
    return true
  }
  return false
})
// #endif


// onReady(() => {
//   const query = uni.createSelectorQuery().select('.like')
//   query.boundingClientRect(data => {
//     console.log(JSON.stringify(data));
//   }).exec();
// })

const linkBtn = () => {
  uni.navigateTo({
    url: '/pages/good/comment?id=1'
  })
}

onUnload(() => goodSwiper.$reset())
</script>

<style lang='scss' scoped>
.shop {
  display: flex;
  justify-content: space-between;
  margin: 15rpx 22rpx;
  color: rgba($color: #000000, $alpha: 0.7);

  &-left {
    width: 90rpx;
    height: 90rpx;
    border: 1rpx solid rgba($color: #000000, $alpha: 0.1);
    border-radius: 10rpx;
    box-sizing: border-box;
  }

  &-center {
    padding: 0 15rpx;
    width: 486rpx;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &-top {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &-title {
        display: inline-block;
        width: 380rpx;
        white-space: nowrap;
        overflow: hidden;
        text-emphasis: ellipsis;
        font-weight: bold;
      }

      &-brank {
        display: inline-block;
        background-color: #000000;
        color: white;
        width: 70rpx;
        text-align: center;
        box-sizing: border-box;
        border-radius: 5rpx;
        font-size: small;
      }
    }

    &-company {
      font-size: small;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &-name {
        width: 344rpx;
        font-size: small;
        display: flex;
        align-items: center;

        &-icon {
          font-size: small;
          color: lightseagreen;
        }

        &-text {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }

  &-right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 125rpx;
    font-size: small;
    box-sizing: border-box;

    &-item {
      display: inline-block;
      width: 100%;
      height: 60rpx;
      line-height: 60rpx;
      text-align: center;
      border: 1rpx solid rgba($color: #000000, $alpha: 0.4);
      border-radius: 10rpx;
    }
  }
}

.bz {
  margin: 0 3%;
  background-color: #E8ECEF;
  margin: 14rpx 3%;
  padding: 16rpx;
  display: flex;
  align-items: center;
  font-size: small;
  justify-content: space-between;

  &-left {
    display: flex;
    align-items: center;

    &-icon {
      color: lightseagreen;
    }
  }

  &-right {
    color: rgba($color: #000000, $alpha: 0.6);
    display: flex;
    align-items: center;

    &-item {
      border-right: 1rpx solid rgba($color: #000000, $alpha: 0.6);
      margin-right: 10rpx;
      padding-right: 10rpx;
    }
  }
}

.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 20rpx 3% 15rpx;
  gap: 15rpx;
}

.info {
  background-color: rgba($color: #000000, $alpha: 0.05);
  padding: 20rpx;
  margin-bottom: 20rpx;
}

.good {
  display: flex;
  flex-direction: column;

  image {
    width: 100%;
  }
}

.like-top {
  display: flex;
  align-items: center;
  justify-content: center;
  color: $uni-text-color-red;
  padding: 20rpx 0;

  &-icon {
    font-size: 34rpx;
    margin-right: 10rpx;
  }
}

.like {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba($color: #000000, $alpha: 0.05);
}
</style>