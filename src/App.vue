<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'Home'}" exact>
          <img class="logo" src="./assets/build-a-bot-logo.png" />
          Build-a-Bot
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'Build'}" exact>
            Build
          </router-link>
        </li>
      </ul>
    </nav>
  </header>

  <main>
    <router-view/>
  </main>
</template>

<script>
export default {
  name: 'App',
};
</script>
<style>
.router-link-active{
  color: white;
}
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
</style>
<style scoped>
.nav-link{
  text-decoration: none;
  color : inherit;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

main {
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  width: 1024px;
  min-height: 300px;
}
header {
  background-color: #999;
  width: 1084px;
  margin: 0 auto;
}

ul {
  padding: 3px;
  display: flex;
}

.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}

.logo {
  vertical-align: middle;
  height: 30px;
}

</style>
