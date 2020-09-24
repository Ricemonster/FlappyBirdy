<template>
  <div class="layer">
    <img class="getReady" src="../assets/images/text_ready.png" alt="" />
    <img class="topClick" src="../assets/images/tutorial.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "Readdy",
};
</script>

<style scoped>
.layer {
  position: absolute;
  top: 180px;
  left: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.getReady {
  position: absolute;
}
.topClick {
  position: absolute;
  top: 80px;
  left: 50px;
}
</style>