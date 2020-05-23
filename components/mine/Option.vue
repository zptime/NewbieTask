<template>
  <div class="model-wrap">
    <div
      v-for="(item, key) in data"
      :key="key"
      class="model-item"
      @click="goTarget(item)"
    >
      <img :src="item.icon" class="icon">
      <div class="title">
        {{ item.title }}
      </div>
      <img src="/images/icon_more.png" class="more">
    </div>
  </div>
</template>
<script>
export default {
  name: 'Option',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    doAction: {
      type: Function,
      default: () => {
        return () => {}
      }
    }
  },
  methods: {
    goTarget (item) {
      if (item.path) {
        const loginState = this.$getStorage('loginState')
        if (item.isLogin && !(loginState && loginState !== 'false')) {
          this.$router.push('/login')
        } else {
          this.$router.push(item.path)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.model-wrap {
  background-color: #fff;
  margin-top: 0.2rem;

  .model-item {
    display: flex;
    align-items: center;
    height: 0.96rem;
    padding: 0 0.4rem;

    .icon {
      width: 0.4rem;
      height: 0.4rem;
      display: block;
      margin-right: 0.24rem;
    }

    .title {
      font-size: 0.3rem;
      color: #00001B;
      flex: 1;
    }

    .more{
      width: 0.32rem;
      height: 0.32rem;
      display: block;
    }
  }
}
</style>
