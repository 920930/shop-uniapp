<template>
  <view class="card-top">
    <text>{{ title }}</text>
    <view class="card-top-more" v-if="link">
      <text @tap="naviTo">查看更多</text><text class="iconfont icon-right"></text>
    </view>
  </view>
  <slot />
</template>

<script lang='ts' setup>
const props = defineProps<{
  title: string;
  link?: string;
}>()

const naviTo = () => {
  uni.navigateTo({
    url: props.link || '',
  })
}
</script>

<style lang='scss' scoped>
.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16rpx 3%;
  border-bottom: 1rpx solid rgba($color: #000000, $alpha: 0.05);

  &-more {
    color: rgba($color: #000000, $alpha: 0.5);
    font-size: small;
    display: flex;
    align-items: center;
  }
}
</style>