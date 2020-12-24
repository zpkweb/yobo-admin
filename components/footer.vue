<template>
  <nuxt-link class="logo" :to="localePath('/')">
    <img class="logo-img" src="~/assets/img/logo.png" />
  </nuxt-link>
</template>

<style scoped>
.logo {
  display: flex;
  width: 150px;
  height: 60px;
  margin: 0 auto;
}
.logo-img {
  flex: 1;
  width: 100%;
  height: 100%;
}
</style>
