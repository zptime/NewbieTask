<template>
  <section v-if="menuConfig.showMenu" class="menu-wrap">
    <ul class="menu-list">
      <li
        v-for="(item, key) in menuConfig.item"
        :key="key"
        :class="{ current: key === menuConfig.currentIndex }"
        class="list-item"
        @click="changeMenu(key, item.url)"
      >
        <img :src="key === menuConfig.currentIndex ? item.iconCurrent : item.icon" class="img">
        <span class="name">{{ item.name }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    menuConfig: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {
    changeMenu (key, url) {
      this.$store.commit('menuConfig', {
        currentIndex: key
      })
      this.$router.push(url)
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-wrap {
  position: relative;
  height: 0.98rem;
  z-index: 499;
  background-color: #fff;
  border-top: 1px solid #eee;

  .menu-list {
    display: flex;
    height: 0.98rem;

    .list-item {
      flex: 1;
      color: #C0C6CC;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .img {
        display: block;
        width: 0.48rem;
        height: 0.48rem;
        margin-bottom: 0.08rem;
      }

      .name {
        display: block;
        text-align: center;
        font-size: 0.24rem;
        line-height: 1;
      }
    }

    .current {
      color: #ef2680;
    }
  }
}
</style>
