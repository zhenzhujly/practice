<template>
  <div id="enroll"> 
     <div class="top">
       <div class="banner">
         <div class="left">
            <img src="../assets/d-logo.png">
            欢迎登录
         </div>
         <div class="rigt">
            <img src="../assets/d-q-icon.png">
            登录页面，调查问卷
         </div>
       </div>
       <div class="char">
         <img src="">
         依据《网络安全法》，为保障您的账户安全和正常使用，请尽快完成手机号验证！ 新版
         <a href="">《京东隐私政策》</a>
         已上线，将更有利于保护您的个人隐私。
       </div>
     </div>
     <div class="cen">
       <div class="cen-bag">
          <div class="rig">
             <div class="rig-top">
                <div class="one">扫码登录</div>
                <div>账户登录</div>
             </div>
             <div class="rig-cen">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                   <el-form-item label="用户名" prop="user">
                    <el-input v-model="ruleForm.user"></el-input>
                  </el-form-item>
                  <el-form-item label="密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                  </el-form-item>
                </el-form>
             </div>
             <div class="bots">
                <div class="qq box">
                  <span></span>
                  QQ
                </div>
                <span>丨</span>
                <div class="wx box">
                  <span></span>
                  微信
                </div>
                <div class="rigs" onkeyup="isUser()">
                  <span></span>
                  立即注册
                </div>
          </div>
          </div>
       </div>
     </div>
     <div class="bottom">
        <div class="base">
        <a href="">关于我们</a>丨
        <a href="">联系我们</a>丨
        <a href="">人才招聘</a>丨
        <a href="">商家入驻</a>丨
        <a href="">广告服务</a>丨
        <a href="">手机京东</a>丨
        <a href="">友情链接</a>丨
        <a href="">销售联盟</a>丨
        <a href="">京东社区</a>丨
        <a href="">京东公益</a>丨
        <a href="">English Site</a>
        </div>
        <p>Copyright © 2004-2017  京东JD.com 版权所有</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          user: '',
          checkPass: ''
        },
        rules: {
          user: [
            { validator: this.checkUser, trigger: 'blur' },
          ],
          checkPass: [
            { validator: this.validatePass, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (!valid) {
            console.log(valid);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      checkUser(rule, value, callback){
          var re=/^[-_a-zA-Z0-9\u4e00-\u9fa5]{4,20}$/g;
          var isOk=re.test(value);
          if (value === '') {
            callback(new Error('请输入用户名'));
          } else if ( value.length < 4 || value.length > 20){
            callback(new Error('请输入长度为4-20字符的用户名'));
          } else if ( !isOk ){
            callback(new Error('格式错误，仅支持汉字、字母、数字、“-”“_”的组合'));
          } else {
            callback();
          }
        },
        validatePass(rule, value, callback){
          if (value === '') {
            callback(new Error('请输入密码'));
          } else if (value.length < 6 || value.length > 20) {
            callback(new Error('请输入正确的密码!'));
          } else {
            callback();
          }
        },
     }
  }
</script>
<style lang="scss" scope>
#enroll{
  width: 1329px;
  height: 670px;
  margin: 0 auto;
}
.top{
  width: 100%;
  height: 95px;
  background: #fff;
   .banner{
      width:1000px;
      height: 70px;
      margin:0 auto;
      display: flex;
      justify-content: space-between;
        .left{
          width: 400px;
          height: 70px;
          font-size: 30px;
            img{
               margin: 0 15px 0 0;
            }
        }
        .rigt{
          width: 165px;
          height: 25px;
          margin: 45px 0 0 0;
          font-size: 14px;
          color: #999;
            img{
               margin: 0 5px 0 0;
            }
        }
   }
   .char{
      width: 100%;
      height: 25px;
      background: #FFAEB9;
      font-size: 12px;
      color:orange;
      display: flex;
      align-items: center;
      justify-content: center;
        a{
          text-decoration: none;
          color:#000;
        }
   }
}
.cen{
  width: 100%;
  height: 475px;
  background: #e93854;
    .cen-bag{
       width: 990px;
       height: 475px;
       background-size: cover;
       background: url(../assets/d-c.png);
       margin: 0 auto;
       display: flex;
       justify-content: space-between;
       align-items: center;
       flex-direction: row-reverse;
         .rig{
            width: 346px;
            height: 341px;
            background: #fff;
            margin: 0 40px 0 0px;
              .rig-top{
                width: 100%;
                height: 55px;
                // background: #a24533;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid gray;  
                  div{
                    width: 170px;
                    height: 30px;
                    // background: #b72137;
                    font-size: 18px;
                    text-align: center;
                    line-height: 30px;
                  }
                  div:nth-of-type(1){
                    border-right:1px solid gray;
                  }
                  div:nth-of-type(2){
                    font-size: 23px;
                    color: #e4393c;
                    font-weight: 700;
                  }
              }
              .rig-cen{
                 width: 100%;
                 height: 250px;
                 // background: #c27e26;
                 display: flex;
                 justify-content: center;
                 align-items: center;
                  form{
                    margin: 0 0 0 -60px;
                  }
              }
         }
    }
}
.bots{
  width: 100%;
  height: 50px;
  background:#f4f4f4;
    .box{
        width: 55px;
        height: 20px;
        /*background:#c27;*/
        color:#999;
        font-size: 14px;
        margin: 10px 0 0 0;
        display: inline-block;
        line-height: 20px;
           span{
            display: inline-block;
            background:url(../assets/QQ-weixin.png);
            width: 20px;
            height: 18px;
            margin: 4px 0 -3px 3px;
          }
      }
      .wx span{
        background:url(../assets/QQ-weixin.png) 20px 0;
      }
      .rigs{
        width: 100px;
        height: 50px;
        color: #E4393C;
        margin: -25px 0 0 auto;
           span{
            display: inline-block;
            background: url(../assets/d-icons-new.png) 20px 102px;
            width:21px;
            height: 19px;
          }
      }
}
.bottom{
  width: 1330px;
  height:100px;
  background: #fff;
  color: #666;
  font-size: 14px;
    .base{
        width: 935px;
        height: 20px;
        /*background: blue;*/
        display: inline-block;
        margin: 30px 0 0 245px;
          a{
            text-decoration: none;
            color: #666;
          }
      }
      p{
        margin: 0 0 0 505px;
      }
}
</style>