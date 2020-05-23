<template>
  <div class="mescroll login-wrap">
    <div class="model-wrap">
      <div class="model-item">
        <div class="item-text">
          手机号
        </div>
        <div class="item-value">
          <span class="item-color">中国</span>
          <input v-model="phone" class="item-input item-input-exp" type="number">
        </div>
      </div>
      <div class="model-item">
        <div class="item-text">
          验证码
        </div>
        <div class="item-value">
          <input v-model="code" class="item-input" type="password" placeholder="请输入6位验证码" maxlength="6">
        </div>
      </div>
      <div class="model-btn">
        <div class="submit-forget">
          手机号和验证码均为123456
        </div>
        <div :class="{'btn-active': phoneState && codeState}" class="common-submit submit-btn" @click="doLogin">
          登录/注册
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      phone: '',
      phoneState: false,
      code: '',
      codeState: false
    }
  },
  watch: {
    phone (val, oldVal) {
      this.phoneState = val === '123456'
    },
    code (val, oldVal) {
      this.codeState = val === '123456'
    }
  },
  methods: {
    doLogin () {
      if (this.phoneState && this.codeState) {
        this.$setStorage('loginState', true)
        const userInfo = {
          id: 2916,
          name: '航班管家',
          phone: this.phone,
          avatar: 'download.menggaliuang.io/picture/20200119/eebf2b4dea6eed4f18582de8ab38be76.jpeg'
        }
        this.$setStorage('user', JSON.stringify(userInfo))
        this.$router.go(-1) // 返回上一页
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login-wrap{
  background-color: #fff;
}
.model-wrap{
  .model-item{
    margin: 0 0.6rem;
    overflow: hidden;

    .item-text{
      font-size: 0.3rem;
      color: #00001B;
      margin-bottom: 0.24rem;
      margin-top: 0.4rem;
    }
    .item-value{
      display: flex;
      align-items: center;
      border: 1px solid #eee;
      border-radius: 0.12rem;
      height: 0.96rem;
      font-size: 0.3rem;

      .item-color{
        margin-left: 0.2rem;
        color: #00001B;
        font-weight: bold;
      }
      .item-input{
        flex: 1;
        height: inherit;
        color: #00001B;
        font-weight: bold;
        padding: 0 0.2rem;

        &::placeholder {
          color: #C0C6CC;
          font-size: 0.24rem;
          font-weight: normal;
        }
      }
      .item-input-exp{
        width: 0.3rem;
      }
    }
  }
  .model-btn{
    .submit-forget{
      font-size: 0.28rem;
      color: #aaa;
      margin: 0.3rem 0.6rem 1rem 0.4rem;
      text-align: right;
    }
    .submit-btn{
      margin: 0 0.6rem 0.4rem 0.6rem;
      opacity: 0.5;
    }
    .btn-active{
      opacity: 1;
    }
  }
}
</style>
