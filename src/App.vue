<template>
  <div id="app">
    <Describe class="des" />
    <!-- 基础场景 -->
    <img src="./assets/images/land.png" alt />
    <div class="homePage">
      <img style="margin-top:200px;margin-bottom:30px;" src="./assets/images/title.png" alt />
      <img
        :style="{top:nowHeight+'px'}"
        :class="[move]"
        id="birdy"
        :src="nowImage ? require(`./assets/images/${nowImage}`) : ''"
        alt
      />
      <img
        style="margin-left:20px;"
        :class="[move]"
        id="birdy"
        :src="nowImage ? require(`./assets/images/${nowImage1}`) : ''"
        alt
      />
      <img
        style="margin-left:-100px;margin-top:-60px"
        :class="[move]"
        id="birdy"
        :src="nowImage ? require(`./assets/images/${nowImage2}`) : ''"
        alt
      />
      <div class="line">
        <img @click="startPlaying" style="margin-right:30px;" src="./assets/images/button_play.png" />
        <img src="./assets/images/button_score.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
import Describe from "./components/Describe";
let _ = require("lodash");
export default {
  name: "App",
  components: { Describe },
  data() {
    return {
      start: false,
      nowHeight: 0,
      nowImage: "bird1_0.png",
      nowImage1: "bird0_0.png",
      nowImage2: "bird2_0.png",
      move: "",
    };
  },
  mounted() {
    // 三只鸟一起飞
    let timerId = window.setInterval(this.birdyDown, "1000");
    let timerId1 = window.setInterval(this.birdyDown1, "1000");
    let timerId2 = window.setInterval(this.birdyDown2, "1000");
  },
  methods: {
    startPlaying() {
      this.HomeBidrdState = 1;
    },
    birdyDown() {
      if (this.move == "") {
        this.move = "movebirdy";
        this.nowImage = "bird1_1.png";
      } else if (this.move == "movebirdy") {
        this.move = "movebirdy1";
        this.nowImage = "bird1_2.png";
      } else if (this.move == "movebirdy1") {
        this.move = "movebirdy";
        this.nowImage = "bird1_0.png";
      }
    },
    birdyDown1() {
      if (this.move == "") {
        this.move = "movebirdy";
        this.nowImage1 = "bird0_1.png";
      } else if (this.move == "movebirdy") {
        this.move = "movebirdy1";
        this.nowImage1 = "bird0_2.png";
      } else if (this.move == "movebirdy1") {
        this.move = "movebirdy";
        this.nowImage1 = "bird0_0.png";
      }
    },
    birdyDown2() {
      if (this.move == "") {
        this.move = "movebirdy";
        this.nowImage2 = "bird2_1.png";
      } else if (this.move == "movebirdy") {
        this.move = "movebirdy1";
        this.nowImage2 = "bird2_2.png";
      } else if (this.move == "movebirdy1") {
        this.move = "movebirdy";
        this.nowImage2 = "bird2_0.png";
      }
    },
  },
};
</script>

<style>
.des {
  position: absolute;
  top: 20px;
  left: 20px;
}
body,
html {
  overflow: hidden;
  height: 100%;
  width: 100%;
}
#app {
  width: 100vw;
  height: 100vh;
  background: url("./assets/images/bg_day.png") no-repeat;
  background-size: cover;
  position: relative;
}
#app > img {
  width: 700px;
  position: absolute;
  bottom: 0px;
  max-height: 130px;
  animation: slidermove 3s infinite linear;
}
@keyframes slidermove {
  0% {
    left: 0;
  }
  100% {
    left: -300px;
  }
}
.homePage {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.homePage .line {
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
/* 小鸟 */
#birdy {
  position: relative;
}
.movebirdy {
  animation: topmove 1s linear;
}
.movebirdy1 {
  animation: topmove1 1s linear;
}
/* 小鸟运动轨迹 */
@keyframes topmove {
  0% {
    top: 0;
  }
  50% {
    top: -30px;
  }
  100% {
    top: 0;
  }
}
@keyframes topmove {
  0% {
    top: 0;
  }
  50% {
    top: -30px;
  }
  100% {
    top: 0px;
  }
}
</style>
