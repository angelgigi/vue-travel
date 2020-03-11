<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li v-for="item in recommendList" :key="item.id" class="item border-bottom">
        <div class="item-img-wrapper"><img class="item-img" :src="item.imgUrl" /></div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
          title: "故宫",
          desc: "东方宫殿建筑代表，世界宫殿建筑典范"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
          title: "南山滑雪场",
          desc: "东方宫殿建筑代表，世界宫殿建筑典范"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
          title: "天安门广场",
          desc: "东方宫殿建筑代表，世界宫殿建筑典范"
        },
        {
          id: "0004",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
          title: "水立方",
          desc: "东方宫殿建筑代表，世界宫殿建筑典范"
        },
        {
          id: "0005",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
          title: "温度水城养生馆",
          desc: "东方宫殿建筑代表，世界宫殿建筑典范"
        },
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.09%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>