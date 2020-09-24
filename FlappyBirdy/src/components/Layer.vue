<template>
  <div>
    <div class="describe">
      <div>
        <a href>
          <i class="iconfont icon-zhihu" style="font-size: 20px"></i>
        </a>
      </div>
      <div style="margin-left: 10px">
        <a href="https://github.com/Ricemonster/FlappyBirdy">
          <i class="iconfont icon-github"></i>
        </a>
      </div>
      <div style="margin-left: 20px" class="power">
        <span>power by </span>
        <i class="iconfont icon-vue"></i>
      </div>
    </div>
    <div class="homePage">
      <img
        style="margin-top: 200px; margin-bottom: 30px"
        src="../assets/images/title.png"
        alt
      />
      <img
        :style="{ top: nowHeight + 'px' }"
        :class="[move]"
        id="birdy"
        :src="nowImage ? require(`../assets/images/${nowImage}`) : ''"
        alt
      />
      <img
        style="margin-left: 20px"
        :class="[move]"
        id="birdy"
        :src="nowImage ? require(`../assets/images/${nowImage1}`) : ''"
        alt
      />
      <img
        style="margin-left: -100px; margin-top: -60px"
        :class="[move]"
        id="birdy"
        :src="nowImage ? require(`../assets/images/${nowImage2}`) : ''"
        alt
      />
      <div class="line">
        <img
          @click="startPlaying"
          style="margin-right: 30px"
          src="../assets/images/button_play.png"
        />
        <img src="../assets/images/button_score.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      // 向父组件传递游戏开始信号
      this.$emit("start", "true");
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
a {
  color: #fafafa;
  text-decoration: none;
}
a:hover {
  color: #00a0c6;
  text-decoration: none;
  cursor: pointer;
}
.describe {
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 0px;
  left: -30px;
  align-items: center;
  justify-content: center;
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
  animation: birdymove 1s linear;
}
.movebirdy1 {
  animation: birdymove1 1s linear;
}
/* 小鸟运动轨迹 */
@keyframes birdymove {
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
@keyframes birdymove1 {
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
.power {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.power i {
  color: #fafafa;
  font-size: 20px;
  padding-left: 10px;
}
.power span {
  padding-left: 10px;
  font-size: 19px;
  font-family: serif;
  font-weight: bold;
  color: #fafafa;
}
</style>