<template>
  <div id="nav">
    <router-link to="/">Universe-Maker</router-link> |
    <router-link to="/starmap">Starmap</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: 'Orbitron', sans-serif;
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
