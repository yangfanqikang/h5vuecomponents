<template>
  <page class="hotel-travel-farm">
    <div class="selectCity">
      <div class="selectCityTop">
        <div @click="selectCity" class="cityLeft">
          <div>{{selectedCity}}</div>
        </div>
        <div class="inputContent" id="inputContent">
          <input type="text" placeholder="请输入查询" ref="searchVal">
        </div>
        <div class="btnSearch" @click="searchFun">
          查询
        </div>
      </div>
    </div>
    <!--      <div v-if="list.length<=0" class="cityListHas">-->
    <!--        <img src="../../assets/img/pic_blank.png" alt="">-->
    <!--        <p>暂时没有记录</p>-->
    <!--      </div>-->
    <div class="cityList">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了"  @load="onLoad" :offset="3">
          <div v-for="(item,index) in list" :key="index" class="cityListContent">
            <p>{{item.name}}</p>
            <p>{{item.address}}</p>
            <p>{{item.phone}}</p>
            <!--              <p>{{item.page}}</p>-->
          </div>
        </van-list>
      </van-pull-refresh>
      <!--<div v-for="(item,index) in list" :key="index">-->
      <!--<p>{{item.name}}</p>-->
      <!--<p>{{item.addr}}</p>-->
      <!--<p>{{item.contact}}</p>-->
      <!--</div>-->
    </div>
    <van-popup v-model="showCity" position="bottom" round>
      <div class="selected-year"></div>
      <van-picker :columns="columns" @cancel="onCancel" @confirm="onConfirm" show-toolbar title="城市选择"></van-picker>
    </van-popup>

    <div class="empty" v-show="list.length<=0 && isEndRequest && !networkError">
      <div>{{toastMsg}}</div>
    </div>
  </page>
</template>

<script>
import Toast from 'vant/es/toast'
import axios from 'axios'
import { _throttle } from '@/utils/tools.js'
export default {
  name: 'hotel-travel-farm',
  data () {
    return {
      title: '酒店查询',
      geo: '',
      itemId: '',
      list: [],
      list2: [
        { name: '虹桥大酒店', address: '兴庆区解放西街16号', phone: '0951-6918888' },
        { name: '桃园酒店', address: '兴庆区解放西街16号', phone: '0951-6918888' },
        { name: '御泉湾', address: '兴庆区解放西街16号', phone: '0951-6918888' },
        { name: '虹桥大酒店', address: '兴庆区解放西街16号', phone: '0951-6918888' },
        { name: '桃园酒店', address: '兴庆区解放西街16号', phone: '0951-6918888' },
        { name: '御泉湾', address: '兴庆区解放西街16号', phone: '0951-6918888' }
      ],
      showCity: false,
      columns: ['银川市', '石嘴山', '吴忠市', '固原市', '中卫市'],
      selectedCity: '银川市',
      total: 0,
      page: 0,
      pageNum: 0,
      loading: false, // 是否处于加载状态
      finished: false, // 是否加载完所有数据
      isLoading: false, // 是否处于下拉刷新状态
      toastMsg: '', // 提示语
      isEndRequest: false,
      networkError: false,
      time: null
    }
  },
  created () {
    let that = this
    // 获取标题
    let name = that.$route.query.title
    // 获取市级编码
    // 银川市：640100 * 石嘴山 640200 * 吴忠市 640300 * 固原市 640400 * 中卫市 640500
    if (that.$route.query.geo == '' || that.$route.query.geo == '640100') {
      that.geo = '640100'
      that.selectedCity = '银川市'
    } else {
      that.geo = that.$route.query.geo
      if (that.geo == '640200') {
        that.selectedCity = '石嘴山'
      } else if (that.geo == '640300') {
        that.selectedCity = '吴忠市'
      } else if (that.geo == '640400') {
        that.selectedCity = '固原市'
      } else if (that.geo == '640500') {
        that.selectedCity = '中卫市'
      } else {
        that.geo = '640100'
        that.selectedCity = '银川市'
      }
    }
    // 判断查询类型
    if (name == 'hotel' || name == '') {
      that.itemId = 'hotel.list'
      that.title = '酒店'
    } else if (name == 'ruraltourism') {
      that.itemId = 'ruraltourism.list'
      that.title = '农家乐'
    } else if (name == 'travel') {
      that.itemId = 'travel.list'
      that.title = '旅行社'
    } else {
      that.itemId = 'hotel.list'
      that.title = '酒店'
    }

    //  获取地理位置,如果为空默认为银川
    //   that.geo = that.$route.params.geo
  },
  mounted () {
    // this.list = this.list2
    // this.onRefresh()
    console.log('*****mounted')
  },
  activated () {
    console.log('*****actived')
  },
  computed: {
  },
  methods: {
    goBack () {
      if (this.$route.query.from == 'app') {
        this.$sendMessageToDevice(JSON.stringify({ name: 'goBack' }))
      } else {
        this.$router.back()
      }
    },
    selectCity () {
      this.showCity = true
    },
    onConfirm (value, index) {
      let that = this
      that.list = []
      that.selectedCity = value
      if (that.selectedCity == '银川市') {
        that.geo = '640100'
        that.selectedCity = '银川市'
      } else if (that.selectedCity == '石嘴山') {
        that.geo = '640200'
        that.selectedCity = '石嘴山'
      } else if (that.selectedCity == '吴忠市') {
        that.geo = '640300'
        that.selectedCity = '吴忠市'
      } else if (that.selectedCity == '固原市') {
        that.geo = '640400'
        that.selectedCity = '固原市'
      } else if (that.selectedCity == '中卫市') {
        that.geo = '640500'
        that.selectedCity = '中卫市'
      }
      that.pageNum = 1
      let param = {
        'itemId': that.itemId,
        'parameters': {
          'page': '1',
          'updatetime': '',
          'region': that.geo,
          'name': '',
          'resourceLevel': '',
          'rows': '10'
        }
      }
      that.$refs.searchVal.value = ''
      that.finished = false
      // 请求1
      that.fetch_list(param)

      this.showCity = false
    },
    onCancel () {
      // Toast('取消')
      this.showCity = false
    },
    // 页面初始化之后会触发一次，再页面往下加载的过程中会多次调用
    onLoad: _throttle(
      function () {
        let that = this
        // 请求参数
        that.pageNum++
        let param = {
          'itemId': that.itemId,
          'parameters': {
            'page': that.pageNum.toString(),
            'updatetime': '',
            'region': that.geo,
            'name': '',
            'resourceLevel': '',
            'rows': '10'
          }
        }
        // 请求2
        that.fetch_list(param)
      }, 500),

    // 请求
    fetch_list (param) {
      let that = this
      // https://www.easy-mock.com/mock/5c90925ed3d19731516d2dec/www.zouzhirui.xyz/nxcsp/travel/search/v1.0
      // http://192.168.244.95:8091/nxcsp/travel/search/v1.0 默认显示10条 127.0.0.1:8091/nxcsp/travel/search/v1.0
      let url = 'https://tysl.zwfw.nx.gov.cn/zhsl/travel/search/v1.0'
      axios.post(url, param, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token') || 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjdXJyZW50VGltZU1pbGxpcyI6IjE1NjY1NDM4OTA2NjQiLCJ1c2VyTmFtZSI6IueDiOeBq-iLsembhCIsImV4cCI6MTU2NjU2MTg5MCwidXNlcklkIjoiNCIsInBob25lTm8iOiIxODgwMDAwMDAwMCJ9.lyc3HSuknKMiYONWG7VcaVDd4BjryOcqkE0ARAmDKHg'
        }
      }).then(res => {
        if (res.data.retCode == '0') {
          console.log(res.data.result.rows)
          that.total = res.data.result.total
          if (!res.data.result.rows) {
            // 下拉刷新状态结束
            that.isLoading = false
            //  上拉加载状态结束
            that.loading = false
            that.finished = true
            return
          }
          if (that.total < 10) {
            that.finished = true
          }
          // that.list.push(res.data.result)
          that.list2 = res.data.result.rows
          for (let i = 0; i < 10; i++) {
            if (that.list2[i]) {
              that.list.push(that.list2[i])
            }
          }
        } else {
          // Toast({
          //   message: res.data.retMsg
          // })
          that.finished = true
          // console.log(res.data.retMsg)
        }
        // 下拉刷新状态结束
        that.isLoading = false
        //  上拉加载状态结束
        that.loading = false
        //  数据全部加载完成
        if (that.list.length > that.total) {
          that.finished = true
        }
      }).catch(err => {
        // 数据全部加载完成
        // this.$toast(JSON.stringify(err))
        console.log(err)
        setTimeout(() => {
          this.loading = false
          this.finished = true
        }, 5000)
      })
    },

    // 下拉刷新
    onRefresh () {
      let that = this
      let searchVal = that.$refs.searchVal.value || ''
      // console.log("1111111111111111111111111")
      // 如果searchVal有值
      setTimeout(function () {
        let param = {
          'itemId': that.itemId,
          'parameters': {
            'page': '1',
            'updatetime': '',
            'region': that.geo,
            'name': searchVal,
            'resourceLevel': '',
            'rows': '10'
          }
        }
        that.list = []
        // 请求3
        that.fetch_list(param)
      }, 500)
    },

    // 点击查询
    searchFun () {
      this.isEndRequest = false
      let that = this
      let searchVal = that.$refs.searchVal.value || ''
      let param = {
        'itemId': that.itemId,
        'parameters': {
          'page': '1',
          'updatetime': '',
          'region': that.geo,
          'name': searchVal,
          'resourceLevel': '',
          'rows': '10'
        }
      }
      // https://www.easy-mock.com/mock/5c90925ed3d19731516d2dec/www.zouzhirui.xyz/nxcsp/travel/search/v1.0
      // http://192.168.244.95:8091/nxcsp/travel/search/v1.0 默认显示10条 127.0.0.1:8091/nxcsp/travel/search/v1.0
      let url = 'https://tysl.zwfw.nx.gov.cn/zhsl/travel/search/v1.0'
      axios.post(url, param, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        }
      }).then(res => {
        this.isEndRequest = true
        if (res.data.retCode == '0') {
          that.networkError = false
          that.total = res.data.result.total
          if (!res.data.result.rows) {
            // 下拉刷新状态结束
            that.isLoading = false
            //  上拉加载状态结束
            that.loading = false
            that.finished = true
            return
          }
          // that.list.push(res.data.result)
          that.list = []
          that.list2 = res.data.result.rows
          for (let i = 0; i < 10; i++) {
            if (that.list2[i]) {
              that.list.push(that.list2[i])
            }
          }
        } else {
          that.networkError = true
          Toast({
            message: res.data.retMsg
          })
        }
        // 下拉刷新状态结束
        that.isLoading = false
        //  上拉加载状态结束
        that.loading = false
        //  数据全部加载完成
        if (that.list.length >= that.total || parseInt(that.total / 10) < that.pageNum) {
          that.finished = true
        }
      }).catch(err => {
        that.isEndRequest = true
        that.networkError = true
        that.finished = true
        // Toast.fail(err)
        //  数据全部加载完成
        if (err.response && err.response.data && err.response.data.retMsg) {
          that.$loading.showToast(err.response.data.retMsg)
        } else {
          that.$loading.showToast('网络异常')
        }
        setTimeout(() => {
          that.loading = false
        }, 5000)
      })
      // if (that.list.length<=0){
      //   Toast("搜索内容为空")
      // }
    }
  }
}
</script>

<style scoped>
  .hotel-travel-farm{
  }

  .selectCity{
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 10px;
    border-bottom: 10px solid #f4f4f4;
    border-top: 20px solid #f4f4f4;
    padding: 0 15px;
    position: fixed;
    top: 37px;
    width: 100%;
    z-index: 100;
  }
  .selectCityTop{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    line-height: 50px;
    -webkit-box-sizing: border-box;
  }
  .cityLeft{
    display: flex;
    align-items: center;
  }
  /*width: 200px;*/
  .cityLeft img{
    width: 50px;
    height: 50px;
    /*margin-left: 15px;*/
  }
  .cityLeft>div{
    width: 120px;
    text-align: left;
  }
  .inputContent{
    flex:1;
    /*width: calc(100% - 460px);*/
    display: flex;
    align-items: center;
    overflow: hidden;
    height: 50px;
  }
  .inputContent>input{
    border:none;
    height: 50px;
    line-height: 50px;
    caret-color:#333;
    /*padding-left: 15px;*/
  }
  .btnSearch{
    width: 74px;
    min-width: 50px;
    height: 30px;
    line-height: 30px;
    justify-content: center;
    background-image: linear-gradient(135deg, #D3A984 0%, #BE8A5D 100%);
    border-radius: 4px;/*no*/
    color: #fff;
    font-size: 14px;
  }
  .cityListContent{
    border-bottom: 1px solid #ddd;
    font-weight: bold;
    padding: 15px 0;
  }
  .cityListContent>p{
    line-height: 1.8em;
    font-size: 14px;
    color: #999;
  }
  .cityListContent>p:first-child{
    font-size: 16px;
    color: #393939;
    line-height: 1.5em;
    margin-bottom: 20px;
  }
  .cityList{
    margin-top: 80px;
    text-align: left;
    padding: 0 15px;
    background-color: #fff;
  }
  .cityListHas{
    margin-top: 160px;
    text-align: center;
    color: #999;
    background-color: #f4f4f4;
  }
  .cityListHas>img{
    margin-top: 20px;
    width: 75%;
    margin: 0 auto;
  }
  .empty{
    background: #f4f4f4;
  }

  .empty img {
    margin-top: 100px;
    width: 80%;
    height: auto;
  }

  .empty div {
    color: #A2A2A2;
    margin: 23px 0px;
  }
</style>
