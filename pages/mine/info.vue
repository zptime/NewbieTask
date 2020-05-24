<template>
  <div class="model-wrap mescroll">
    <div class="model-item">
      这是登录后才可以看到的个人信息哟
    </div>
    <div class="common-submit item-btn" @click="logout">
      退出登录
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted () {},
  methods: {
    logout () {
      this.$axios.post('/api/logout').then((res) => {
        this.$setStorage('loginState', false)
        this.$setStorage('user', '')
        alert(res)
        this.$router.go(-1) // 返回上一页
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.model-wrap{
  background-color: #fff;
  padding-top: 0.48rem;

  .model-item{
    font-size: 0.5rem;
    padding: 0.3rem;
  }
  .item-btn{
    margin-top: 1rem;
    margin-left: 0.6rem;
    margin-right: 0.6rem;
  }
}
</style>
