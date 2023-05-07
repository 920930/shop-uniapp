<template>
  <view class="com">
    <view class="com-top">
      <view class="com-top-l">
        <image class="com-top-l-avatar" src="https://img2.woyaogexing.com/2023/05/05/7935163d9e7e34ba7a3b00c8ea638987.jpg"
          mode="scaleToFill" />
        <text>糖豆豆</text>
      </view>
      <text v-if="more">more</text>
    </view>
    <view class="com-content">之类很好，没有伊娃，做工精细，里面像是记忆力的碎片，中间的叩打正合适，在学习哦i啊用很好</view>
    <view class="com-img" v-if="imgShow">
      <image class="com-img-item" src="https://img2.woyaogexing.com/2023/05/05/7935163d9e7e34ba7a3b00c8ea638987.jpg"
        alt="" />
      <image class="com-img-item" src="https://img2.woyaogexing.com/2023/05/05/7935163d9e7e34ba7a3b00c8ea638987.jpg"
        alt="" />
      <image class="com-img-item" src="https://img2.woyaogexing.com/2023/05/05/7935163d9e7e34ba7a3b00c8ea638987.jpg"
        alt="" />
    </view>
  </view>
</template>

<script lang='ts' setup>
withDefaults(defineProps<{
  border?: boolean;
  more?: boolean;
  imgShow?: boolean;
}>(), {
  border: true,
  more: true,
  imgShow: true,
})
</script>

<style lang='scss' scoped>
.com {
  margin: 20rpx 3% 0;
  border-bottom-width: v-bind("border ? '1rpx' : '0'");
  border-bottom-color: rgba($color: #000000, $alpha: 0.05);
  border-bottom-style: solid;
  padding-bottom: 20rpx;

  &-top {
    display: flex;
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
  }

  &-content {
    color: rgba($color: #000000, $alpha: 0.6);
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
</style>