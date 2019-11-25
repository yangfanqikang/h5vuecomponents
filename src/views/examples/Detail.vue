<template>
  <div class="detail">
    <status-bar></status-bar>
    <van-nav-bar title="标题" left-text="返回" left-arrow>
      <van-icon name="search" slot="right" />
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: 'examples',
  methods: {
    onClickLeft () {
      this.$toast('返回')
    },
    onClickRight () {
      this.$toast('按钮')
    },
    clickCard () {
    },
    footerClick (types) {
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
