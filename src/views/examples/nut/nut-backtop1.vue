<template>
  <page class="back-top-demo" :title="this.$route.query.name">
    <h3>《再别康桥》</h3>
    <p>徐志摩</p>
    <p>轻轻的我走了，正如我轻轻的来；</p>
    <p>我轻轻的招手，作别西天的云彩。</p>
    <p>那河畔的金柳，是夕阳中的新娘；</p>
    <p>波光里的艳影，在我的心头荡漾。</p>
    <p>软泥上的青荇，油油的在水底招摇；</p>
    <p>在康桥的柔波里，</p>
    <p>我甘心做一条水草！</p>
    <p>那榆荫下的一潭，</p>
    <p>不是清泉，是天上虹</p>
    <p>揉碎在浮藻间，沉淀着彩虹似的梦。</p>
    <p>寻梦？撑一支长蒿，</p>
    <p>向青草更青处漫溯，</p>
    <p>满载一船星辉，在星辉斑斓里放歌。</p>
    <p>但我不能放歌，悄悄是别离的笙箫；</p>
    <p>夏虫也为我沉默，沉默是今晚的康桥！</p>
    <p>悄悄的我走了，正如我悄悄的来；</p>
    <p>我挥一挥衣袖，不带走一片云彩。</p>

    <h3>《乡愁》</h3>
    <p>余光中</p>
    <p>小时侯</p>
    <p>乡愁是一枚小小的邮票</p>
    <p>我在这头</p>
    <p>母亲在那头</p>
    <p>长大后</p>
    <p>乡愁是一张窄窄的船票</p>
    <p>我在这头</p>
    <p>新娘在那头</p>
    <p>之后呵</p>
    <p>乡愁是一方矮矮的坟墓</p>
    <p>我在外头</p>
    <p>母亲呵在里头</p>
    <p>而此刻</p>
    <p>乡愁是一湾浅浅的海峡</p>
    <p>我在这头</p>
    <p>大陆在那头</p>

    <h3>《盼望》</h3>
    <p>席慕容</p>
    <p>其实我盼望的</p>
    <p>也但是就只是那一瞬</p>
    <p>我从没要求过你给我</p>
    <p>你的一生</p>
    <p>如果能在开满了栀子花的山坡上</p>
    <p>与你相遇如果能</p>
    <p>深深地爱过一次再别离</p>
    <p>那麽再长久的一生</p>
    <p>不也就只是就只是</p>
    <p>回首时</p>
    <p>那短短的一瞬</p>
    <nut-backtop @click="handleClick"></nut-backtop>
  </page>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },
  methods: {
    handleClick () {
      console.log('触发回到顶部')
    }
  }
}
</script>

<style lang="scss" scoped>
.back-top-demo {
  height: 1600px;
  line-height: 2;
  text-align: center;
  p {
    font-size: 14px;
  }
}
</style>
