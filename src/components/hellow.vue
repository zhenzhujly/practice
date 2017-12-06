<template>
  <div id="hellow"> 
    <button @click="enroll">登录</button>
    <button @click="register">注册</button>
  </div>
</template>

<script>

export default {
  name: 'hellow',
  data () {
    return {
      
    }
  },
  methods:{
    enroll(){
      this.$router.push({
        name:'enroll',
      })
    },
    register(){
      this.$router.push({
        name:'register',
      })
    }
  },
  mounted(){

  }
}
</script>
<style lang="scss" scope>
 #hellow{
  width: 800px;
  height: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-flow:row nowrap;
  align-items: center;
    button{
      width: 200px;
      height: 200px;
      border-radius: 20%;
      font-size: 35px;
      outline: none;
    }
 }
</style>