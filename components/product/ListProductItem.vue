<template>
  <div class="product-item list-item" @click="onClick">
    <div class="item-img" :style="{ backgroundImage: 'url('+item.icon+')' }">
      <span class="item-slogan">{{ item.slogan }}</span>
    </div>
    <div class="item-desc">
      <div class="item-point">
        {{ item.startPoint }} 至 {{ item.endPoint }}
      </div>
      <div class="item-time">
        {{ item.startTime }}出发
      </div>
      <div class="item-class">
        {{ item.class }}
      </div>
      <div class="item-detail">
        <div class="item-title">
          ￥ <span class="item-money">{{ item.money }}</span>
        </div>
        <img class="item-search" src="/images/icon_search.png" alt="搜索">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ListProductItem',
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {
    onClick () {
      this.$emit('on-click', this.item)
    }
  }
}
</script>
<style lang="scss" scoped>
.product-item {
  display: block;
  margin-bottom: 0.2rem;
  background-color: #fff;
  border-radius: 0.12rem;
  width: 49%;
  overflow: hidden;

  .item-img {
    width: 100%;
    height: 2rem;
    background-repeat: no-repeat;
    background-position: center center;
    background-color: #000;
    position: relative;

    .item-slogan{
      position: absolute;
      bottom: 0.2rem;
      left: 0.2rem;
      color: #fff;
      padding: 0.05rem 0.08rem;
      border-radius: 0.1rem;
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
  .item-desc {
    padding: 0.15rem 0.2rem;
  }

  .item-point {
    font-size: 0.28rem;
    color: #00001B;
    font-weight: bold;
  }
  .item-time {
    font-size: 0.24rem;
    color: #c77700;
    margin: 0.1rem 0;
  }
  .item-class {
    font-size: 0.24rem;
    color: #848C94;
  }
  .item-detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.15rem;

    .item-title {
      font-size: 0.24rem;
      color: #fc6025;
    }
    .item-money {
      font-size: 0.32rem;
    }
    .item-search {
      width: 0.3rem;
      height: 0.3rem;
    }
  }
}
</style>
