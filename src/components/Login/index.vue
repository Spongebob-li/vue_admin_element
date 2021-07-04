<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../../assets/logo.png" alt="" />
      </div>
      <el-form
        ref="loginFormRef"
        class="login_from"
        :model="loginForm"
        :rules="rules"
      >
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="el-icon-s-tools"
            type="password"
          ></el-input>
        </el-form-item>

        <el-form class="byns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="reset">重置</el-button>
        </el-form>
      </el-form>
    </div>
  </div>
</template>

<script>
import apiLogin from "@/request/login";
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "123456",
      },
      rules: {
        username: [
          { required: true, message: "请输入登录名称", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    reset() {
      this.$refs.loginFormRef.resetFields();
    },
    login() {
      let _this = this;
      _this.$refs.loginFormRef.validate((valid) => {
        if (!valid) return;
        apiLogin.apiLogin(_this.loginForm).then(res => {
          if(res.data.meta.status !== 200 ) return this.$message.errormessage('登录失败，'+ res.data.meta.msg);
          this.$message.success('登录成功');
          this.$router.push("/home")
        });
      });
    },

  },
};
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b5b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    background-color: #fff;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}
.login_from {
  position: absolute;
  bottom: 20px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.byns {
  display: flex;
  justify-content: flex-end;
}
</style>