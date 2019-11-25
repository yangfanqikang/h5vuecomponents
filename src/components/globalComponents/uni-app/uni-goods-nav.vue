<template>
  <div>
    <!-- 底部占位 -->
    <div class="uni-tab__seat"/>
    <div class="uni-tab__cart-box flex">
      <div class="flex uni-tab__cart-sub-box">
        <div v-for="(item,index) in options" :key="index" class="flex uni-tab__cart-button-left uni-tab__shop-cart"
             @click="onClick(index,item)">
          <div class="uni-tab__icon">
            <img :src="item.icon" mode="widthFix"/>
          </div>
          <p class="uni-tab__text">{{ item.text }}</p>
          <div class="flex uni-tab__dot-box">
            <div v-if="item.info" :class="{ 'uni-tab__dots': item.info > 9 }" class="uni-tab__dot ">
              {{ item.info }}
            </div>
          </div>
        </div>
      </div>
      <div :class="{'uni-tab__right':fill}" class="flex uni-tab__cart-sub-box ">
        <div v-for="(item,index) in buttonGroup" :key="index"
             :style="{backgroundColor:item.backgroundColor,color:item.color}" class="flex uni-tab__cart-button-right"
             @click="buttonClick(index,item)">{{ item.text }}
        </div>

        <!-- <div class="flex uni-tab__cart-button-right uni-tab__color-y ">立即购买</div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UniGoodsNav',
  props: {
    options: {
      type: Array,
      default () {
        return [{
          icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/dianpu.png',
          text: '店铺'
        }, {
          icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/carts.png',
          text: '购物车'
        }]
      }
    },
    buttonGroup: {
      type: Array,
      default () {
        return [{
          text: '加入购物车',
          backgroundColor: '#ff0000',
          color: '#fff'
        },
        {
          text: '立即购买',
          backgroundColor: '#ffa200',
          color: '#fff'
        }
        ]
      }
    },
    fill: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick (index, item) {
      this.$emit('click', {
        index,
        content: item
      })
    },
    buttonClick (index, item) {
      // if (uni.report) {
      //   uni.report(item.text, item.text)
      // }
      this.$emit('buttonClick', {
        index,
        content: item
      })
    }
  }
}
</script>

<style scoped>
  .flex {
    display: flex;
  }

  .uni-tab__cart-box {
    width: 100%;
    height: 100px;
    background: #fff;
    z-index: 900;
  }

  .uni-tab__cart-sub-box {
    width: 100%;
    box-sizing: border-box;
  }

  .uni-tab__right {
    margin: 5px 0;
    margin-right: 10px;
    border-radius: 100px;
    overflow: hidden;
  }

  .uni-tab__cart-button-left {
    position: relative;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    font-size: 24px;
  }

  .uni-tab__icon {
    width: 40px;
    height: 40px;
  }

  .uni-tab__icon img {
    width: 100%;
    height: 100%;
  }

  .uni-tab__cart-button-left .uni-tab__text {
    margin-top: 5px;
    font-size: 24px;
    color: #666;
  }

  .uni-tab__cart-button-right {
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 24px;
    color: #fff;
  }

  .uni-tab__cart-button-right:active {
    opacity: 0.7;
  }

  .uni-tab__cart-button-left .uni-tab__dot-box {
    position: absolute;
    right: 40px;
    top: 20px;
    justify-content: center;
    align-items: center;
    width: 0;
    height: 0;
  }

  .uni-tab__dot-box .uni-tab__dot {
    flex-shrink: 0;
    width: 30px;
    height: 30px;
    line-height: 30px;
    color: #ffffff;
    text-align: center;
    font-size: 12px;
    background: #ff0000;
    border-radius: 50%;
  }

  .uni-tab__dot-box .uni-tab__dot.uni-tab__dots {
    padding: 0 8px;
    width: auto;
    border-radius: 30px;
  }

  .uni-tab__color-y {
    background: #ffa200;
  }

  .uni-tab__color-r {
    background: #ff0000;
  }
</style>
