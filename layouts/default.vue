<template>
  <div ref="appWrap" class="app-wrap">
    <header-component :header-config="curHeaderConfig" />
    <nuxt class="main-bg" />
    <menu-component :menu-config="curMenuConfig" />
    <div class="fix-content">
      <img src="/images/icon_add_pk.png" class="fix-img">
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
    }
  }
}
</script>

<style lang="scss">
@charset "utf-8";
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{margin:0;padding:0;}
body,button,input,select,textarea{font:400 .3rem/1.5 -apple-system, BlinkMacSystemFont, 'PingFang SC','Helvetica Neue',STHeiti,'Microsoft Yahei',Tahoma,Simsun,sans-serif;}
article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section,iframe{display:block;}
h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:500;word-break: break-word;}
address,cite,dfn,em,var,i{font-style:normal;font-weight:400;}
html,body{height:100%;}
ul,ol{list-style:none;}
pre{white-space:pre-wrap;word-break: break-word;}
p {word-break: break-word;}
img{max-width:100%;height:auto;}
a{text-decoration:none;}
iframe,fieldset,img,button,input{border:0;}
button,input[type='button'], input[type='submit']{line-height:normal;}
table{border-collapse:collapse;border-spacing:0;}
input,textarea{border:0;background:transparent;box-sizing:border-box;outline:0;-webkit-appearance:none;border-radius:0;}
*,*:before,*:after {box-sizing: inherit;margin: 0;}
a:focus,a:active {outline: none;}
a,a:focus,a:hover {cursor: pointer;color: inherit;text-decoration: none;}
div:focus {outline: none;}

/* layouts */
#__nuxt,
#__layout{height:100%;}
.app-wrap{display:flex;flex-direction:column;height:100%;}
/* mescroll */
.mescroll{box-sizing:border-box;flex: 1;width:100%;height:100%;overflow-y:auto;} /* width height overflow 兼容未加载mescroll依赖css的页面 */
.mescroll-upwarp{display: none !important;}
.mescroll-upwarp .bottm-tip{font-size:.24rem;}

body {
  overflow-x: hidden;
  -webkit-text-size-adjust: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 1);
  -webkit-font-smoothing: antialiased;
  user-select: none;
  font-size: 0.24rem;
  color:#00001B;
}

.main-bg{
  background-color: #f7f7fa;
}
.main-container {
  display: flex;
  flex-direction: column;
  flex: 1;
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

.common-submit {
  margin: 0 0.4rem 0.2rem;
  height: 0.96rem;
  line-height: 0.96rem;
  font-size: 0.36rem;
  color: #fff;
  background-color: #ef2680;
  border-radius: 0.48rem;
  font-weight: bold;
  text-align: center;
}
</style>
