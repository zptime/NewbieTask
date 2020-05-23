<template>
  <!--mescroll滚动区域的基本结构-->
  <mescroll-vue id="mescroll" ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit">
    <!--内容区域-->
    <slot />
  </mescroll-vue>
</template>

<script>
import MescrollVue from 'mescroll.js/mescroll.vue'

export default {
  name: 'Mescroll',
  components: {
    MescrollVue
  },
  props: {
    downConfig: {
      type: Object,
      default: () => {}
    },
    upConfig: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      mescroll: null, // mescroll实例对象
      defaultMescrollDown: {
        // 下拉刷新的配置
        auto: true, // 是否在初始化完毕之后自动执行一次下拉刷新的回调 callback
        callback: this.downCallback,
        textInOffset: 'pull down to refresh', // 下拉刷新
        textOutOffset: 'release update', // 释放更新
        textLoading: 'loading' // 加载中
      },
      defaultMescrollUp: {
        // 上拉加载的配置
        use: false, // 是否启用上拉加载
        auto: false,
        callback: this.upCallback,
        page: {
          num: 0, // 当前页 默认0,回调之前会加1; 即callback(page)会从1开始
          size: 10 // 每页数据条数,默认10
        },
        htmlNodata: '<p class="upwarp-nodata">-- END --</p>',
        noMoreSize: 5, // 列表已无数据时,可设置列表的总数量要大于5才显示无更多数据
        empty: {
          // 列表第一页无任何数据时,显示的空提示布局; 需配置warpId才显示
          warpId: 'mescroll', // 父布局的id (1.3.5版本支持传入dom元素)
          icon: null, // 图标，默认null,支持网络图
          tip: '暂无相关数据~' // 提示
        }
      },
      dataList: [] // 列表数据
    }
  },
  computed: {
    mescrollDown () {
      return Object.assign(this.defaultMescrollDown, this.downConfig)
    },
    mescrollUp () {
      return Object.assign(this.defaultMescrollUp, this.upConfig)
    }
  },
  // 如果没有配置回到顶部按钮或isBounce,则beforeRouteEnter不用写
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteEnter方法
      // 进入路由时,滚动到原来的列表位置,恢复回到顶部按钮和isBounce的配置
      vm.$refs.mescroll && vm.$refs.mescroll.beforeRouteEnter()
    })
  },
  // 如果没有配置回到顶部按钮或isBounce,则beforeRouteLeave不用写
  beforeRouteLeave (to, from, next) {
    // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteLeave方法
    // 退出路由时,记录列表滚动的位置,隐藏回到顶部按钮和isBounce的配置
    this.$refs.mescroll && this.$refs.mescroll.beforeRouteLeave()
    next()
  },
  beforeDestroy () {
    if (this.mescroll) {
      this.mescroll.destroy()
      this.mescroll = null
    }
  },
  methods: {
    // mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit (mescroll) {
      // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
      this.mescroll = mescroll
    },
    downCallback (mescroll) {
      this.$emit('down-callback', mescroll)
    },
    // 上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
    upCallback (page, mescroll) {
      this.$emit('up-callback', page, mescroll)
    }
  }
}
</script>

<style scoped></style>
