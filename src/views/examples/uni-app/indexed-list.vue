<template>
  <uni-indexed-list :options="list" :show-select="false" @click="bindClick"/>
</template>

<script>
import airport from '@/components/globalComponents/uni-app/common/airport.js'
// import uniIndexedList from '@/components/uni-app/uni-indexed-list.vue'

export default {
  // components: {
  //   uniIndexedList
  // },
  data () {
    return {
      list: airport.list
    }
  },
  methods: {
    bindClick (e) {
      console.log('点击item，返回数据' + JSON.stringify(e))
    }
  }
}
</script>

<style scoped>
  page {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background-color: #efeff4
  }

  view {
    font-size: 28px;
    line-height: inherit
  }

  .example {
    padding: 0 30px 30px
  }

  .example-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 32px;
    color: #464e52;
    padding: 30px 30px 30px 50px;
    margin-top: 20px;
    position: relative;
    background-color: #fdfdfd;
    border-bottom: 1px #f5f5f5 solid
  }

  .example-title__after {
    position: relative;
    color: #031e3c
  }

  .example-title:after {
    content: '';
    position: absolute;
    left: 30px;
    margin: auto;
    top: 0;
    bottom: 0;
    width: 6px;
    height: 32px;
    background-color: #ccc
  }

  .example .example-title {
    margin: 40px 0
  }

  .example-body {
    padding: 30px;
    background: #fff
  }

  .example-info {
    padding: 30px;
    color: #3b4144;
    background: #fff
  }
</style>
