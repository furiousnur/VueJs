<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="about">About</router-link></li>
        <li><router-link to="contact">Contact</router-link></li>
      </ul>
    </nav>
    <ul>
      <li v-for="(id,index) in userIds" :key="index">
        <router-link :to="{name:'profile', params:{user_id:id}}">Profile {{id}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      userIds:['1','2','3','4','5','6','7','8']
    }
  }
}
</script>

<style scoped>
nav {
  text-align: center;
}

nav ul {
  padding: 0;
}

nav li {
  display: inline-block;
  margin: 0;
  padding: 8px;
}
li{
  list-style-type: none;
}
</style>