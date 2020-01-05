<template>
    <div>
      <el-container>
        <el-header>
          <el-menu class="el-menu-demo" mode="horizontal" :default-active="activeMenu" text-color="#000" router>
            <el-menu-item v-for="(item,index) in navList" :key="index" :index="navPath(item)">{{item.children[0].name}}</el-menu-item>
          </el-menu>
        </el-header>
        <el-container>
          <el-aside width="200px">
            <SideBar />
          </el-aside>
          <el-main>
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script>
import { navList } from '@/router'
import SideBar from './components/SideBar'
export default {
  components: {
    SideBar : SideBar
  },
  computed: {
    activeMenu(){
      const route = this.$route
      const { path } = route
      return path
    },
  },
  created(){

  },
  data(){
    return{
      navList : navList
    }
  },
  methods: {
    navPath(item){
      return (item.path + '/' + item.children[0].path)
    },
    backToTop(){

    },

  }
}
</script>

<style lang="less">
  .el-header {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 60px;
    background-color: pink;
  }
  
  .el-aside {
    text-align: center;
    background-color: yellow;
  }
  
  .el-main {
    text-align: center;
    line-height: 160px;
    background-color: aquamarine;
  }
</style>