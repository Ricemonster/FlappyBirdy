<template>
  <div class="map" @click="mapClick">
    <Readdy v-if="start" />
    <div
      v-if="exist"
      :class="[move]"
      :style="{ backgroundPositionX: birdX + 'px', top: nowHeight + 'px' }"
    ></div>
    <!-- top: nowHeight + 'px' -->
  </div>
</template>

<script>
import Readdy from "./Readdy";
export default {
  props: {},
  data() {
    return {
      birdX: 0,
      move: "",
      nowHeight: 270,
      start: true,
      exist: true, // 小鸟的存在与否
    };
  },
  components: { Readdy },
  mounted() {
    let timerId = window.setInterval(this.birdyDown, "1000");
    let inciteID = window.setInterval(this.incite, "300");
  },
  methods: {
    // 开始时候维持上下移动
    birdyDown() {
      // 为了循环动画
      if (this.move == "") {
        this.move = "birdCage";
      } else if (this.move == "birdCage") {
        this.move = "birdCage1";
      } else if (this.move == "birdCage1") {
        this.move = "birdCage";
      }
    },
    // 切换图片，鸟不断扇翅膀的状态
    incite() {
      if (this.birdX == 0) {
        this.birdX = -50;
      } else if (this.birdX == -50) {
        this.birdX = -100;
      } else if (this.birdX == -100) {
        this.birdX = 0;
      }
    },
    mapClick() {
      // 开始维持下落
      if (this.start == true) {
        this.move = "flight";
        this.start = false;
        this.pageDown = window.setInterval(this.down, "10");
      } else {
        // 点击的要求是小鸟向上飞行，短暂的消除定时器，到达一个高点后继续下落
        clearInterval(this.pageDown); // 清除定时器
        this.nowHeight += -40;
      }
    },
    // 不断的下落
    down() {
      this.nowHeight += 1;
      console.log(this.nowHeight);
      if (this.nowHeight > 500 && this.nowHeight < 0) {
        // 触发到底部去往失败页面
        clearInterval(this.pageDown);
        this.exist = false;
      }
    },
  },
};
</script>

<style scoped>
.body,
html {
  overflow: hidden;
}
.map {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
}
.birdCage {
  position: absolute;
  background: red;
  /* 3个鸟每个50px */
  min-width: 50px;
  min-height: 80px;
  left: 150px;
  background: url("../assets/images/bird.png") no-repeat;
  animation: topmove 1s linear;
}
.birdCage1 {
  position: absolute;
  background: red;
  /* 3个鸟每个50px */
  min-width: 50px;
  min-height: 80px;
  left: 150px;
  background: url("../assets/images/bird.png") no-repeat;
  animation: topmove1 1s linear;
}
.flight {
  position: absolute;
  min-width: 50px;
  min-height: 80px;
  left: 150px;
  background: url("../assets/images/bird.png") no-repeat;
}
</style>