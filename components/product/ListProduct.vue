<template>
  <div class="list-product">
    <item-component
      v-for="(item, index) in listData"
      :key="item.id"
      :item="item"
      :class="{ 'border-bottom-line': index !== listData.length-1 }"
      @on-click="goTarget"
    />
  </div>
</template>
<script>
import ItemComponent from '~/components/product/ListProductItem'
export default {
  name: 'ListProduct',
  components: {
    ItemComponent
  },
  props: {
    listData: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    goTarget (item, key) {
      alert('进入详情页，哈哈哈')
    }
  }
}
</script>
<style lang="scss" scoped>
.list-product{
  margin: 0 0.3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
}
</style>
