<template>
  <div class="marquee-box">
    <div ref="out" class="marquee-content">
      <p :class="run ? speed : ''">
        <span ref="in" class="text1">{{ content }}</span>
        <span v-if="showTwo || run" class="text2">{{ content }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueMarquee',
  props: {
    content: {
      default: '暂无内容',
      type: String
    },
    speed: {
      default: 'middle',
      type: String
    },
    showTwo: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      run: false,
      pWidth: ''
    }
  },
  watch: {
    content () {
      const _this = this
      setTimeout(() => {
        _this.$nextTick(() => {
          const out = _this.$refs.out.clientWidth
          const _in = _this.$refs.in.clientWidth
          _this.pWidth = 2 * _in
          _this.run = _in > out
        })
      }, 0)
    }
  },
  mounted () {
    const _this = this
    this.$nextTick(() => {
      const out = _this.$refs.out.clientWidth
      const _in = _this.$refs.in.clientWidth
      _this.run = _in > out
    })
  }
}
</script>

<style scoped>
.marquee-box {
  height: 0.8rem;
  line-height: 0.8rem;
  color: #848c94;
  font-size: 0.24rem;
}
.marquee-content {
  overflow: hidden;
  width: 100%;
}
.marquee-content p {
  display: inline-block;
  white-space: nowrap;
  margin: 0;
  font-size: 0;
}
.marquee-content span {
  display: inline-block;
  white-space: nowrap;
  padding-right: 2rem;
  font-size: 0.24rem;
}
.quick >span {
  -webkit-animation: marquee 10s linear infinite;
  animation: marquee 10s linear infinite;
}
.middle >span{
  -webkit-animation: marquee 20s linear infinite;
  animation: marquee 20s linear infinite;
}
.slow >span{
  -webkit-animation: marquee 40s linear infinite;
  animation: marquee 40s linear infinite;
}
@-webkit-keyframes marquee {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(-50%, 0, 0);
  }
}
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
