<template>
  <div>
    <div class="uni-padding-wrap">
      <button class="btn" type="primary" @click="switchBtn(0)">切换菜单({{ directionStr }}显示)</button>
      <button class="btn" type="primary" @click="switchBtn('left', 'bottom')">左下角显示</button>
      <button class="btn" type="primary" @click="switchBtn('right', 'bottom')">右下角显示</button>
      <button class="btn" type="primary" @click="switchBtn('left', 'top')">左上角显示</button>
      <button class="btn" type="primary" @click="switchBtn('right', 'top')">右上角显示</button>
    </div>
    <uni-fab ref="fab" :pattern="pattern" :content="content" :horizontal="horizontal" :vertical="vertical"
             :direction="direction" @trigger="trigger"/>
  </div>
</template>

<script>
import uniFab from '@/components/globalComponents/uni-app/uni-fab.vue'

export default {
  components: {
    uniFab
  },
  data () {
    return {
      title: 'uni-fab',
      directionStr: '垂直',
      horizontal: 'left',
      vertical: 'bottom',
      direction: 'horizontal',
      pattern: {
        color: '#7A7E83',
        backgroundColor: '#fff',
        selectedColor: '#007AFF',
        buttonColor: '#007AFF'
      },
      content: [{
        iconPath: require('../../../assets/img/uni-app/component.png'),
        selectedIconPath: require('../../../assets/img/uni-app/componentHL.png'),
        text: '组件',
        active: false
      },
      {
        iconPath: require('../../../assets/img/uni-app/api.png'),
        selectedIconPath: require('../../../assets/img/uni-app/apiHL.png'),
        text: 'API',
        active: false
      },
      {
        iconPath: require('../../../assets/img/uni-app/template.png'),
        selectedIconPath: require('../../../assets/img/uni-app/templateHL.png'),
        text: '模版',
        active: false
      }
      ]
    }
  },
  onBackPress () {
    if (this.$refs.fab.isShow) {
      this.$refs.fab.close()
      return true
    }
    return false
  },
  methods: {
    trigger (e) {
      console.log(e)
      this.content[e.index].active = !e.item.active
      // uni.showModal({
      //   title: '提示',
      //   content: `您${this.content[e.index].active ? '选中了' : '取消了'}${e.item.text}`,
      //   success: function (res) {
      //     if (res.confirm) {
      //       console.log('用户点击确定')
      //     } else if (res.cancel) {
      //       console.log('用户点击取消')
      //     }
      //   }
      // })
    },
    switchBtn (hor, ver) {
      if (hor === 0) {
        this.direction = this.direction === 'horizontal' ? 'vertical' : 'horizontal'
        this.directionStr = this.direction === 'horizontal' ? '垂直' : '水平'
      } else {
        this.horizontal = hor
        this.vertical = ver
      }
      this.$forceUpdate()
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

  div {
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

  .uni-padding-wrap {
    padding-top: 200px;
  }

  .btn {
    margin: 30px;
  }
</style>
