<template>
  <div class="HeaderNav">
    <header>
      <status-bar></status-bar>
      <div class="header-navbar">
        <div @click="() => this.$router.back()"><i class="iconfont iconback"></i></div>
        <div class="header-title">{{title}}</div>
        <div>
          <div>{{menu}}</div>
          <slot></slot>
        </div>
      </div>
    </header>
    <div class="header-bottom"></div>
  </div>
</template>

<script>
export default {
  name: 'HeaderNav',
  props: {
    title: {
      type: String,
      default: '导航标题',
      required: true
    },
    menu: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .HeaderNav{
    header{
      width: 100vw;
      position: fixed;
      z-index: 9999;
      left: 0;
      top: 0;
      .header-navbar{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
        background-color: #fff;
        border-bottom: 1px solid #dddddd;
        height: 49px;
        >.header-title{
          font-size: 18px;
        }
      }
    }
    .header-bottom{
      height: 71px;
    }
  }

</style>
