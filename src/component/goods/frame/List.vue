<template>
  <div>

    <div class="section" v-for="item in goodsList" :key="item.level1cateid">

      <!--子类-->
      <div class="main-tit">
        <h2>{{item.catetitle}}</h2>
        <p>
        <span v-for="leve in item.level2catelist" :key="leve.subcateid">

           <router-link :to="{name:'gd',params:{id:leve.subcateid}}">{{leve.subcatetitle}}</router-link>
        </span>
       

          <a href="/goods/40.html">更多
            <i>+</i>
          </a>
        </p>
      </div>
      <!--/子类-->
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <ul class="img-list">

            <li v-for="data in item.datas" :key="data.artID">
            <router-link  :to="{name:'gd',params:{id:data.artID}}">
           
                <div class="img-box">
                  <img :src="data.img_url">
                </div>
                <div class="info">
                  <h3>{{data.artTitle}}</h3>
                  <p class="price">
                    <b>{{data.sell_price}}</b>元</p>
                  <p>
                    <strong> 库存&nbsp;{{data.stock_quantity}}</strong>
                    <span>市场价：
                      <s>{{data.market_price}}</s>
                    </span>
                  </p>
                </div>
               </router-link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsList: []
    };
  },
  methods: {
    getGoodsGroup() {
      this.$http.get(this.$api.goodsContent).then(rsp => {
        this.goodsList = rsp.data.message;
        console.log(rsp.data.message);
      });
    }
  },
  created() {
    this.getGoodsGroup();
  }
};
</script>

<style scoped>

</style>