<template>
  <div class="home">
    <h1>Welcome to the App!</h1>
    <div v-if="!loggedIn">
      To display events you need to
      <router-link to="/login">
        Login
      </router-link> or
      <router-link to="/register">
        Register
      </router-link> if you do not have an account.
    </div>
  </div>
</template>

<script>
import { authComputed } from '@/vuex/helpers.js'
export default {
  computed: {
    ...authComputed
  }
}
</script>
