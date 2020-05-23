<template>
  <div class="main-container">
    <user-info-component :data="userInfo" class="spacing" @on-click="goTarget" />
    <option-component :data="optionConfig" class="spacing" />
  </div>
</template>

<script>
import UserInfoComponent from '~/components/mine/UserInfo'
import OptionComponent from '~/components/mine/Option'
export default {
  components: {
    UserInfoComponent,
    OptionComponent
  },
  data () {
    return {
      userInfo: {},
      optionConfig: [
        { icon: '/images/icon_help.png', title: '机票订单', path: '/mine/info', isLogin: true },
        { icon: '/images/icon_person.png', title: '常用乘机人', path: '/mine/info', isLogin: true },
        { icon: '/images/icon_address.png', title: '常用邮寄地址', path: '/mine/info', isLogin: true },
        { icon: '/images/icon_contact.png', title: '联系客服', path: '/mine/setting' },
        { icon: '/images/icon_about.png', title: '关于我们', path: '/mine/setting' }
      ]
    }
  },
  mounted () {
    this.userInfo = this.$getStorage('user') ? JSON.parse(this.$getStorage('user')) : {}
  },
  methods: {
    goTarget (user) {
      if (this.userInfo && this.userInfo.id) {
        this.$router.push('/mine/info')
      } else {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
