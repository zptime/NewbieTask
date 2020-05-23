<template>
  <section v-if="headerConfig.showHeader" class="header-wrap">
    <slot name="left">
      <div v-if="headerConfig.showBack" class="header-icon header-back" @click="goBack" />
      <div v-if="headerConfig.showClose" class="header-icon header-close" @click="goClose" />
    </slot>
    <slot name="middle">
      <h2 v-if="dynamicTitle.state" class="header-title">
        {{ dynamicTitle.name }}
      </h2>
      <h2 v-else class="header-title">
        {{ headerConfig.title }}
      </h2>
    </slot>
    <slot name="right" />
  </section>
</template>

<script>
export default {
  name: 'Header',
  props: {
    headerConfig: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    dynamicTitle () {
      return this.$store.state.dynamicTitle
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    goClose () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="scss" scoped>
.header-wrap {
  position: relative;
  z-index: 499;
  height: 0.88rem;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 0 0.3rem;

  .header-icon {
    width: 0.44rem;
    height: 0.44rem;
    position: absolute;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .header-back {
    left: 0.3rem;
    width: 0.44rem;
    height: 0.44rem;

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-45deg);
      width: 0.24rem;
      height: 0.24rem;
      border: 2px solid;
      border-color: rgba(0, 0, 0, 1) transparent transparent rgba(0, 0, 0, 1);
    }
  }

  .header-close {
    left: 0.8rem;
    width: 0.44rem;
    height: 0.44rem;
    transform: rotate(-45deg);

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: rgba(0, 0, 0, 1);
    }
    &::before {
      width: 2px;
      height: 100%;
    }
    &::after {
      width: 100%;
      height: 2px;
    }
  }

  .header-title {
    margin: 0 auto;
    height: 0.88rem;
    line-height: 0.88rem;
    text-align: center;
    font-size: 0.36rem;
    color: #00001B;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: bold;
  }

  .header-opt{
    position: absolute;
    right: 0.3rem;
    font-size: 0.3rem;
    color: #ef2680;
  }
}
</style>
