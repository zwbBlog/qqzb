<template>
    <div class="navBar">
        <mt-navbar v-model="selected" class="navBar_list">
            <mt-tab-item id="1">课程预告</mt-tab-item>
            <mt-tab-item id="2">产品介绍</mt-tab-item>
            <mt-tab-item id="3">关于我们</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected" class="navBar_content">
            <mt-tab-container-item id="1" class="kcyg">
                <!-- 课程预告 -->
                <div v-for="(v,i) in foreList" :key="i" :class="'cl fore fore'+i"  v-show="foreList.length>0">
                  <img src="../assets/imgs/line.jpg" alt="" class="fl">
                  <div class="fl fore_content">
                    <p>{{v.date}}</p>
                    <p class="fore_title"><span class="qqzb_icon-ren"></span>{{v.title}}</p>
                    <p class="fore_time">时间：{{v.time}}</p>
                    <p class="fore_teacher">讲师：{{v.teacher}}</p>
                    <hr class="line">
                  </div>
                </div>
                <img v-show="!foreList.length>0" src="../assets/imgs/null.jpg" alt="" class="null">    
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <!-- 产品介绍 -->
                <div v-for="(v,i) in proList" :key="i" :class="'cl pro pro'+i">
                    <div class="fl pro_img">
                        <img src="../assets/imgs/pro.jpg" alt="">
                    </div>
                    <div class="fl pro_content">
                      <p class="pro_title">{{v.title}}</p>
                      <p class="pro_detail">{{v.detail}}</p>
                      <p class="pro_group">
                        <span>查看详情</span>
                        <span>立即订购</span>     
                      </p>
                    </div> 
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
              <div class="about"></div>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "1",
      proList: [
        {title:"疯狂牛股强势来袭击1",detail:"1111首席投顾队伍限量版制定产品，全球销量冠军。走过路过千万不要错过首席投顾队伍限量版制定产品，全球销量冠军。走过路过千万不要错过"},
        {title:"疯狂牛股强势来袭击2",detail:"2222首席投顾队伍限量版制定产品，全球销量冠军。走过路过千万不要错过首席投顾队伍限量版制定产品，全球销量冠军。走过路过千万不要错过"},
        {title:"疯狂牛股强势来袭击3",detail:"3333首席投顾队伍限量版制定产品，全球销量冠军。走过路过千万不要错过首席投顾队伍限量版制定产品，全球销量冠军。走过路过千万不要错过"},
        {title:"疯狂牛股强势来袭击4",detail:"4444首席投顾队伍限量版制定产品，全球销量冠军。走过路过千万不要错过首席投顾队伍限量版制定产品，全球销量冠军。走过路过千万不要错过"}
      ],
      foreList: [
        {
          date: "03月19日",
          title: "《年底翻身计划1》",
          time: "09:00 - 13:00",
          teacher: "夏老师"
        },
        {
          date: "03月19日",
          title: "《年底翻身计划2》",
          time: "13:00 - 14:00",
          teacher: "张老师"
        },
        {
          date: "03月19日",
          title: "《年底翻身计划3》",
          time: "14:00 - 16:00",
          teacher: "李老师"
        },
        {
          date: "03月19日",
          title: "《年底翻身计划4》",
          time: "16:00 - 18:00",
          teacher: "王老师"
        },
        {
          date: "03月19日",
          title: "《年底翻身计划5》",
          time: "18:00 - 24:00",
          teacher: "龚老师"
        }
      ]
    };
  },
  watch: {
    selected(newV, oldV) {
      document.getElementById("navBar").scrollTo(0, 0);
    }
  },
  mounted() {
    setInterval(() => {
      //this.selected=this.selected*1<3?String(Number(this.selected)+1):'1'
    }, 1000);
  }
};
</script>

<style scoped>
.navBar_content{
  font-size: 0.29rem;
}
/* 课程预告 */
.kcyg{
  padding-top: 0.3rem;
}
.kcyg .null {
  padding-right: 0.5rem;
  padding-top: 0.3rem;
}
.navBar_list {
  position: fixed;
  top: 7rem;
  width: 100%;
  height: 0.97rem;
  z-index: 5;
  border-bottom: 1px solid #ccc;
}

.mint-navbar {
  padding-bottom: 0.03rem;
}
.mint-navbar .mint-tab-item.is-selected {
  color: rgb(255, 100, 15);
}
.mint-tab-container-item {
  margin-top: 0.97rem;
  padding-left: 0.45rem;
}
.mint-cell {
  height: 2.2rem;
  border-bottom: 1px solid #ccc;
}
.mint-tab-container-item > div {
  height: 2.2rem;
}
.mint-tab-container-item > div > img {
  height: 100%;
}
.navBar_content .fore_content {
  width: 90%;
  height: 100%;
  margin-left: 0.3rem;
}
.navBar_content .fore_content > p {
  margin-top: 0.15rem;
  color: #ccc;
}
.navBar_content .fore_content > p:first-child {
  margin-top: 0;
}

.navBar_content .fore_content .fore_title {
  color: #000;
  font-size: 0.3rem;
}
.navBar_content .fore_content .fore_title > span {
  font-size: 0.4rem;
  vertical-align: middle;
}

.fore_time,
.fore_teacher {
  margin-left: 0.3rem;
}
.line {
  margin-top: 0.3rem;
  border: 0.01rem solid #ccc;
}


.pro {
  padding: 0.2rem 0;
  font-size: 0.3rem;
  border-bottom: 1px solid #ccc;
  overflow: hidden;
}
.pro:last-child{
  border-bottom:none
}
.pro_img {
  width: 20%;
  text-align: center;
}
.pro_img>img{
  width: 100%;
}
.pro_content {
  width: 80%;
  margin-top: 0.07rem;
  padding-left: 0.2rem;
}
.pro_content > P {
  margin-top: 0.1rem;
  font-size: 0.26rem;
  color: #ccc;
}
.pro_content  .pro_title {
  font-size: 0.32rem;
  font-weight: bold;
  color: #000;
}
.pro_detail {
  line-height: 0.4rem;
  width: 100%;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; 
  -webkit-box-orient: vertical; 
  -webkit-line-clamp: 2; 
  overflow: hidden; 
}
.pro_content .pro_group{
  margin-top: 0.2rem;
}
.pro_content .pro_group>span{
  margin-right: 0.3rem;
}
.pro_content .pro_group>span:last-child{
  border-left:1px solid #ccc;
  padding-left: 0.3rem;
  color: red
}
.mint-tab-container-item:last-child{
  padding-left: 0;
}
.mint-tab-container-item .about{
  height: 4.3rem;
  width: 100%;
  background: url('../assets/imgs/about.jpg') no-repeat center center;
  background-size: cover;
}
</style>
