<template>
  <div class="aboutComponent">
    <h2>{{ pageTitle}}</h2>

  </div>
</template>

<script>
export default {
  name: 'AboutComponent',
  data () {
    return {
      pageTitle: 'This is our About Page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
