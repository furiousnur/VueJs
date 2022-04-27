<template>
  <div id="app">
      {{name}}
      <NavBar></NavBar>
      <AllFriends :friends="friends" @delete="deleteFriend"></AllFriends>
      <OnlineFriends :friends="friends"></OnlineFriends>
      <HookSystem></HookSystem>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import AllFriends from "@/components/AllFriends";
import OnlineFriends from "@/components/OnlineFriends";
import HookSystem from "@/components/HookSystem";
export default {
  name: 'App',
  data(){
    return{
      name: 'VueJS Course',
      friends:[
        {name:'A', online:true},
        {name:'B', online:false},
        {name:'C', online:true},
        {name:'D', online:true},
        {name:'E', online:false},
      ]
    }
  },
  components:{
    HookSystem,
    NavBar,
    AllFriends,
    OnlineFriends
  },
  methods:{
    deleteFriend(friendName){
      // console.log(payload);
      this.friends = this.friends.filter(friend=>{
        return friend.name !== friendName;
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
