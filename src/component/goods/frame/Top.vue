<template>
  <div class="section">
    <div class="wrapper">
      <div class="wrap-box">
        <!--类别菜单-->
        <div class="left-220" style="margin:0;">
          <div class="banner-nav">
            <ul>
              <!--此处声明下面可重复循环-->

              <li v-for="item in topData.catelist" :key="item.id">
                <h3>
                  <i class="iconfont icon-arrow-right"></i>
                  <span>{{item.title}}</span>
                  <p>
                    <span v-for="subitem in item.subcates" :key="subitem.id">
                      {{subitem.title}}
                    </span>
                  </p>
                </h3>
                <!-- 鼠标hover的时候会展示这个盒子, 该盒子以递归的形式展示所有的分类商品 -->
                <div class="item-box">
                  <!--如有三级分类，此处可循环-->
                  <dl>
                    <dt>
                      <router-link :to="{name:'gd',params:{id:item.id}}">{{item.title}}</router-link>
                      <!-- <a href="/goods/40.html">{{item.title}}</a> -->

                    </dt>
                    <dd>
                       <!-- 封装一个展示菜单列表的组件, 父这里把列表数据传递过去 -->
                      <app-menu :menu="item.subcates"></app-menu>
                      <!-- <router-link :to="{name:'gd',params:{id:item.id}}" v-for="subitem in item.subcates" :key="subitem.id"> {{subitem.title}}</router-link> -->
                      <!-- <a href="/goods/43.html" v-for="subitem in item.subcates" :key="subitem.id">
                                        {{subitem.title}}
                                        </a> -->

                    </dd>
                  </dl>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!--/类别菜单-->

        <!--幻灯片-->
        <div class="left-705">
          <div class="banner-img">
            <el-carousel indicator-position="outside">
              <el-carousel-item v-for="item in topData.sliderlist" :key="item.id">
                <h3>{{item.title}}</h3>
               <img :src="item.img_url" alt="">
              </el-carousel-item>
            </el-carousel>

          </div>
        </div>
        <!--/幻灯片-->

        <!--推荐商品-->
        <div class="left-220">
          <ul class="side-img-list">

            <li v-for="item in topData.toplist" :key="item.id">
              <div class="img-box">
                <label>1</label>
                <img :src="item.img_url">
              </div>
              <div class="txt-box">
                <router-link :to="{name:'gd',params:{id:item.id}}">{{item.title}}</router-link>
                <!-- <a href="/goods/show-98.html">奔腾（BNTN） 380功放+纽约至尊 套装家庭影院</a> -->
                <span>{{item.add_time|date}}</span>
              </div>
            </li>

         
          </ul>
        </div>
        <!--/推荐商品-->
      </div>
    </div>
  </div>
</template>

<script>
import MenuConponent from "./Menu.vue";
export default {
  data() {
    return {
      topData: {
        toplist: [],
        sliderlist: [],
        catelist: []
      }
    };
  },

  methods: {
    //top 数据
    getTopData() {
      this.$http.get(this.$api.goodsTop).then(rsp => {
        // console.log(rsp.data.message);
        this.topData = rsp.data.message;
      });
    },
   
  },
  created() {
    this.getTopData()
  },
  components:{
    appMenu:MenuConponent,
  }
};
</script>

<style scoped>
   .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    /* line-height: 300px; */
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
