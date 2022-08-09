<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <button @click="clickNextButton">次へ</button>
    <!-- <test-comp></test-comp> -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./../components/HelloWorld.vue"; // @ is an alias to /src
import "vue-router";
// import TestComponentParam from "./../components/pages/TestComponent/TestComponentParam";

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {
  private clickNextButton() {
    console.log("clickNextButton");
    this.$router.push({ path: "/input", query: { name: "nanami" } });
  }
}
</script>
