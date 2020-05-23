<template>
  <div class="Dow">
    <div class="Headder"></div>
    <van-button round type="info" class="iPhoneDow">iPhone下载</van-button>
    <van-button round type="info">Android下载</van-button>
  </div>
</template>

<script>
import { Button } from "vant";
const Btn = () => import("../components/Btn");
export default {
  name: "Download",
  components: { Btn, Button },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.Dow {
  height: 100vh;
  width: 100vw;
}
.Headder {
  height: 30vh;
  width: 100%;
  background: blue;
  bg
}
.iPhoneDow{
  
}
</style>