<template>
  <div class="model-wrap" @click="onClick">
    <img src="/images/icon_default.png" class="icon">
    <div v-if="data.name" class="phone">
      {{ data.name }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserInfo',
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {
    onClick () {
      this.$emit('on-click', this.data)
    }
  }
}
</script>

<style lang="scss" scoped>
.model-wrap{
  background-color: #3A76CE;
  height: 2.94rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url("/images/icon_login.jpg");
  background-size: 100% 2.94rem;
  background-repeat: no-repeat;

  .icon{
    display: block;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    border: 1px solid #fff;
  }

  .phone{
    font-size: 0.36rem;
    color: #ef2680;
    line-height: 1;
    margin-top: 0.32rem;
  }
}
</style>
