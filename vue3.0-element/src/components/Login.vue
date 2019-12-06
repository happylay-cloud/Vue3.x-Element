<!--模板-->
<template>
  <div class="login_container">
     <!-- 登录盒子  -->
      <div class="login_box">
        <!-- 头像 -->
        <div class="avatar_box">
          <img src="../assets/logo.png" alt="">
        </div>
        <!-- 登录表单 -->
        <el-form ref="LoginFormRef" :model="loginForm" :rules="loginFormRules"  label-width="0px" class="login_form">
          <!-- 用户名 -->
          <el-form-item prop="username">
            <!--rules 属性传入约定的验证规则，并将 Form-Item 的 prop 属性设置为需校验的字段名-->
             <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
          </el-form-item>
          <!-- 密码 -->
           <el-form-item prop="password">
             <el-input type="password" v-model="loginForm.password" prefix-icon="iconfont icon-3702mima"></el-input>
          </el-form-item>
          <!-- 按钮 -->
           <el-form-item class="btns">
              <el-button type="primary"  @click="login">登录</el-button>
              <el-button type="info">重置</el-button>
           </el-form-item>
        </el-form>
      </div>
  </div>
</template>
<!--行为-->
<script>
export default {
  data () {
    return {
      // 数据绑定对象
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      loginFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$http.post('login', this.loginForm).then(
        response => (console.log(response.data))
      )
    }
  }
}
</script>
<!--样式-->
<style lang="less" scoped>
// 容器
.login_container {
  // 背景颜色
  background-color: #02142A;
  height: 100%;
  }
.login_box {
  width:  450px;
  height: 300px;
  // 背景颜色
  background-color: #fff;
  // 圆角
  border-radius: 5px;
  // 绝对定位
  position: absolute;
  // 左移
  left: 50%;
  // 上移
  top: 50%;
  // 对象进行平移
  transform: translate(-50%, -50%);
// 头像
.avatar_box {
    height: 130px;
    width: 130px;
    // 边框
    border: 1px solid #eee;
    // 圆角
    border-radius: 50%;
    // 内边距
    padding: 10px;
    // 隐形效果(x坐标，y坐标，模糊程度，颜色)
    box-shadow: 0 0 10px #ddd;
    // 位置
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}
// 登录表单
.login_form {
  position: absolute;
  // 底部边缘
  bottom: 0px;
  // 宽度
  width: 100%;
  // 内边距(上、右、下、左) (上、右或左) (上与下、右与左)
  padding: 0px 20px;
  // 盒子模型
  box-sizing: border-box;
}
// 登录按钮
.btns {
  // 弹性布局
  display: flex;
  // 元素在主轴（页面）上由右或者下开始排列
  justify-content: flex-end;
}
</style>
