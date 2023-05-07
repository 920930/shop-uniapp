<template>
	<LayoutHeader :value="search.value" back :height="bool ? 0 : 60" @search="searchFn" @updateBool="updateBool">
		<template #nav>
			<GoodSift v-if="!bool" />
		</template>
	</LayoutHeader>
	<template v-if="bool">
		<view class="search">
			<view class="search-top">
				<i class="iconfont icon-time search-top-icon"></i>
				<text class="search-top-title">最近搜索</text>
				<i class="iconfont icon-shanchu search-top-icon" @tap="delSearch"></i>
			</view>
			<view class="search-list">
				<text v-for="(item, i) in search.old" :key="i" @tap="searchFn(item)" class="search-list-item">{{ item }}</text>
			</view>
		</view>
		<view class="search">
			<view class="search-top">
				<i class="iconfont icon-faxian search-top-icon"></i>
				<text class="search-top-title">搜索发现</text>
				<i class="iconfont icon-eye search-top-icon"></i>
			</view>
			<view class="search-list">
				<text v-for="(item, i) in search.old" :key="i" @tap="searchFn(item)" class="search-list-item">{{ item }}</text>
			</view>
		</view>
	</template>
	<view v-else class="lister">
		<GoodLister />
		<GoodLister />
		<GoodLister />
		<GoodLister />
		<GoodLister />
		<GoodLister />
		<GoodLister />
	</view>
</template>

<script lang='ts' setup>
import { reactive, ref } from 'vue';
import LayoutHeader from '../../components/layout/header.vue';
import GoodLister from '../../components/good/lister.vue';
import GoodSift from '../../components/good/sift.vue';

const bool = ref(true)
const search = reactive<{ value: string; list: any[]; old: string[] }>({
	value: '',
	list: [],
	old: ['固态硬盘', '汤勺', '电脑', '男士斜挎包', '折叠床', '笔记本电脑', '家用饮水机', '哈哈']
})
const searchFn = (v: string) => {
	const sv = v.length ? v : '';
	search.value = sv;
	if (!sv.length) return uni.showToast({ title: '请输入商品名称' })
	bool.value = false
	if (!search.old.includes(sv)) {
		search.old.unshift(sv)
	} else {
		search.old = [sv, ...search.old.filter(item => !item.includes(sv))]
	}
	console.log('发起 http 请求' + sv)
}

const updateBool = () => {
	search.value = '';
	bool.value = true;
}
// 本地localstorage存储
const delSearch = () => search.old = [];
</script>

<style lang='scss' scoped>
.search {
	padding: 0 3%;
	margin: 10rpx 0 20rpx -20rpx;

	&-top {
		margin-left: 20rpx;
		margin-bottom: 30rpx;
		display: flex;
		align-items: center;

		&-title {
			flex: 1;
			margin-left: 10rpx;
		}

		&-icon {
			color: rgba($color: #000000, $alpha: 0.5);
		}
	}

	&-list {
		display: flex;
		flex-wrap: wrap;

		&-item {
			background-color: rgba($color: #000000, $alpha: 0.05);
			padding: 8rpx 10rpx;
			margin-left: 20rpx;
			margin-bottom: 20rpx;
			border-radius: 20rpx;
		}
	}
}

.lister {
	padding: 10rpx 0;
}
</style>