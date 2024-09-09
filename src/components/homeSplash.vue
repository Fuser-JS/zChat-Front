<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="splash">
    <div class="title">
      <div class="Main">
        <h1>Zchat</h1>
      </div>
      <div class="sub">
        <p><u>The last bastion of chatting software</u></p>
      </div>
    </div>
    <div class="choices">
      <div class="signin"><RouterLink to="/signin">Sign in</RouterLink></div>
      <div class="signup"><RouterLink to="/signup">Sign up</RouterLink></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 1000px) {
  .title {
    text-align: center;
    margin-left: 10%;
    margin-right: 10%;
  }
  .choices {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    text-align: center;
  }

  .splash {
    margin-left: 10%;
    margin-right: 10%;
    align-items: center;
  }
}

@media screen and (min-width: 1000px) {
  .splash {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .choices {
    display: flex;
    gap: 2rem;
  }
}
.titleside {
  background-color: $alloy-orange;
  border-radius: 5rem;
}

.choices > * {
  border-radius: 2rem;
}

.choices > * > * {
  font-size: 2rem;
  padding: 1rem;
  text-align: center;
}

.title {
  font-size: 3rem;
}

.signin {
  color: $cinnabar;
}

.signup {
  color: $black;
  background-color: $cinnabar;
}
</style>
