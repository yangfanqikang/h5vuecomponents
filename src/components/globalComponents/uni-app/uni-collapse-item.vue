<template>
  <div :class="['uni-collapse-cell',{'uni-collapse-cell--disabled':disabled,'uni-collapse-cell--open':isOpen}]"
       :hover-class="disabled ? '' : 'uni-collapse-cell--hover'">
    <div class="uni-collapse-cell__title" @click="onClick()"
         :class="fixIndex">
      <div v-if="thumb" class="uni-collapse-cell__title-extra">
        <img :src="thumb" class="uni-collapse-cell__title-img"/>
      </div>
      <div class="uni-collapse-cell__title-inner">
        <div class="uni-collapse-cell__title-text">{{ title }}</div>
      </div>
      <div :class="{'uni-active':isOpen,'uni-collapse-cell--animation':showAnimation===true}"
           class="uni-collapse-cell__title-arrow">
        <img src="../../../assets/img/arrow_right.svg" alt="" v-if="showIcon">
      </div>
    </div>
    <div :class="{'uni-collapse-cell--animation':showAnimation===true}" :style="{height:isOpen ? height : '0px'}"
         class="uni-collapse-cell__content">
      <div :id="elId">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UniCollapseItem',
  props: {
    title: { // 列表标题
      type: String,
      default: ''
    },
    name: { // 唯一标识符
      type: [Number, String],
      default: 0
    },
    disabled: { // 是否禁用
      type: Boolean,
      default: false
    },
    showAnimation: { // 是否显示动画
      type: Boolean,
      default: false
    },
    open: { // 是否展开
      type: Boolean,
      default: true
    },
    thumb: { // 缩略图
      type: String,
      default: ''
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    clickIndex: {
      type: Number,
      default: -1
    },
    fixIndex: {
      type: Number,
      default: -1
    }
  },
  data () {
    /** TODO 兼容新旧编译器* 随机数值是在旧编译器下使用的，旧编译器模式已经不推荐使用，后续直接废掉随机数值的写法。
       * 新编译器（自定义组件模式）下必须使用固定数值，否则部分平台下会获取不到节点。
       */
    const elId = this.__callback_hook ? 'uni_collapse_item' : `Uni_${Math.ceil(Math.random() * 10e5).toString(36)}`
    return {
      isOpen: false,
      height: 'auto',
      elId: elId,
      selectedItem: false,
      nowIndex: -1
    }
  },
  watch: {
    open (val) {
      this.isOpen = val
    }
  },
  inject: ['collapse'],
  created () {
    this.isOpen = this.open
    this.nameSync = this.name ? this.name : this.collapse.childrens.length
    this.collapse.childrens.push(this)
    if (this.collapse.accordion) {
      if (this.isOpen) {
        let lastEl = this.collapse.childrens[this.collapse.childrens.length - 2]
        if (lastEl) {
          this.collapse.childrens[this.collapse.childrens.length - 2].isOpen = false
        }
      }
    }
  },
  // #ifdef H5
  mounted () {
    // this.getSize()
  },
  // #endif
  // #ifndef H5
  // onReady() {
  // this.getSize()
  // },
  // #endif
  methods: {
    selectItem (clickIndex) {
      this.nowIndex = clickIndex
      console.log(this.nowIndex, clickIndex)
      this.$emit('getClickIndex', clickIndex)
    },
    onClick () {
      if (this.disabled) {
        return
      }
      if (this.collapse.accordion) {
        this.collapse.childrens.forEach(vm => {
          if (vm === this) {
            return
          }
          vm.isOpen = false
        })
      }
      this.isOpen = !this.isOpen
      this.collapse.onChange && this.collapse.onChange()
    }
  }
}
</script>

<style scoped>
  .uni-collapse-cell {
    position: relative
  }

  .uni-collapse-cell--hover {
    background-color: #fff
  }

  .uni-collapse-cell--open {
    background-color: #fff
  }

  .uni-collapse-cell--disabled {
    opacity: .3
  }

  .uni-collapse-cell--animation {
    transition: all .3s
  }

  .uni-collapse-cell:after {
    position: absolute;
    z-index: 3;
    right: 0;
    bottom: 0;
    left: 0;
    height: 1px;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
  }

  .uni-collapse-cell__title {
    padding: 15px;
    width: 100%;
    box-sizing: border-box;
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    color: #393939;
    border-bottom: 1px solid #e5e5e5;
  }

  .uni-collapse-cell__title-extra {
    margin-right: 9px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center
  }

  .uni-collapse-cell__title-img {
    height: 16px;
    width: 16px
  }

  .uni-collapse-cell__title-arrow {
    width: 16px;
    height: 16px;
    transform: rotate(90deg);
    transform-origin: center center;
  }

  .uni-collapse-cell__title-arrow > img {
    width: 16px;
    height: 16px;
  }

  /**
  font-size:32px 28px
   */
  .uni-collapse-cell__title-arrow.uni-active {
    transform: rotate(-90deg)
  }

  .uni-collapse-cell__title-inner {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column
  }

  .uni-collapse-cell__title-text {
    color: inherit;
    overflow: hidden;
    font-size: 16px;
    line-height: 24px;
  }

  .uni-collapse-cell__content {
    position: relative;
    width: 100%;
    overflow: hidden;
    background: #fff
  }

  .uni-collapse-cell__content div p{
    font-size: 14px;
  }

  /*.selectedStyle1 {*/
  /*  background-color: #FFF5EC;*/
  /*  color: #CA9C74;*/
  /*  position: relative;*/
  /*}*/

  /*.selectedStyle1::after {*/
  /*  position: absolute;*/
  /*  top: 50%;*/
  /*  right: 30px;*/
  /*  transform: translateY(-50%);*/
  /*  content: '✔';*/
  /*  font-size: 32px;*/
  /*}*/
</style>
