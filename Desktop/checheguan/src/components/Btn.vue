<template>
  <div class="Btn">
    <div>
      <img :src="Site" />
    </div>
    <span>{{itmes}}</span>
  </div>
</template>

<script>

export default {
  name: "Btn",
  props: {
    itmes: String,
    Site: String
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.Btn {
  display: flex;
  justify-content: center;
  background-image: linear-gradient(to right, #f09f48 , #d9733b);
  color: #fff;
  height: 8vh;
  width: 70%;
  margin: 3vh auto;
  border-radius: 30px;
}
.Btn > div {
  width: 8vw;
  height: 4vh;

 
}
.Btn > div > img {
  
}
.Btn > span {
  line-height: 8vh;
  padding-left: 2vw;
}
</style>
