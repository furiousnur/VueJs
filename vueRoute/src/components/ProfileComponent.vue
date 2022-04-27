<template>
  <div class="profileComponent">
    <h2>{{ pageTitle}} for {{userId}}</h2>

  </div>
</template>

<script>
export default {
  name: 'ProfileComponent',
  data () {
    return {
      pageTitle: 'Profile Page',
      userId: this.$route.params.user_id
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h2{
    color: green;
  }
</style>
