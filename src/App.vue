<template>
  <div id="app">
    <div class="bgImg"></div>
    <router-view />
  </div>
</template>

<script>

export default {

}
</script>

<style lang="less">
  body{
    padding: 0;
    margin: 0;
  }
  // .bgImg{
  //   position: absolute;
  //   margin: 0;
  //   padding: 0;
  //   width: 100%;
  //   height: 100vh;
  //   z-index: -1;
  //   background-image: url('http://pic1.win4000.com/wallpaper/a/55349fb752abc.jpg');
  //   background-repeat: no-repeat;
  // background-size: 100% 100%;
  // opacity: 0.5;
  // }
</style>
