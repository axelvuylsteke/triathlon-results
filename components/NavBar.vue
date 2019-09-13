<template>
  <div class="nav">
    <nuxt-link to="/" class="brand">
      RaceResults
    </nuxt-link>
    <nav>
      <nuxt-link to="/">
        Home
      </nuxt-link>
      |
      <nuxt-link to="/search/">
        Search
      </nuxt-link>
      |
      <nuxt-link to="/athlete/">
        Athletes
      </nuxt-link>
      |
      <nuxt-link to="/race/">
        Races
      </nuxt-link>
      |
      <nuxt-link to="/user/">
        Profile
      </nuxt-link>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style>
.brand {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #39b982;
  text-decoration: none;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}
.nav a {
  display: inline-block;
}
</style>
