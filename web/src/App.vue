<!--
 * @Descripttion: no
 * @version: 1.0.0
 * @Author: fugang
 * @Date: 2021-06-02 11:56:31
 * @LastEditors: fugang
 * @LastEditTime: 2021-06-02 13:55:15
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>