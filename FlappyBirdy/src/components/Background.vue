<template>
    <div id="app">
    <!-- 基础场景 -->
    <img src="../assets/images/land.png" alt />
  </div>
</template>

<script>
export default {

}
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  background: url("../assets/images/bg_day.png") no-repeat;
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
</style>