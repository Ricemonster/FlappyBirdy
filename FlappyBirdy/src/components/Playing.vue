<template>
  <div class="map" @click="mapClick">
    <Readdy v-if="start" />
    <div
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
    };
  },
  components: { Readdy },
  mounted() {
    let timerId = window.setInterval(this.birdyDown, "1000");
    let inciteID = window.setInterval(this.incite, "300");
  },
  methods: {
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
      this.start = false;
      this.move = "flight";
      this.nowHeight += -40;
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