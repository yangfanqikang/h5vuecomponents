<template>
    <div class="china-colors">
      <h3>中国色</h3>
      <div class="content">
        <h4>白</h4>
        <div class="white-class">
          <div v-for="(item,index) in whites" :class="'item-'+ (index + 1)" :key="index">
            {{item}} {{index + 1}}
          </div>
        </div>
        <h4>渐变</h4>
        <div class="gradient-class">
          <div>渐变</div>
        </div>
      </div>
      <div>
        <h1>1</h1>
        <h2>1</h2>
        <h3>1</h3>
        <h4>1</h4>
        <h5>1</h5>
        <h6>1</h6>
      </div>
    </div>
</template>

<script>
export default {
  name: 'china',
  data () {
    return {
      whites: ['银白色', '铅白色', '霜色', '雪白', '莹白色', '象牙白', '缟素', '鱼肚白', '白粉', '荼白色', '素']
    }
  }
}
</script>

<style lang="scss" scoped>
  .color-block{
    height: 60px;
    width: 60px;
    text-align: center;
    line-height: 60px;
    border-radius: 5px;
    margin-bottom: 15px;
    border: 1px solid darken($yinbai, 5%); /*no*/
    box-shadow: $shadow-down;
  }
.china-colors{
  padding: 0 15px;
  box-sizing: border-box;
  .content{
    .white-class{
      display: flex;
      justify-content: space-between;
      flex-flow: row wrap;
      >div{
        @extend .color-block
      }
      @for $i from 1 to length($whiteList)+1 {
        .item-#{$i} {
          background-color: nth($whiteList, $i);
        }
      }
    }
    .gradient-class{
      >div{
        height: 60px;
        background: gradient-name(135deg,#ee9ca7, 0, #ffdde1, 100%);
      }
    }
  }
}
</style>
