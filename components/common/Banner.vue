<template>
  <div v-if="banners && banners.length > 0" ref="mySwiper" v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div v-for="(banner, key) in banners" :key="key" class="swiper-slide">
        <img :data-src="banner.image_url" class="swiper-lazy">
        <div class="swiper-lazy-preloader" />
      </div>
    </div>
    <div v-if="banners.length > 1" class="swiper-pagination swiper-pagination-bullets swiper-pagination-white" />
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    banners: {
      type: Array,
      default: () => {
        return []
      }
    },
    utmSource: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      defaultSwiperOption: {
        loop: true,
        autoplay: true,
        lazy: true,
        disableOnInteraction: false,
        observer: true,
        observeParents: true,
        pagination: {
          el: '.swiper-pagination'
        },
        on: {
          slideChange () {
            this.update()
          },
          click: () => {
            // loop: true  点击不能直接绑定在dom上，需要使用swiper click api
            const swiper = this.$refs.mySwiper.swiper
            this.goTarget(this.banners[swiper.realIndex])
          }
        }
      }
    }
  },
  computed: {
    swiperOption () {
      const newSwiperOption = {}
      if (this.banners && this.banners.length === 1) {
        newSwiperOption.loop = false
        newSwiperOption.resistanceRatio = 0
        newSwiperOption.pagination = {}
      }
      return Object.assign({}, this.defaultSwiperOption, newSwiperOption)
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
.swiper-slide,
.swiper-slide img {
    width: 100%;
    height: 100%;
    border-radius: 0.28rem;
}
.swiper-slide .swiper-lazy {
    display: none;
}
.swiper-slide .swiper-lazy-loaded {
    display: block;
}
.swiper-container-horizontal > .swiper-pagination-bullets,
.swiper-pagination-custom,
.swiper-pagination-fraction {
    bottom: 0.1rem;
}
.swiper-container-horizontal
    > .swiper-pagination-bullets
    .swiper-pagination-bullet {
    margin: 0 0.05rem;
    background: #fff;
    opacity: 0.5;
}
.swiper-lazy-preloader {
    width: 0.42rem;
    height: 0.42rem;
    margin-top: -0.21rem;
    margin-left: -0.21rem;
}
</style>
