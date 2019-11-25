<template>
    <div class="status-bar">
      <img src="../../assets/img/Status-Bar-Dark.png" alt="">
    </div>
</template>

<script>
export default {
  name: 'StatusBar',
  mounted () {
    // 接收来自APP传过来的状态栏高度
    document.documentElement.style.setProperty('--status-bar', 44 + 'px')
  }
}
</script>
<style>
  :root{
    --status-bar: 0;
  }
.status-bar{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--status-bar, 44px);
}
  .status-bar>img{
    width: calc(100% - 30px);
  }
</style>
