<template>
  <div>
    <div v-for="(weeks, week) in canlender.weeks" :key="week">
      <div class="uni-calender__body-date-week">
        <div v-for="(day, index) in weeks" :key="index">
          <div :class="{
              'uni-calender__disable': canlender.month !== day.month || day.disable,
              'uni-calender__date-current':
                ((day.date == canlender.date && !day.checked) || day.multipleBegin || day.multipleEnd) && canlender.month == day.month && !day.disable,
              'uni-calender__lunar': lunar,
              'uni-calender__active': !day.isDay,
              'uni-calender__is-day': day.isDay,
              'uni-calender__multiple': day.multipleBegin || day.multipleEnd,
              'uni-calender__multiple-box': day.checked
            }" class="uni-calender__date"
               @click="selectDays(week, index, canlender.month === day.month, day.disable, canlender.lunar)">
            <div class="uni-calender__circle-box">
              {{ day.date }}
              <div v-if="lunar" class="uni-calender__lunar">{{ day.lunar }}</div>
              <div v-if="day.have" class="uni-calender__data-circle"/>
              <div v-if="day.have && !lunar" class="uni-calender__lunar">{{ day.clockinfo.info }}</div>
            </div>
            <div
              :class="{ 'uni-calender_check': day.checked, 'calender_check-begin': day.multipleBegin, 'calender_check-end': day.multipleEnd }"
              class="uni-calender_check-bg"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UniCalendarItem',
  props: {
    /**
       * 当前日期
       */
    canlender: {
      type: null,
      default: () => {
        return {}
      }
    },
    lunar: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  methods: {
    selectDays (week, index, ischeck, isDay, lunar) {
      this.$emit('selectDays', {
        week,
        index,
        ischeck,
        isDay,
        lunar
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @charset "UTF-8";

  .uni-calender__body-date-week {
    display: flex;
    width: 100%;
    border-bottom: .5px #f5f5f5 solid
  }

  .uni-calender__body-date-week:last-child {
    border: none
  }

  .uni-calender__body-date-week .uni-calender__date {
    position: relative;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    background: #fff;
    box-sizing: border-box;
    padding: 2.5px 0;
    line-height: 1.5;
    z-index: 2
  }

  .uni-calender__body-date-week .uni-calender__date .uni-calender__lunar {
    font-size: 10px;
    color: #000;
    line-height: 1.2
  }

  .uni-calender__body-date-week .uni-calender__date .uni-calender__circle-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 54px;
    height: 54px;
    flex-shrink: 0;
    border-radius: 5px;
    line-height: 1.2
  }

  .uni-calender__body-date-week .uni-calender__date.uni-calender__disable {
    color: #f1f1f1
  }

  .uni-calender__body-date-week .uni-calender__date.uni-calender__disable .uni-calender__lunar {
    color: #f1f1f1
  }

  .uni-calender__body-date-week .uni-calender__date.uni-calender__is-day {
    color: #fd2e32
  }

  .uni-calender__body-date-week .uni-calender__date.uni-calender__is-day .uni-calender__lunar {
    color: #fd2e32
  }

  .uni-calender__body-date-week .uni-calender__date.uni-calender__date-current {
    color: #fff;
    box-sizing: border-box
  }

  .uni-calender__body-date-week .uni-calender__date.uni-calender__date-current .uni-calender__circle-box {
    background: #fd2e32
  }

  .uni-calender__body-date-week .uni-calender__date.uni-calender__date-current.uni-calender__active {
    color: #fff
  }

  .uni-calender__body-date-week .uni-calender__date.uni-calender__date-current.uni-calender__active .uni-calender__circle-box {
    background: #000
  }

  .uni-calender__body-date-week .uni-calender__date.uni-calender__date-current.uni-calender__multiple .uni-calender__circle-box {
    border-radius: 50%;
    background: #fd2e32
  }

  .uni-calender__body-date-week .uni-calender__date.uni-calender__date-current .uni-calender__lunar {
    color: #fff
  }

  .uni-calender__body-date-week .uni-calender__date.uni-calender__multiple-box {
    color: #fff
  }

  .uni-calender__body-date-week .uni-calender__date.uni-calender__multiple-box .uni-calender__lunar {
    color: #fff
  }

  .uni-calender__body-date-week .uni-calender__date .uni-calender__data-circle {
    position: absolute;
    top: 2.5px;
    right: 2.5px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ff5a5f;
    border: 1px #fff solid;
    z-index: 2
  }

  .uni-calender__body-date-week .uni-calender__date .uni-calender_check-bg {
    position: absolute;
    top: 5px;
    bottom: 5px;
    left: 0;
    right: 0;
    z-index: -1
  }

  .uni-calender__body-date-week .uni-calender__date .uni-calender_check-bg.uni-calender_check {
    background: #ffd3d3
  }

  .uni-calender__body-date-week .uni-calender__date .uni-calender_check-bg.calender_check-begin {
    left: 10px;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px
  }

  .uni-calender__body-date-week .uni-calender__date .uni-calender_check-bg.calender_check-end {
    right: 10px;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px
  }
</style>
