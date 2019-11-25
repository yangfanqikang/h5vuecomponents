<template>
  <div :class="{ 'calendar-content-active ': infoShow }" class="calendar-content">
    <header-nav :title="'日历组件'"></header-nav>
    <div class="example-info">日历组件可以查看日期，选择任意范围内的日期，打点操作。常用场景如：酒店日期预订、火车机票选择购买日期、上下班打卡等。</div>
    <div class="example-title">日历组件</div>

    <div v-if="showCalendar">
      <!-- 插入模式 -->
      <uni-calendar :insert="true" :lunar="tags[0].checked" :disable-before="tags[3].checked" :range="tags[5].checked"
                    :start-date="startDate" :end-date="endDate" :date="date" :selected="selected" @change="change"/>
      <div class="calendar-tags-group example-body">
        <div v-for="(item, index) in tags" :class="{ checked: item.checked }" :key="index" class="calendar-tags"
             @click="toggle(index, item)">
          <div class="calendar-tags-item">{{ item.name }}</div>
        </div>
        <div class="calendar-tags" @click="open">
          <div class="calendar-tags-item calendar-button">打开日历</div>
        </div>
      </div>
      <!-- <button class="calendar-button" type="button" @click="open">打开日历</button> -->
      <div :class="{ 'calendar-active': infoShow }" class="calendar-box">
        <div v-if="timeData.lunar" class="calendar-info-header">
          <p class="calendar-title">已选日期详情</p>
          <p @click="retract">{{ infoShow ? '收起' : '展开' }}</p>
        </div>
        <div v-if="timeData.lunar" class="calendar-info">
          <div>当前选择时间 : {{ timeData.fulldate }}</div>
          <div v-if="tags[0].checked">农历日期 : {{ timeData.year + '年' + timeData.month + '月' + timeData.date + '日 （' +
            timeData.lunar.astro + ')' }}
          </div>
          <div v-if="tags[0].checked">
            {{ timeData.lunar.gzYear + '年' + timeData.lunar.gzMonth + '月' + timeData.lunar.gzDay + '日 (' +
            timeData.lunar.Animal + '年)' }}
            {{ timeData.lunar.IMonthCn + timeData.lunar.IDayCn }} {{ timeData.lunar.isTerm ? timeData.lunar.Term : '' }}
          </div>
          <div>是否打点 : {{ timeData.clockinfo.have ? '是' : '否' }}</div>
          <div v-if="timeData.clockinfo.have">打点信息 : {{ timeData.clockinfo.info || '' }}</div>
          <div v-if="timeData.clockinfo.have">打点额外信息 : {{ JSON.stringify(timeData.clockinfo.data) || '' }}</div>
          <div v-if="tags[5].checked">范围选择开始时间 : {{ timeData.range.begin || '' }}</div>
          <div v-if="tags[5].checked">范围选择结束时间 : {{ timeData.range.end || '' }}</div>
          <div v-if="tags[5].checked">范围日期 : {{ JSON.stringify(timeData.range.data) || '' }}</div>
        </div>
      </div>
    </div>
    <uni-calendar ref="calendar" :lunar="tags[0].checked" :disable-before="tags[3].checked" :range="tags[5].checked"
                  :start-date="startDate" :end-date="endDate" :date="date" :selected="selected" @confirm="confirm"
                  @change="change"/>
  </div>
</template>

<script>
import uniCalendar from '@/components/globalComponents/uni-app/uni-calendar/uni-calendar.vue'

export default {
  components: {
    uniCalendar
  },
  data () {
    /**
       * 时间计算
       */
    function getDate (date, AddMonthCount = 0, AddDayCount = 0) {
      if (typeof date !== 'object') {
        date = date.replace(/-/g, '/')
      }
      let dd = new Date(date)
      dd.setMonth(dd.getMonth() + AddMonthCount) // 获取AddDayCount天后的日期
      dd.setDate(dd.getDate() + AddDayCount) // 获取AddDayCount天后的日期
      let y = dd.getFullYear()
      let m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1 // 获取当前月份的日期，不足10补0
      let d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate() // 获取当前几号，不足10补0
      return y + '-' + m + '-' + d
    }

    let tags = [{
      id: 0,
      name: '农历',
      checked: false,
      attr: 'lunar'
    },
    {
      id: 1,
      name: '开始日期(' + getDate(new Date(), -1) + ')',
      checked: false,
      value: getDate(new Date(), -1),
      attr: 'startDate'
    },
    {
      id: 2,
      name: '结束日期(' + getDate(new Date(), 2) + ')',
      value: getDate(new Date(), 2),
      checked: false,
      attr: 'endDate'
    },
    {
      id: 3,
      name: '禁用今天之前的日期',
      checked: false,
      attr: 'disableBefore'
    },
    {
      id: 4,
      name: '自定义当前日期(' + getDate(new Date(), 1) + ')',
      value: getDate(new Date(), 1),
      checked: false,
      attr: 'date'
    },
    {
      id: 5,
      name: '范围选择',
      checked: false,
      attr: 'range'
    },
    {
      id: 6,
      name: '打点',
      value: [{
        date: getDate(new Date(), 0, -1),
        info: '打卡'
      },
      {
        date: getDate(new Date(), 0),
        info: '签到',
        data: {
          custom: '自定义信息',
          name: '自定义消息头'
        }
      },
      {
        date: getDate(new Date(), 0, 1),
        info: '已打卡'
      }
      ],
      checked: false,
      attr: 'selected'
    }
    ]

    return {
      tags,
      date: '',
      startDate: '',
      endDate: '',
      timeData: {
        clockinfo: '',
        date: '',
        fulldate: '',
        lunar: '',
        month: '',
        range: '',
        year: ''
      },
      selected: [],
      infoShow: false,
      showCalendar: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.showCalendar = true
    }, 350)
  },
  methods: {
    toggle (index, item) {
      this.tags[index].checked = !item.checked
      this.reckon()
    },
    open () {
      this.reckon()
      this.$refs.calendar.open()
    },
    reckon () {
      if (this.tags[1].checked) {
        this.startDate = this.tags[1].value
      } else {
        this.startDate = ''
      }
      if (this.tags[2].checked) {
        this.endDate = this.tags[2].value
      } else {
        this.endDate = ''
      }
      if (this.tags[4].checked) {
        this.date = this.tags[4].value
      } else {
        this.date = ''
      }
      if (this.tags[6].checked) {
        this.selected = this.tags[6].value
      } else {
        this.selected = []
      }
    },
    change (e) {
      console.log('change 返回:', e)
      this.timeData = e
      this.infoShow = true
    },
    confirm (e) {
      console.log('confirm 返回:', e)
      this.timeData = e
      this.infoShow = true
    },
    retract () {
      this.infoShow = !this.infoShow
    }
  }
}
</script>

<style lang="scss" scoped>
  page {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background-color: #efeff4
  }

  /*div {*/
  /*  font-size: 14px;*/
  /*  line-height: inherit*/
  /*}*/

  .example {
    padding: 0 15px 15px
  }

  .example-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    color: #464e52;
    padding: 15px 15px 15px 25px;
    margin-top: 10px;
    position: relative;
    background-color: #fdfdfd;
    border-bottom: .5px #f5f5f5 solid
  }

  .example-title__after {
    position: relative;
    color: #031e3c
  }

  .example-title:after {
    content: '';
    position: absolute;
    left: 15px;
    margin: auto;
    top: 0;
    bottom: 0;
    width: 3px;
    height: 16px;
    background-color: #ccc
  }

  .example .example-title {
    margin: 20px 0
  }

  .example-body {
    padding: 15px;
    background: #fff
  }

  .example-info {
    padding: 15px;
    color: #3b4144;
    background: #fff
  }

  .calendar-content {
    padding-bottom: 50px;
    font-size: 13px;
  }

  .calendar-content-active {
    padding-bottom: 250px;
  }

  .calendar-tags-group {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .calendar-tags {
    width: 100%;
    box-sizing: border-box;
  }

  .calendar-tags-item {
    padding: 10px 10px;
    border: .5px rgba(0, 0, 0, 0.2) solid;
    color: #333;
    border-radius: 5px;
    text-align: center;
    margin: 5px;
    background: #f8f8f8;
  }

  .calendar-tags-item:active {
    background: #f8f8f8;
  }

  .checked .calendar-tags-item {
    background: rgb(0, 122, 255);
    color: #fff;
    border: .5px rgba(0, 0, 0, 0.1) solid;
  }

  .calendar-button {
    font-weight: bold;
    font-size: 16px;
  }

  .calendar-button-groups {
    position: absolute;
    width: 100%;
    bottom: 0;
    display: flex;
  }

  .calendar-button-confirm {
    width: 50%;
    margin: 5px;
    border: .5px #eee solid;
    font-size: 16px;
  }

  .calendar-button-confirm:after {
    border: none;
  }

  .calendar-box {
    position: fixed;
    bottom: 0;
    background: #fff;
    color: #444;
    line-height: 1.5;
    width: 100%;
    transition: all 0.3s;
    transform: translateY(160px);
    /* background: #f5f5f5; */
  }

  .calendar-active {
    transform: translateY(0);
  }

  .calendar-info-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    padding-left: 0;
    border-top: .5px #eee solid;
    border-bottom: .5px #eee solid;
  }

  .calendar-title {
    /* height: 80/2px; */
    font-weight: bold;
    color: #666;
    font-size: 16px;
    border-left: 1px #0d9ebb solid;
    padding-left: 10px;
    margin: 0 10px;
  }

  .calendar-info {
    overflow-y: scroll;
    height: 130px;
    padding: 15px;
  }
</style>
