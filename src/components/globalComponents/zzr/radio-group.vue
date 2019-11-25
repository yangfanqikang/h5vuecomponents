<template>
  <div class="el-radio-group">
    <radio :value="item.value" :label="item.label" v-for="(item, index) in groupData" :key="index"></radio>
  </div>
</template>
<script>
export default {
  name: 'radio-group',
  props: ['groupData', 'name']
}
</script>
<style lang="scss" scoped>

</style>
