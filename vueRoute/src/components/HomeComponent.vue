<template>
  <div class="HomeComponent">
    <h2>{{ pageTitle}}</h2>

  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  data () {
    return {
      pageTitle: 'Home Page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
