<template>
  <div ref="appWrap" class="app-wrap">
    <header-component :header-config="curHeaderConfig" />
    <nuxt class="main-bg" />
    <menu-component :menu-config="curMenuConfig" />
    <div class="fix-content" @click="goShopping">
      <img src="/images/icon_anchor.png" class="fix-img">
    </div>
  </div>
</template>

<script>
import { setHeaderConfigAction, setMenuConfigAction } from '../assets/js/setAppConfig.js'
import HeaderComponent from '~/components/common/Header'
import MenuComponent from '~/components/common/Menu'
export default {
  components: {
    HeaderComponent,
    MenuComponent
  },
  data () {
    return {
      curHeaderConfig: {},
      curMenuConfig: {}
    }
  },
  computed: {
    headerConfig () {
      return this.$store.state.headerConfig
    },
    menuConfig () {
      return this.$store.state.menuConfig
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route (val, oldVal) {
      this.setConfig()
    }
  },
  mounted () {
    this.setConfig()
  },
  methods: {
    setConfig () {
      this.setHeaderConfig(this.$route) // 设置header信息
      this.setMenuConfig(this.$route) // 设置menu菜单
    },
    setHeaderConfig (value) {
      const config = setHeaderConfigAction(value.name) // 执行配置头部方法
      // 将新值和默认值合并到空对象中 解决直接修改子属性组件不更新问题
      this.curHeaderConfig = Object.assign({}, this.headerConfig, config)
    },
    setMenuConfig (value) {
      const config = setMenuConfigAction(value.name) // 执行配置菜单方法
      this.curMenuConfig = Object.assign({}, this.menuConfig, config)
    },
    goShopping () {
      alert('哈哈哈')
    }
  }
}
</script>

<style lang="scss">
.main-bg{
  background-color: #f7f7fa;
}
.fix-content {
  position: fixed;
  z-index: 20;
  bottom: 1.2rem;
  right: 0.2rem;

  .fix-img {
    width: 1.4rem;
    height: 1.4rem;
  }
}
</style>
