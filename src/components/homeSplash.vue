<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div>
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
}

@media screen and (min-width: 1000px) {
  .title {
    margin-left: 30%;
  }
  .choices {
    display: flex;
    gap: 2rem;
    margin-left: 30%;
  }
}
.titleside {
  background-color: $alloy-orange;
  border-radius: 5rem;
}

.title {
  font-size: 3rem;
}
</style>
