<template>
  <view class="com">
    <view class="com-top">
      <view class="com-top-l">
        <image class="com-top-l-avatar"
          src="https://rs1.huanqiucdn.cn/dp/api/files/imageDir/da2e4d3c165663becba612c834295007.jpg" mode="scaleToFill" />
        <text>糖豆豆</text>
      </view>
      <text @tap="moreBtn" v-if="more" class="iconfont icon-more com-top-icon"></text>
    </view>
    <view class="com-content">之类很好，没有伊娃，做工精细，里面像是记忆力的碎片，中间的叩打正合适，在学习哦i啊用很好</view>
    <view class="com-img" v-if="len">
      <template v-for="(item, i) in images" :key="i">
        <image class="com-img-item" :src="item" @tap="openImg(i)" v-if="len < 6 ? i < len : i < 6" />
      </template>
    </view>
  </view>

  <uni-popup ref="popupRef">
    <view class="dialog">
      <view class="dialog-item dialog-size">发表时间：2023-04-20</view>
      <view class="dialog-item">查看当前规格</view>
      <view class="dialog-item">举报该评论</view>
      <Separ />
      <view class="dialog-item" @tap="close">取消</view>
    </view>
  </uni-popup>
</template>

<script lang='ts' setup>
import { ref } from 'vue';
import Separ from '@/components/separator/index.vue'
const props = withDefaults(defineProps<{
  border?: boolean;
  more?: boolean;
  len?: number;
}>(), {
  border: false,
  more: true,
  len: 3,
})
const images = [
  'https://rs1.huanqiucdn.cn/dp/api/files/imageDir/f398867c76503e00d9f7441b89a7a714.jpg',
  'https://rs1.huanqiucdn.cn/dp/api/files/imageDir/1e81c71299f6f5426397c0286c3fde93.jpg',
  'https://rs1.huanqiucdn.cn/dp/api/files/imageDir/188e8bd9a392501b64aea4b14b88b32c.jpg',
  'https://rs1.huanqiucdn.cn/dp/api/files/imageDir/0349e4c69c0422fac7505ebd40afad1e.jpg',
  'https://rs1.huanqiucdn.cn/dp/api/files/imageDir/be8ad01847ddc1dacaf7873c1f86948a.jpg',
  'https://rs1.huanqiucdn.cn/dp/api/files/imageDir/9257dd6b71b68bc9eb25ebe1215e0b52.jpg',
  'https://rs1.huanqiucdn.cn/dp/api/files/imageDir/f398867c76503e00d9f7441b89a7a714.jpg',
  'https://rs1.huanqiucdn.cn/dp/api/files/imageDir/1e81c71299f6f5426397c0286c3fde93.jpg',
  'https://rs1.huanqiucdn.cn/dp/api/files/imageDir/188e8bd9a392501b64aea4b14b88b32c.jpg',
]

const openImg = (i: number) => {
  const pages = getCurrentPages();
  const current = pages[pages.length - 1]
  if (!current.route?.includes('good/comment')) return;
  uni.previewImage({
    current: i,
    urls: images
  })
}

const popupRef = ref()
const moreBtn = () => popupRef.value.open("bottom")
const close = () => popupRef.value.close()
</script>

<style lang='scss' scoped>
.com {
  margin: 20rpx 3% 0;
  border-bottom-width: v-bind("border ? '1rpx' : '0'");
  border-bottom-color: $uni-border-color;
  border-bottom-style: solid;
  padding-bottom: 20rpx;

  &-top {
    display: flex;
    align-items: center;
    margin-bottom: 20rpx;

    &-l {
      display: flex;
      flex: 1;
      align-items: center;

      &-avatar {
        width: 50rpx;
        height: 50rpx;
        border-radius: 50%;
        margin-right: 10rpx;
      }
    }

    &-icon {
      color: $uni-text-color-grey;
    }
  }

  &-content {
    color: $uni-text-color-grey;
    font-size: 30rpx;
  }

  &-img {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15rpx;
    margin-top: 16rpx;

    &-item {
      width: 100%;
      height: 230rpx;
      border-radius: 10rpx;
    }
  }
}

.dialog {
  background-color: white;

  &-item {
    text-align: center;
    padding: 15rpx;
    border-bottom: 1rpx solid $uni-border-color;
  }

  &-size {
    font-size: $uni-font-size-sm;
    color: $uni-text-color-grey;
  }
}
</style>