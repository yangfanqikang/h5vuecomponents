<template>
  <div class="page-list">
    <div class="page-zzr-header">
      <div v-for="(item, index) in ['数据展示', '数据录入', '操作反馈', '导航组件', '布局组件', '基础组件']" :key="item + index" @click="clickUniHeader(index)">{{item}}</div>
    </div>
    <div class="page-zzr-content">
      <div v-show="currentIndex === index2" v-for="(li, index2) in ['数据展示', '数据录入', '操作反馈', '导航组件', '布局组件', '基础组件']" :key="li + index2">
        <div class="page-zzr-li" v-for="(li, indexli) in nutList" :key="indexli" @click="clickUniUrl(li)">{{li.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-list',
  props: {
    headerData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
