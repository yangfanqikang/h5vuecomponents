<template>
  <div class="page-index">
    <status-bar></status-bar>
    <div class="page-navbar">
      <div><i class="iconfont iconsortlight"></i></div>
      <h4>18³</h4>
      <div><i class="iconfont iconsearch"></i></div>
    </div>
    <div class="page-img">
      <img src="../../assets/img/uni-app_nut_mand_cube_vant.png" alt="">
    </div>
    <div class="page-container">
      <div class="page-header">
        <div :class="currentIndex === index ? 'header-active':''" v-for="(item, index) in pageHeaderList" :key="item"
             @click="clickIndex(index)">{{item}}
        </div>
      </div>
      <div class="page-content">
        <div v-show="currentIndex === 0" class="page-uni">
            <div class="page-uni-header">
             <div v-for="(item2, index2) in uniHeaderList" :key="item2" @click="clickUniHeader(index2)">{{item2}}</div>
            </div>
            <div class="page-uni-content">
              <div v-show="currentIndex2 === 0">
                <div class="page-uni-li" v-for="(li, indexli) in lists" :key="indexli" @click="clickUniUrl(li)">{{li.name}}</div>
              </div>
              <div v-show="currentIndex2 === 0"></div>
              <div v-show="currentIndex2 === 0"></div>
            </div>
        </div>
        <div v-show="currentIndex === 1"></div>
        <div v-show="currentIndex === 2"></div>
        <div v-show="currentIndex === 3"></div>
        <div v-show="currentIndex === 4"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'index',
  data () {
    return {
      currentIndex: 0,
      currentIndex2: 0,
      pageHeaderList: ['uni', 'nut', 'mand', 'cube', 'vant'],
      uniHeaderList: ['扩展组件', '模板', '内置组件'],
      lists: [{
        name: 'Badge 数字角标',
        url: 'badge'
      },
      {
        name: 'Calendar 日历',
        url: 'calendar'
      },
      {
        name: 'Card 卡片',
        url: 'card'
      },
      {
        name: 'Collapse 折叠面板',
        url: 'collapse'
      },
      {
        name: 'CountDown 倒计时',
        url: 'count-down'
      },
      {
        name: 'Drawer 抽屉',
        url: 'drawer'
      },
      {
        name: 'Fab 悬浮按钮',
        url: 'fab'
      },
      {
        name: 'Fav 收藏按钮',
        url: 'fav'
      },
      {
        name: 'GoodsNav 商品导航',
        url: 'goods-nav'
      },
      {
        name: 'Grid 宫格',
        url: 'grid'
      },
      {
        name: 'Icons 图标',
        url: 'icons'
      },
      {
        name: 'IndexedList 索引列表',
        url: 'indexed-list'
      },
      {
        name: 'List 列表',
        url: 'list'
      },
      {
        name: 'LoadMore 加载更多',
        url: 'load-more'
      },
      {
        name: 'NavBar 自定义导航栏',
        url: 'nav-bar'
      },
      {
        name: 'NoticeBar 通告栏',
        url: 'notice-bar'
      },
      {
        name: 'NumberBox 数字输入框',
        url: 'number-box'
      },
      {
        name: 'Pagination 分页器',
        url: 'pagination'
      },
      {
        name: 'PopUp 弹出层',
        url: 'popup'
      },
      {
        name: 'Rate 评分',
        url: 'rate'
      },
      {
        name: 'SearchBar 搜索栏',
        url: 'search-bar'
      },
      {
        name: 'SegmentedControl 分段器',
        url: 'segmented-control'
      },
      {
        name: 'Steps 步骤条',
        url: 'steps'
      },
      {
        name: 'SwipeAction 滑动操作',
        url: 'swipe-action'
      },
      {
        name: 'SwiperDot 轮播图指示点',
        url: 'swiper-dot'
      },
      {
        name: 'Tag 标签',
        url: 'tag'
      }
      ]
    }
  },
  methods: {
    clickIndex (index) {
      this.currentIndex = index
    },
    clickUniHeader (index) {
      this.currentIndex2 = index
    },
    clickUniUrl (li) {
      this.$router.push({ name: li.url, query: { name: li.name } })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../style/coolhue.scss";

  .page-index {
    .page-navbar {
      @include flexCenter($justify-content: space-between);
      height: 44px;
      padding: 0 15px;
      border-bottom: 1px solid $jd-darker-5;
    }

    .page-img {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .page-container {
      padding: 0 15px;

      .page-header {
        box-sizing: border-box;
        text-transform: uppercase;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid $jd-darker-5;
        @include flexCenter($justify-content: space-between);
        >div{
          box-sizing: border-box;
          font-size: 16px;
        }
        .header-active {
          position: relative;
        }
        .header-active::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -1px;
          width: 100%;
          height: 2px;
          background: $primary-color;
        }
      }
      .page-content{
        .page-uni{
          >.page-uni-header{
            @include flexCenter($justify-content: space-between);
            padding-top: 15px;
            >div{
              width: 90px;
              height: 90px;
              line-height: 90px;
              text-align: center;
              color: #fff;
              border-radius: 50%;
              font-size: 16px;
              background: gradient-name(135deg, nth($lg-list1, 1), 0, nth($lg-list1, 2), 100%);
            }
            >div:nth-child(2){
              background: gradient-name(135deg, nth($lg-list2, 1), 0, nth($lg-list2, 2), 100%);
            }
            >div:nth-child(3){
              background: gradient-name(135deg, nth($lg-list3, 1), 0, nth($lg-list3, 2), 100%);
            }
          }
          >.page-uni-content{
            >div{
              padding-top: 15px;
              >.page-uni-li{
                font-size: $fs-3 / 2;
                line-height: 50px;
                height: 50px;
                box-sizing: border-box;
                position: relative;
                &::after{
                  position: absolute;
                  content: '';
                  background-color: $jd-darker-5;
                  display: block;
                  width: 100%;
                  height: 1px; /*no*/
                  transform: scale(1, 0.5);
                  bottom: 0;
                  left: 0;
                }
              }
            }
          }
        }
      }
    }

  }
</style>
