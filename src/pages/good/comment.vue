<template>
  <GoodHeader topBool fullstatus title="商品评论列表" />
  <template v-for="item in 10" :key="item">
    <Comment :len="item" />
    <Swpar />
  </template>
  <Cart />
</template>

<script lang='ts' setup>
import GoodHeader from '@/components/good/show/header.vue';
import Comment from '@/components/comment/index.vue';
import Swpar from '@/components/separator/index.vue';
import Cart from '@/components/cart/tab.vue';

</script>

<style lang='scss' scoped></style>