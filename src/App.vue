<template>
  <div id="app" class="app-main">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html,body{
    width: 100%;
    height: 100%;
    background: #f0f0f0;
    overflow: hidden;
    margin: 0;
    padding: 0;
}
input:-webkit-autofill {
  box-shadow: 0 0 0 1000px #fff inset;
}
.app-main{
    width: 100%;
    height: 100%;
}
</style>
