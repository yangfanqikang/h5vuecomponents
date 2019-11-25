<template>
  <div :style="{backgroundColor:checked?bgColorChecked:bgColor,color:checked?fgColorChecked:fgColor}" :class="[
      circle === true || circle === 'true' ? 'uni-fav--circle' : '',
    ]" class="uni-fav" @click="onClick">
    <uni-icons v-if="!checked&&(star===true||star==='true')" :color="fgColor" class="uni-fav-star" type="star-filled"
               size="16"/>
    <span class="uni-fav-text">{{ checked ? contentText.contentFav : contentText.contentDefault }}</span>
  </div>
</template>

<script>

export default {
  name: 'UniFav',
  props: {
    star: {
      type: [Boolean, String],
      default: true
    },
    bgColor: {
      type: String,
      default: '#eeeeee'
    },
    fgColor: {
      type: String,
      default: '#666666'
    },
    bgColorChecked: {
      type: String,
      default: '#007aff'
    },
    fgColorChecked: {
      type: String,
      default: '#FFFFFF'
    },
    circle: {
      type: [Boolean, String],
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    contentText: {
      type: Object,
      default () {
        return {
          contentDefault: '收藏',
          contentFav: '已收藏'
        }
      }
    }
  },
  watch: {
    checked () {
      // if (uni.report) {
      //   if (this.checked) {
      //     uni.report('收藏', '收藏')
      //   } else {
      //     uni.report('取消收藏', '取消收藏')
      //   }
      // }
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
  @charset "UTF-8";

  .uni-fav {
    display: flex;
    width: 60px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    font-size: 14px;
    box-sizing: border-box;
    border-radius: 3px;
    align-items: center;
    justify-content: center;
  }

  .uni-fav--circle {
    border-radius: 30px
  }

  .uni-fav-star {
    height: 25px;
    line-height: 25px;
    margin-right: 2px;
    vertical-align: middle
  }

  .uni-fav-text {
    display: inline-block;
    height: 25px;
    line-height: 25px;
    vertical-align: middle
  }
</style>
