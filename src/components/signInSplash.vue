<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="box">
    <RouterLink to="/" class="backbtn">Back</RouterLink>
    <h1>Sign In</h1>
    <div>
      <div class="username">
        <h3>Username</h3>
        <input type="text" class="input" />
      </div>
      <div class="password">
        <h3>Password</h3>
        <div class="passwordBox">
          <input
            v-if="showPassword"
            type="text"
            v-model="password"
            class="input"
            placeholder="Password"
          />
          <input v-else v-model="password" class="input" type="password" />
        </div>
      </div>
    </div>
    <a class="button" href="https://google.com">Sign In</a>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      showPassword: false,
      password: null,
    };
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? "Hide" : "Show";
    },
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style scoped lang="scss">
@media screen and (max-width: 1000px) {
  .box {
    background-color: $alloy-orange;
  }
}

* {
  color: $black;
}

.backbtn {
  align-self: flex-start;
}

.box {
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 2rem;
  padding: 2rem;
}
</style>
