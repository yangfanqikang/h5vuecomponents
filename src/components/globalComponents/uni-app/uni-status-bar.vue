<template>
  <div class="uni-status-bar">
    <slot/>
  </div>
</template>

<script>
// var statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px'
export default {
  name: 'UniStatusBar'
}
</script>

<style>
  .uni-status-bar {
    display: block;
    width: 100%;
    height: 20px;
    height: var(--status-bar, 44px);
  }
</style>
