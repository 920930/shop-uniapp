import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
interface IGood {
  id: number;
  img: string;
  title: string;
  price: number;
  check: boolean;
}

export const goodCart = defineStore('cart', () => {
  const lists = ref<IGood[]>([
    {id: 1, title: '小米1.5匹 新一级能耗 变频冷热', price: 80.23, check: false, img: 'https://www.zcfsjt.com/storage/images/2023/0420/1_20230420113702_DAKN27gKjc.jpg'},
    {id: 2, title: '小米1.5匹 新一级能耗 变频冷热', price: 70.23, check: true, img: 'https://www.zcfsjt.com/storage/images/2023/0420/1_20230420113702_DAKN27gKjc.jpg'}
  ]);
  const total = computed(() => lists.value.reduce((sup, sub) => sup += sub.check ? sub.price : 0, 0))
  const isAllCheck = computed(() => lists.value.every(item => item.check))

  const toggleCheck = (e: any, id?: number) => {
    if(id){
      const one = lists.value.find(item => item.id == id)
      one && (one.check = !one.check)
    }else{
      const bool = e.detail.value.length ? true : false;
      lists.value.forEach(item => item.check = bool)
    }
  }
  const removeCart = (id: number) => lists.value = lists.value.filter(item => item.id != id);
  
  return {
    lists,
    total,
    isAllCheck,
    removeCart,
    toggleCheck
  }
})