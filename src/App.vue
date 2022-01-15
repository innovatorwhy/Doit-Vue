<template>
  <CommonInput v-mode:value="text"/>
</template>

<script>

export default {
  name: 'App',
  data(){
  return {
  text:''
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
