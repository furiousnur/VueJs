<template>
  <div>
    <h2>{{ title }}</h2>
    <button @click="changeHook">Change Hook</button>
  </div>
</template>

<script>
export default {
  name: "HookSystem",
  data() {
    return {
      title: 'Hook Part'
    }
  },
  methods:{
    changeHook(){
      this.title = 'Hook Update Part'
    }
  },
  beforeCreate() {
    alert('before create');
  },
  created() {
    alert('created');
  },
  beforeUpdate() {
    alert('Do you really wants to update Hook name?');
  }
}
</script>

<style scoped>

</style>