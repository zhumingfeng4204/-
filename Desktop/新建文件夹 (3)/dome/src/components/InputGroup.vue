<template>
  <div class="Input">
    <div class="Inputbody">
      <!-- 图标 -->
      <div>
        <img :src="ico" />
      </div>
      <input
        v-if="lab"
        type="text"
        :placeholder="placeholder"
        @input="$emit('input',$event.target.value)"
      />

      <div v-else v-for="(item,index) in itmes" :key="index" @click="check=index">
        <span :class="{'check':check==index}">{{item}}</span>
      </div>
      <i v-if="errors">{{errors}}</i>

      <i v-if="!lab">*每个账号仅可选择一个身份</i>

      <button
        v-if="btnTitle"
        class="Button"
        @click="$emit('btnClick')"
        :disabled="disabled"
      >{{btnTitle}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    placeholder: String,
    ico: String,
    btnTitle: String,
    error: String,
    lab: Boolean,
    disabled: Boolean,
    errors: String
  },
  data() {
    return {
      itmes: ["司机", "货主"],
      check: 0
    };
  },
  methods: {}
};
</script>

<style scoped>
.Input {
  width: 100vw;
  height: 6vh;
  outline: none;

  /* display: flex;
  
  justify-content:center; */
}
.Inputbody {
  margin: 2vh auto 2vh auto;
  height: 100%;
  width: 80vw;
  display: flex;
  border-bottom: 1px solid #ccc;
}
.Inputbody > div > img {
  width: 6vw;
  height: 5vh;
  background: #000;
  flex: 1;
}
.Inputbody > input {
  outline: none;
  font-size: 3vw;
  border: none;
  /* height: 100%; */
  flex: 1;
  padding-left: 3vw;
  width: 100%;
}
.Button {
  /* background: #000; */
  /* flex: 1; */
  width: 25vw;

  height: 4vh;
  font-size: 3vw;
  text-align: center;

  border: rgb(254, 146, 45) solid 1px;
  border-radius: 30px;
  background: #fff;
  outline: none;
}
.Inputbody > div > span {
  width: 13vw;
  height: 4vh;
  line-height: 4vh;
  /* background: blue; */
  border-radius: 30px;
  display: block;
  margin-top: 0.3vh;
  margin-left: 1vh;
  border: #ccc solid 1px;
  text-align: center;
  font-size: 3vw;
}
.check {
  background-image: linear-gradient(to right, #f09f48, #d9733b);
  color: #fff;
  border: none;
}
.Inputbody > i {
  font-size: 3vw;
  color: rgb(254, 146, 45);
  line-height: 4.6vh;
  padding-left: 1vw;
}
</style>
