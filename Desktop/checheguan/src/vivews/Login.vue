<template>
  <div class="Login">
    <div class="LoginHeder">
      Login
    </div>
    <div>
      <InputGroup :lab="true" placeholder="6666(邀请人金牌号)" v-model="inviterNumber" />
      <InputGroup :lab="true" placeholder="请输入手机号码" v-model="phone" />
      <InputGroup
        :lab="true"
        placeholder="请输入验证码"
        v-model="verifyCode"
        :btnTitle="btnTitle"
        :disabled="disabled"
        @btnClick="getVerifyCode"
      />
      <InputGroup :lab="false" />
    </div>
    <div class="login_btn">
      <button>立即注册</button>
    </div>
    <div class="login_des">
      <p>
        注册即表示您同意
        <span @click="$router.push('/Protocol')">《司机服务协议》</span>及
        <span @click="$router.push('/Clause')">《隐私条款》</span>
      </p>
    </div>
  </div>
</template>

<script>
const InputGroup = () => import("../components/InputGroup");
export default {
  name: "",
  components: {
    InputGroup
  },
  data() {
    return {
      // 邀请人金牌号
      inviterNumber: "",
      // 输入手机号码
      phone: "",
      // 输入验证码
      verifyCode: "",
      btnTitle: "获取验证码",
      disabled:false,
      errors:{}
    };
  },
  methods: {
    getVerifyCode() {
      if (this.validatePhone()) {
        // 发送网络请求获取验证码
      }
    },
    validatePhone() {
      let time = 60;
      let timer = setInterval(() => {
        if (time == 0) {
          clearInterval(timer);
          this.btnTitle = "获取验证码";
          this.disabled = false;
        } else {
          // 倒计时
          this.btnTitle = time + "秒后重试";
          this.disabled = true;
          time--;
         
        }
      }, 1000);
    }
  }
};
</script>

<style scoped>
.LoginHeder {
  width: 100vw;
  height: 30vh;
  background: blue;
}
.login_btn {
  margin-top: 8vw;
  margin-left: 16vw;
}
.login_btn button {
  width: 80%;
  height: 10vw;
  background: rgb(254, 146, 45);
  /* background-image: linear-gradient(to-left, rgb(255, 155, 29), rgb(233, 180, 14) ); */
  border-radius: 4px;
  color: white;
  font-size: 4vw;
  border: none;
  outline: none;
  border-radius: 30px;
}
.login_des {
  width: 80%;
  color: #aaa;
  line-height: 22px;
  font-size: 3vw;
  margin: 2vh auto;
}
.login_des > p {
  text-align: center;
}
.login_des > p > span {
  font-weight: 900;
  color: #000;
}
</style>
