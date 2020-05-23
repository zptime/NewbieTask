<template>
  <div class="scroll-wrap">
    <img src="/images/icon_msg.png" class="scroll-icon">
    <div class="scroll-text">
      <vue-marquee :content="marqueeTips" :show-two="false" speed="slow" class="marquee-wrap" />
    </div>
  </div>
</template>

<script>
import VueMarquee from './Marquee.vue'
export default {
  name: 'Marquee',
  components: {
    VueMarquee
  },
  props: {
    scrollData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    marqueeTips () {
      const tips = '如何管理页面/组件的状态；理解Vuex的设计理念，并且使用Vuex；理解浏览器 history 概念和特性（包括HTML5的特性）；学会使用Vue-Router的 Hash 模式 和 History 模式。'
      return tips
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll-wrap{
    background-color: rgba(58, 118, 206, 0.1);
    height: 0.8rem;
    padding: 0 0.3rem;
    display: flex;
    align-items: center;

    .scroll-icon{
      width: 0.48rem;
      height: 0.48rem;
      margin-right: 0.1rem;
    }
    .scroll-text{
      flex: 1;
      font-size: 0.24rem;
      color: #848C94;
      overflow: hidden;
    }
}
</style>
