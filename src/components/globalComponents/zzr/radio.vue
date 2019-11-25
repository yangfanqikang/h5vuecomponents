<template>
  <!--这里设置了选中后的radio样式类,和禁用后的样式类-->
  <label class="ui-radio" :class="{'checked':model==value,'disabled':disabled}">
    <input type="radio" ref="radio" :value="value" @click="updateVal" :disabled="disabled">
  </label>
</template>

<script>
export default {
  name: 'radio', // radio组件名称
  model: {// 自定义 v-model的 prop和event,这个定义的意思就是使用change事件更新model的值,以此来实时更新v-model的值
    prop: 'model',
    event: 'change'
  },
  props: {
    value: {// radio的value属性
      type: [String, Number],
      require: true
    },
    model: {// 这里的model指的是上面定义的v-model的prop
      type: [String, Number],
      require: true
    },
    checked: {// 是否默认选中
      type: Boolean,
      default: false
    },
    disabled: {// 是否禁用
      type: Boolean,
      default: false
    }
  },
  mounted: function () { // 当dom渲染完成,判断组件是否默认选中
    if (this.checked === true) { this.updateVal() }
  },
  methods: {
    updateVal: function () { // 当用户点击radio时,触发change事件更新v-model
      this.$emit('change', this.$refs.radio.value)
    }
  }
}
</script>

<style scoped>
  .ui-radio{
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 1px solid #4693fe;
    display: inline-block;
    position: relative;
  }
  .ui-radio.disabled{
    border-color: #ccc;
  }
  .ui-radio::after{
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -5px 0 0 -5px;
    background-color: #4693fe;
    transition: all .5s ease;
    opacity: 0;
    transform: scale(0);
  }
  .ui-radio.disabled::after{
    background-color: #ccc;
  }
  .ui-radio.checked::after {
    opacity: 1;
    transform: scale(1);
  }
  .ui-radio input[type=radio]{
    opacity: 0;
    margin: 0;
  }
</style>
