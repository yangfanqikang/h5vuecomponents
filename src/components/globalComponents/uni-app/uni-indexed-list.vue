<template>
  <div class="uni-indexed">
    <div :scroll-into-div="scrolldivId" :style="{ height: winHeight + 'px' }" class="uni-indexed__list" scroll-y>
      <div v-for="(list, idx) in lists" :key="idx">
        <div v-if="list.items && list.items.length > 0" :id="'uni-indexed-list-' + list.key"
             class="uni-indexed__list-title">{{ list.key }}
        </div>
        <div v-if="list.items && list.items.length > 0" class="uni-list">
          <div v-for="(item, index) in list.items" :key="index" class="uni-list-item"
               hover-class="uni-list-item--hover">
            <div class="uni-list-item__container" @click="onClick(idx, index)">
              <div v-if="showSelect" style="margin-right: 20px;">
                <uni-icons :type="item.checked ? 'checkbox-filled' : 'circle'"
                           :color="item.checked ? '#007aff' : '#aaa'" size="24"/>
              </div>
              <div class="uni-list-item__content">{{ item.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :class="touchmove ? 'active' : ''" :style="{ height: winHeight + 'px' }" class="uni-indexed__menu"
         @touchstart="touchStart" @touchmove.stop.prevent="touchMove" @touchend="touchEnd">
      <p v-for="(list, key) in lists" :key="key" :class="touchmoveIndex == key ? 'active' : ''"
         :style="{ height: itemHeight + 'px', lineHeight: itemHeight + 'px' }" class="uni-indexed__menu-item">
        {{ list.key }}
      </p>
    </div>
    <div v-if="touchmove" class="uni-indexed--alert">{{ lists[touchmoveIndex].key }}</div>
  </div>
</template>
<script>

export default {
  name: 'UniIndexedList',
  props: {
    options: {
      type: Array,
      default () {
        return []
      }
    },
    showSelect: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      lists: [],
      touchmove: false,
      touchmoveIndex: -1,
      itemHeight: 0,
      winHeight: 0,
      scrolldivId: ''
    }
  },
  watch: {
    options: {
      handler: function () {
        this.setList()
      },
      deep: true
    }
  },
  created () {
    this.setList()
  },
  methods: {
    setList () {
      let winHeight = window.innerHeight
      this.itemHeight = winHeight / this.options.length
      this.winHeight = winHeight
      this.lists = this.options.map(value => {
        // console.log(value)
        let items = value.data.map(item => {
          let obj = {}
          // for (let key in item) {
          obj['key'] = value.letter
          obj['name'] = item
          // }
          obj.checked = item.checked ? item.checked : false
          return obj
        })
        return {
          title: value.letter,
          key: value.letter,
          items: items
        }
      })
      // console.log(this.lists)
    },
    touchStart (e) {
      this.touchmove = true
      let pageY = e.touches[0].pageY
      let index = Math.floor(pageY / this.itemHeight)
      let item = this.lists[index]
      if (item) {
        this.scrolldivId = 'uni-indexed-list-' + item.key
        this.touchmoveIndex = index
      }
    },
    touchMove (e) {
      let pageY = e.touches[0].pageY
      let index = Math.floor(pageY / this.itemHeight)
      let item = this.lists[index]
      if (item) {
        this.scrolldivId = 'uni-indexed-list-' + item.key
        this.touchmoveIndex = index
      }
    },
    touchEnd () {
      this.touchmove = false
      this.touchmoveIndex = -1
    },
    onClick (idx, index) {
      let obj = {}
      console.log(this.lists[idx].items[index])
      for (let key in this.lists[idx].items[index]) {
        obj[key] = this.lists[idx].items[index][key]
      }
      let select = []
      if (this.showSelect) {
        this.lists[idx].items[index].checked = !this.lists[idx].items[index].checked
        this.lists.forEach((value, idx) => {
          value.items.forEach((item, index) => {
            if (item.checked) {
              let obj = {}
              for (let key in this.lists[idx].items[index]) {
                obj[key] = this.lists[idx].items[index][key]
              }
              select.push(obj)
            }
          })
        })
      }
      this.$emit('click', {
        item: obj,
        select: select
      })
    }
  }
}
</script>
<style scoped>
  @charset "UTF-8";

  .uni-list {
    background-color: #fff;
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column
  }

  .uni-list::after {
    position: absolute;
    z-index: 10;
    right: 0;
    bottom: 0;
    left: 0;
    height: 1px;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #e5e5e5
  }

  .uni-list::before {
    position: absolute;
    z-index: 10;
    right: 0;
    top: 0;
    left: 0;
    height: 1px;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #e5e5e5
  }

  .uni-list-item {
    font-size: 16px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center
  }

  .uni-list-item__container {
    padding: 12px 15px;
    width: 100%;
    box-sizing: border-box;
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center
  }

  .uni-list-item__container:after {
    position: absolute;
    z-index: 3;
    right: 0;
    bottom: 0;
    left: 15px;
    height: 1px;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #e5e5e5
  }

  .uni-indexed {
    display: flex;
    flex-direction: row
  }

  .uni-indexed__list {
    flex: 1;
    height: 100vh
  }

  .uni-indexed__list-title {
    padding: 5px 12px;
    line-height: 1.5;
    background-color: #f7f7f7;
    font-size: 12px
  }

  .uni-indexed__menu {
    position: fixed;
    right: 0;
    width: 23px;
    height: 100vh;
    background-color: #d3d3d3;
    display: flex;
    flex-direction: column
  }

  .uni-indexed__menu.active {
    background-color: #c8c8c8
  }

  .uni-indexed__menu.active .uni-indexed__menu-item {
    color: #333
  }

  .uni-indexed__menu.active .uni-indexed__menu-item.active {
    color: #007aff
  }

  .uni-indexed__menu-item {
    color: #aaa;
    font-size: 11px;
    text-align: center
  }

  .uni-indexed--alert {
    position: absolute;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    z-index: 20;
    width: 80px;
    height: 80px;
    left: 50%;
    top: 50%;
    margin-left: -40px;
    margin-top: -40px;
    border-radius: 40px;
    text-align: center;
    font-size: 35px;
    color: #fff;
    background-color: rgba(0, 0, 0, .5)
  }
</style>
