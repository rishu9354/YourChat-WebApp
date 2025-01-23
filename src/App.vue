<template>
  <div class="view login" v-if="state.username === '' || state.username === null">
    <form action="" class="login-form" v-on:submit.prevent="login"> 
      <div class="form-inner">
        <h1>Login to YourChat</h1>
      <label for="username">Username</label>
      <input type="text" placeholder="Enter your username.." v-model="inputUsername"/>
      <input type="submit" value="Login">
      </div>
    </form>
  </div>
  
  <div class="view chat" v-else>
    <header>
      <button class="logout" @click="logOut">Logout</button>
      <h1>Welcome, {{ state.username }}</h1>
    </header>

    <section class="chat-box">
      <!-- chatting -->
       //message
    </section>

    <footer>
      <form @submit.prevent="sendMessage">
        <input type="text" placeholder="Write a message..." v-model="inputMessage">
        <input type="submit" value="send" />
      </form>
    </footer>
  </div>
</template>

<script>
import db from './db.js';
import { reactive, onMounted, ref } from 'vue';
export default {
  name: 'App',
  setup (){
    const inputUsername =ref("");
    const inputMessage =ref("");

    const state = reactive({
      username:"",
      messages:[]
    })
    const login = ()=>{
      if(inputUsername.value !="" || inputUsername.value != null){
        state.username = inputUsername.value;
        inputUsername.value = "";
        // console.log(username);
        
      }
    }
    const sendMessage =()=>{
      const messageRef = db.database().ref("messages");
      console.log('testing1');
      
      if(inputMessage.value === "" || inputMessage.value === null){
        return;
      }
      console.log('testing2');
      
      const message ={
        username : state.username,
        content: inputMessage.value
      }
// ppush the value into database
      messageRef.push(message);
      inputMessage.value="";
    }
    const logOut =()=>{
      state.username="";
    }
    return{
      inputUsername,
      login,
      state,
      logOut,
      inputMessage,
      sendMessage
    }
  }

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
