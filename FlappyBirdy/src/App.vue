<template>
  <div style="overflow: hidden">
    <Background style="position: relative" />
    <Layer
      v-if="!start"
      @start="startPlaying"
      style="position: absolute; left: 50px; top: 20px"
    />
    <Playing v-else />
  </div>
</template>

<script>
import Background from "./components/Background";
import Layer from "./components/Layer";
import Playing from "./components/Playing";
export default {
  name: "App",
  components: { Background, Layer, Playing },
  data() {
    return {
      start: false, // 默认为false
      right: false, // 开始游戏
    };
  },
  methods: {
    // 开始
    startPlaying(message) {
      if (message == "true") {
        this.start = true;
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
</style>
