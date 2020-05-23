<template>
  <mescroll-component @down-callback="downCallback">
    <div class="main-content">
      <div class="main-top">
        <div class="horizontal-padding">
          <banner-component
            v-if="topBanner.length > 0"
            :banners="topBanner"
            class="banner"
          />
        </div>
        <scroll-component
          :scroll-data="scrollData"
          class="scroll-marquee"
        />
        <category-component
          v-if="categoryData.length > 0"
          :category-config="categoryData"
        />
        <products-component v-if="productList.length > 0" :list-data="productList" />
      </div>
    </div>
  </mescroll-component>
</template>

<script>
import BannerComponent from '~/components/common/Banner'
import CategoryComponent from '~/components/common/Category'
import ScrollComponent from '~/components/common/Scroll'
import ProductsComponent from '~/components/product/ListProduct'
import MescrollComponent from '~/components/common/Mescroll'

export default {
  components: {
    BannerComponent,
    CategoryComponent,
    ScrollComponent,
    ProductsComponent,
    MescrollComponent
  },
  data () {
    return {
      topBanner: [], // 广告栏
      categoryData: [], // 分类数据
      scrollData: [], // 走马灯数据
      productList: [] // 产品大全
    }
  },
  mounted () {
    this.categoryData = [
      { title: '值机选座', image_url: '/images/icon_checkin.png' },
      { title: '常用乘机人', image_url: '/images/icon_passenger.png' },
      { title: '我的订单', image_url: '/images/icon_order.png' }
    ]
    this.topBanner = [
      { title: '第一张', image_url: '/images/icon_login.jpg' },
      { title: '第二张', image_url: '/images/icon_logout.jpg' },
      { title: '第三张', image_url: '/images/icon_login.jpg' }
    ]
    this.productList = [
      { id: 1, startPoint: '北京', endPoint: '武汉', startTime: '6月4日', class: '经济舱', money: 270, slogan: '航线精选', icon: '//dimg03.c-ctrip.com/images/220b0m000000dethwB124_C_200_150.jpg' },
      { id: 2, startPoint: '北京', endPoint: '青岛', startTime: '6月15日', class: '高等舱', money: 280, slogan: '历史超低价', icon: '//dimg03.c-ctrip.com/images/100m0a0000004cubrC2BA_C_200_150.jpg' },
      { id: 3, startPoint: '北京', endPoint: '宁波', startTime: '6月5日', class: '普通舱', money: 288, slogan: '近期好价', icon: '//dimg08.c-ctrip.com/images/10091f000001gsmlz5207_C_224_126_Q90_Mtg_7.jpg' },
      { id: 4, startPoint: '北京', endPoint: '重庆', startTime: '6月23日', class: '经济舱', money: 289, slogan: '刚需低价', icon: '//dimg06.c-ctrip.com/images/10031f000001gryfl1032_C_224_126_Q90_Mtg_7.jpg' },
      { id: 5, startPoint: '北京', endPoint: '南宁', startTime: '6月25日', class: '普通舱', money: 265, slogan: '航线精选', icon: '//dimg08.c-ctrip.com/images/10031f000001gs1m3B4A6_C_224_126_Q90_Mtg_7.jpg' }
    ]
  },
  methods: {
    downCallback (mescroll) {
    }
  }
}
</script>

<style lang="scss" scoped>
.main-content {
  .horizontal-padding {
    padding-left: 0.3rem;
    padding-right: 0.3rem;
  }

  .main-top {
    .banner {
      width: 100%;
      height: 1.88rem;
      overflow: hidden;
      position: relative;
      margin-top: 0.2rem;
    }
    .scroll-marquee{
      margin: 0.2rem 0.3rem 0;
      border-radius: 0.1rem;
    }
  }

  .product-list{
    margin-top: 0.2rem;
  }
}
</style>
