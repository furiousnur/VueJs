<template>
  <div>
    <h1>{{ title }}</h1>
      <table>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
        <tr v-for="post in posts" :key="post.id">
          <td>{{post.id}}</td>
          <td>{{post.title}}</td>
          <td>{{post.body | snippet}}</td>
        </tr>
      </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PostComponent",
  data() {
    return {
      title: 'Post Part',
      posts:[]
    }
  },
  methods:{

  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response =>{
      // console.log(response);
      this.posts = response.data;
    })
    .catch(error=>{
      console.log(error);
    })
  }
}
</script>

<style scoped>
  h1{
    color: red;
    text-align: center;
  }
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  th {
    text-align: center;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
    text-align: center;
  }
</style>