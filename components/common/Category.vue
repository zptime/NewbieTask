<template>
  <div class="tab-category">
    <div
      v-for="(item, key) in categoryConfig"
      :key="key"
      class="tab-item"
      @click="goTarget(item)"
    >
      <img :src="item.image_url" class="icon">
      <div class="title">
        {{ item.title }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Category',
  props: {
    categoryConfig: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    goTarget (item) {
      alert(JSON.stringify(item))
    }
  }
}
</script>
<style lang="scss" scoped>
.tab-category {
    display: flex;
    justify-content: space-around;
    margin: 0.2rem 0.3rem;
    padding: 0.2rem 0;
    background-color: #fff;
    border-radius: 0.1rem;

    .tab-item {
      flex: 1;
      box-sizing: border-box;
      text-align: center;
      max-width: 33.3%;

      .icon {
        width: 0.88rem;
        height: 0.88rem;
        border-radius: 0.28rem;
        display: block;
        margin: 0 auto;
      }

      .title {
        font-size: 0.24rem;
        color: #00001B;
        font-weight: bold;
        margin-top: 0.22rem;
      }
    }
}
</style>
