<template>
  <page class="page-index" title="18³">
<!--    <div class="page-navbar">-->
<!--      <div><i class="iconfont iconsortlight"></i></div>-->
<!--      <h4>18³</h4>-->
<!--      <div><i class="iconfont iconsearch"></i></div>-->
<!--    </div>-->
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
<!--        uni-app -->
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
<!--        nut ui-->
        <div v-show="currentIndex === 1" class="page-nut">
            <div class="page-nut-header">
              <div v-for="(item2, index2) in ['数据展示', '数据录入', '操作反馈', '导航组件', '布局组件', '基础组件']" :key="item2" @click="clickUniHeader(index2)">{{item2}}</div>
            </div>
            <div class="page-nut-content">
              <div v-show="currentIndex2 === 0">
                <div class="page-nut-li" v-for="(li, indexli) in nutList" :key="indexli" @click="clickUniUrl(li)">{{li.name}}</div>
              </div>
            </div>
        </div>
<!--        mand ui-->
        <div v-show="currentIndex === 2" class="page-nut">
          <div class="page-nut-header">
            <div v-for="(item2, index2) in ['数据展示', '数据录入', '操作反馈', '导航组件']" :key="item2" @click="clickUniHeader(index2)">{{item2}}</div>
          </div>
          <div class="page-nut-content">
            <div v-show="currentIndex2 === 0">
              <div class="page-nut-li" v-for="(li, indexli) in mandList" :key="indexli" @click="clickUniUrl(li)">{{li.name}}</div>
            </div>
          </div>
        </div>
<!--        cube ui-->
        <div v-show="currentIndex === 3" class="page-nut">
          <div class="page-nut-header">
            <div v-for="(item2, index2) in ['数据展示', '数据录入', '操作反馈', '导航组件']" :key="item2" @click="clickUniHeader(index2)">{{item2}}</div>
          </div>
          <div class="page-nut-content">
            <div v-show="currentIndex2 === 0">
              <div class="page-nut-li" v-for="(li, indexli) in cubeList" :key="indexli" @click="clickUniUrl(li)">{{li.name}}</div>
            </div>
          </div>
        </div>
<!--        vant ui-->
        <div v-show="currentIndex === 4"></div>
      </div>
    </div>
  </page>
</template>

<script>
import uniList from './uniList'
import nutList from './nut/index'
import cubeList from './cube/index'
import mandList from './mand/index'
export default {
  name: 'index',
  data () {
    return {
      currentIndex: 0,
      currentIndex2: 0,
      pageHeaderList: ['uni', 'nut', 'mand', 'cube', 'vant'],
      uniHeaderList: ['扩展组件', '模板', '内置组件'],
      lists: uniList,
      nutList,
      cubeList,
      mandList
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
      >img{
        width: 100%;
      }
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
        .page-nut{
          >.page-nut-header{
            @include flexCenter($justify-content: space-between, $flex-wrap: wrap);
            padding-top: 15px;
            >div{
              width: 90px;
              height: 90px;
              line-height: 90px;
              text-align: center;
              color: #fff;
              border-radius: 50%;
              font-size: 16px;
              margin-bottom: 25px;
              background: gradient-name(135deg, nth($lg-list1, 1), 0, nth($lg-list1, 2), 100%);
            }
            >div:nth-child(2){
              background: gradient-name(135deg, nth($lg-list2, 1), 0, nth($lg-list2, 2), 100%);
            }
            >div:nth-child(3){
              background: gradient-name(135deg, nth($lg-list3, 1), 0, nth($lg-list3, 2), 100%);
            }
            >div:nth-child(4){
              background: gradient-name(135deg, nth($lg-list4, 1), 0, nth($lg-list4, 2), 100%);
            }
            >div:nth-child(5){
              background: gradient-name(135deg, nth($lg-list5, 1), 0, nth($lg-list5, 2), 100%);
            }
            >div:nth-child(6){
              background: gradient-name(135deg, nth($lg-list6, 1), 0, nth($lg-list6, 2), 100%);
            }
          }
          >.page-nut-content{
            >div{
              padding-top: 15px;
              >.page-nut-li{
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
