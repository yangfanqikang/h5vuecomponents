<template>
  <page :title="this.$route.query.name">
    <div class="example-info">标签组件多用于商品分类、重点内容显示等场景。</div>
    <div class="example-title">实心标签</div>
    <div class="example-body">
      <div class="tag-div">
        <uni-tag text="标签"/>
      </div>
      <div class="tag-div">
        <uni-tag text="标签" type="primary"/>
      </div>
      <div class="tag-div">
        <uni-tag text="标签" type="success"/>
      </div>
      <div class="tag-div">
        <uni-tag text="标签" type="warning"/>
      </div>
      <div class="tag-div">
        <uni-tag text="标签" type="error"/>
      </div>
    </div>
    <div class="example-title">空心标签</div>
    <div class="example-body">
      <div class="tag-div">
        <uni-tag :inverted="true" text="标签"/>
      </div>
      <div class="tag-div">
        <uni-tag :inverted="true" text="标签" type="primary"/>
      </div>
      <div class="tag-div">
        <uni-tag :inverted="true" text="标签" type="success"/>
      </div>
      <div class="tag-div">
        <uni-tag :inverted="true" text="标签" type="warning"/>
      </div>
      <div class="tag-div">
        <uni-tag :inverted="true" text="标签" type="error"/>
      </div>
    </div>
    <div class="example-title">圆角样式</div>
    <div class="example-body">
      <div class="tag-div">
        <uni-tag :circle="true" text="标签" type="primary" size="small"/>
      </div>
      <div class="tag-div">
        <uni-tag :inverted="true" :circle="true" text="标签" type="success" size="small"/>
      </div>
      <div class="tag-div">
        <uni-tag :circle="true" text="标签" type="warning"/>
      </div>
      <div class="tag-div">
        <uni-tag :inverted="true" :circle="true" text="标签" type="error"/>
      </div>
    </div>
    <div class="example-title">标记样式</div>
    <div class="example-body">
      <div class="tag-div">
        <uni-tag :mark="true" text="标签" type="primary" size="small"/>
      </div>
      <div class="tag-div">
        <uni-tag :mark="true" text="标签" type="success" size="small"/>
      </div>
      <div class="tag-div">
        <uni-tag :mark="true" text="标签" type="warning"/>
      </div>
      <div class="tag-div">
        <uni-tag :mark="true" :circle="true" text="标签" type="error"/>
      </div>
    </div>
    <div class="example-title">点击事件</div>
    <div class="example-body">
      <div class="tag-div">
        <uni-tag :type="type" text="标签" @click="setType"/>
      </div>
      <div class="tag-div">
        <uni-tag :circle="true" :inverted="inverted" text="标签" type="primary" @click="setInverted"/>
      </div>
    </div>

    <div class="example-title">小标签</div>
    <div class="example-body">
      <div class="tag-div">
        <uni-tag text="标签" size="small"/>
      </div>
      <div class="tag-div">
        <uni-tag text="标签" type="primary" size="small"/>
      </div>
      <div class="tag-div">
        <uni-tag text="标签" type="success" size="small"/>
      </div>
      <div class="tag-div">
        <uni-tag :inverted="true" :mark="true" text="标签" type="warning" size="small"/>
      </div>
      <div class="tag-div">
        <uni-tag :inverted="true" :circle="true" text="标签" type="error" size="small"/>
      </div>
    </div>

    <div class="example-title">不可点击状态</div>
    <div class="example-body">
      <div class="tag-div">
        <uni-tag :disabled="true" text="标签"/>
      </div>
      <div class="tag-div">
        <uni-tag :disabled="true" text="标签" type="primary"/>
      </div>
      <div class="tag-div">
        <uni-tag :inverted="true" :disabled="true" text="标签" type="error" size="small"/>
      </div>
    </div>
  </page>
</template>

<script>
export default {
  data () {
    return {
      type: 'default',
      inverted: false
    }
  },
  methods: {
    setType () {
      let types = ['default', 'primary', 'success', 'warning', 'error']
      let index = types.indexOf(this.type)
      types.splice(index, 1)
      let randomIndex = Math.floor(Math.random() * 4)
      this.type = types[randomIndex]
    },
    setInverted () {
      this.inverted = !this.inverted
    }
  }
}
</script>

<style scoped>
  page {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background-color: #efeff4
  }

  div {
    font-size: 14px;
    line-height: inherit
  }

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
    border-bottom: 1px #f5f5f5 solid
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

  .example-body {
    padding: 10px 0;
  }

  .tag-div {
    margin: 5px 10px;
    display: inline-block;
  }
</style>
