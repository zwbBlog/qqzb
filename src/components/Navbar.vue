<template>
    <div class="navBar">
        <mt-navbar v-model="selected" class="navBar_list">
            <mt-tab-item id="1">课程预告</mt-tab-item>
            <mt-tab-item id="2">产品介绍</mt-tab-item>
            <mt-tab-item id="3">关于我们</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected" class="navBar_content">
            <mt-tab-container-item id="1">
                <mt-cell v-show="foreshow.length>0" v-for="n in foreshow" :title="'内容 ' + n"  :key="n"/>
                <img v-show="!foreshow.length>0" src="../assets/imgs/null.jpg" alt="" style="padding-right:0.5rem;padding-top:0.5rem">    
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell v-for="n in 20" :title="'测试 ' + n"  :key="n"/>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <mt-cell v-for="n in 6" :title="'选项 ' + n"  :key="n"/>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "1",
      foreshow: []
    };
  },
  watch: {
    selected(newV, oldV) {
      document.getElementById('navBar').scrollTo(0,0);
    }
  }
};
</script>

<style scoped>
.navBar_list {
  position: fixed;
  top: 7rem;
  width: 100%;
  height: 0.97rem;
  z-index: 5;
  border-bottom: 1px solid #ccc;
}
.navBar_content {
  /* border-top: 1px solid #ccc; */
}
.mint-navbar {
  padding-bottom: 0.03rem;
}
.mint-navbar .mint-tab-item.is-selected {
  color: rgb(255, 100, 15);
  font-size: 0.29rem;
}
.mint-tab-container-item {
  margin-top: 0.97rem;
  padding-left: 0.65rem;
}
.mint-cell {
  height: 2.2rem;
  border-bottom: 1px solid #ccc;
}
.mint-cell:last-child {
  border-bottom: none;
}

</style>
