<template>
  <div id="register"> 
     <div class="top">
       <div class="banner">
         <div class="left">
            <img src="../assets/d-logo.png">
            欢迎注册
         </div>
         <div class="rigt">
            已有账号？
            <a href="">请登录</a>
         </div>
       </div>
     </div>
     <div class="cen">
       <div class="cen-left">
          <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
              <el-form-item label="用户名" prop="user">
                <el-input v-model.number="ruleForm2.user"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="手机号" prop="tel">
                <el-input type="text" v-model="ruleForm2.telNumber" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="获取验证码" prop="tel1">
                <el-input type="text" v-model="ruleForm2.tel1Number" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="验证手机" prop="tel2">
                <el-input type="text" v-model="ruleForm2.tel2Number" auto-complete="off"></el-input>
              </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
        </el-form>
        <div class="telnum"></div>
        <div class="telnum2">获取验证码</div>
       </div>
       <div class="cen-rigt">
          <div class="right">
             <div class="top">
               <i></i>
               企业用户注册
             </div>
             <div class="bot">
               <i></i>
               INTERNATIONAL
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
        ruleForm2: {
          pass: '',
          checkPass: '',
          user: '',
          tel: '',
          tel1:'',
          tel2:''
        },
        rules2: {
          pass: [
            { validator: this.validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: this.validatePass2, trigger: 'blur' }
          ],
          user: [
            { validator: this.checkUser, trigger: 'blur' }
          ],
          tel: [
            { validator: this.telNumber, trigger: 'blur' }
          ],
          tel1: [
            { validator: this.tel1Number, trigger: 'blur' }
          ],
          tel2: [
            { validator: this.tel2Number, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            //console.log('error submit!!');
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
          console.log(isOk);
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
      validatePass2(rule, value, callback){
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      },
      telNumber(rule, value, callback){
        var reg =/^1[3578][01379]\d{8}|1[34578][01256]\d{8}|(134[012345678]\d{7}|1[34578][012356789]\d{8})$/g;  
        var isOk = reg.test(value);
        console.log(reg);
        if (value == '') {
          callback(new Error('请输入手机号'));
          //console.log(1);
        } else if ( !isOk ){
          callback(new Error('格式错误，请输入正确的手机号'));
        } else {
          callback();
        }
      }
      ,
      tel1Number(rule, value, callback){
        if (value === '') {
          callback(new Error('请输入验证码'));
        }else if (value.length < 3 || value.length > 5) {
          callback(new Error('请输入正确的验证码!'));
        } else {
          callback();
        }
      },
      tel2Number(rule, value, callback){
        if (value === '') {
          callback(new Error('请输入手机验证码'));
        }else if (value.length < 5 || value.length > 7) {
          callback(new Error('请输入正确的手机验证码!'));
        } else {
          callback();
        }
      }
    }
  }
</script>

<style lang="scss" scope>
#register{
  width: 1329px;
  height: 690px;
  margin: 0 auto;
}
.top{
  width: 100%;
  height: 80px;
  background: #fff;
  border-bottom:1px solid gray;
   .banner{
      width:1215px;
      height: 80px;
      margin:0 auto;
      display: flex;
      justify-content: space-between;
      border-bottom:1px solid gray;
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
            a{
               color:#000;
               text-decoration: none;
            }
        }
   }
}
.cen{
  width: 100%;
  height: 570px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom:1px solid #ccc;
    .cen-left{
      width: 400px;
      height: 490px;
      position: relative;
        .telnum{
          position: absolute;
          width: 80px;
          height: 30px;
          background: #999;
          bottom:168px;
          right: 50px;
        }
        .telnum2{
          position: absolute;
          width: 80px;
          height: 30px;
          background: #999;
          bottom:102px;
          right: 50px;
          font-size: 14px;
          text-align: center;
          line-height: 30px;
        }
        form{
          width: 365px;
          margin: 25px 0 0 -8px;
            div{
              margin: 0 0 10px 0;
                button{
                   border:2px solid gray;
                   width: 120px;
                }
            }
        }
    }
    .cen-rigt{
      width: 281px;
      height: 490px;
      margin: 0 0 0 -320px;
      border-left: 1px solid gray;
        .right{
            width: 245px;
            height: 190px;
            margin: 20px 0 0 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction:column;
              div{
                width: 200px;
                height: 85px;
                line-height: 80px;
              }
              div:nth-of-type(1){
                border-bottom:1px solid #ccc;
                  i{
                    background: url(../assets/icon.png) 0 -45px;
                    width: 38px;
                    height: 34px;
                    display: inline-block;
                    margin: 0 0 -8px 0;
                  }
              }
              div:nth-of-type(2){
                i{
                  background: url(../assets/icon.png) -45px -45px;
                  width: 38px;
                  height: 34px;
                  display: inline-block;
                  margin: 0 0 -8px 0;
                }
              }
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