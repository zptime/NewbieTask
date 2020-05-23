<template>
  <section class="mescroll">
    <div class="fail">
      <img src="/images/common/default_fail.png" class="fail-icon">
      <span class="fail-text">加载失败，请检查网络哦~~~</span>
      <nuxt-link v-if="error.statusCode === 404" class="button" to="/">
        返回首页
      </nuxt-link>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.fail {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  .fail-icon {
    display: block;
    width: 2.04rem;
    height: 1.35rem;
    margin: 0 auto;
  }

  .fail-text {
    display: block;
    margin-top: 0.3rem;
    color: #848C94;
    white-space: nowrap;
  }

  .button {
    display: inline-block;
    margin: 0.6rem auto 0 auto;
    padding: 0 0.25rem;
    font-size: 0.32rem;
    border-radius: 0.06rem;
    line-height: 1.7;
    border: 1px solid #3A76CE;
    color: #3A76CE;
  }
}
</style>
