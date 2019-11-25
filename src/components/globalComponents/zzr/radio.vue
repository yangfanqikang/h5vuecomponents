<template>
  <div class="el-radio">
    <div>{{label}}</div>
    <div>
      <div class="selected"></div>
      <div class="unselected"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'radio',
  props: ['value', 'label'] // 获取父作用域中的value与label变量值
}
</script>

<style lang="scss" scoped>
.el-radio{
  padding: 0 15px;
  border-bottom: 1px solid #dddddd;
}
</style>
