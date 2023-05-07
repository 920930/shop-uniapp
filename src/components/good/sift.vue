<template>
  <view class="sift">
    <view class="sift-item" @tap="sortFn(i)" v-for="(item, i) in lists" :key="i">
      <text :class="{ 'sift-item-active': active.index === i }">{{ item.title }}</text>
      <view class="sift-item-icon" v-if="item.icons">
        <text v-for="(ic, c) in item.icons" :key="c"
          :class="[ic, { 'sift-item-active': active.icon === c && active.index === i }]" class="iconfont"></text>
      </view>
    </view>
  </view>
</template>

<script lang='ts' setup>
import { reactive } from 'vue';
const lists = [
  { title: '综合' },
  { title: '销量' },
  { title: '价格', icons: ['icon-sort-up sift-item-icon-up', 'icon-sort-down sift-item-icon-down'] },
  { title: '品牌' },
  { title: '筛选' },
]
const active = reactive({
  index: 0,
  icon: 0,
});
const sortFn = (num: number) => {
  if (active.index === num) {
    active.icon = active.icon === 0 ? 1 : 0
  } else {
    active.index = num;
    active.icon != 0 && (active.icon = 0)
  }

}
</script>

<style lang='scss' scoped>
.sift {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 66rpx;
  background-color: white;
  border-bottom: 1rpx solid rgba($color: #000000, $alpha: 0.05);

  &-item {
    display: flex;

    &-active {
      color: rgba($color: red, $alpha: 0.8);
    }

    &-icon {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 3rpx;
      color: rgba($color: #000000, $alpha: 0.6);

      &-up {
        font-size: 12px;
        margin-bottom: -12rpx;
      }

      &-down {
        font-size: 12px;
      }
    }

  }
}
</style>