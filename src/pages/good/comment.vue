<template>
  <GoodHeader topBool fullstatus title="商品评论列表" />
  <Comment />
  <Comment />
  <Comment />
  <Comment />
  <Cart />
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import GoodHeader from '@/components/good/show/header.vue';
import Cart from '@/components/cart/tab.vue';
import Comment from '@/components/comment/index.vue';

</script>

<style lang='scss' scoped></style>