<template>
  <div class="view login">
    <form action="" class="login-form">
      <div class="form-inner">
        <h1>Login to YourChat</h1>
      <label for="username">Username</label>
      <input type="text" placeholder="Enter your username.."/>
      <input type="submit" value="Login">
      </div>
    </form>
  </div>
  
  <div class="view chat">
    <h1>Chat view</h1>
  </div>
</template>

<script>
// import db from './db';

export default {
  name: 'App',

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 70px;
}
.view{
  // width: 100%;
  margin-top: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  // align-items: center;
  background-color: burlywood;
  height: 300px;
  padding: 10px;
  border-radius: 10px;
}
.form-inner input{
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>
