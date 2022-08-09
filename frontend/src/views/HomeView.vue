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
import ComponentBase from "./../components/common/ComponentBase";
import TestComponentParam from "./../components/pages/TestComponent/param/TestComponentParam";

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends ComponentBase {
  /**
   * 入力画面に遷移
   */
  private clickNextButton() {
    console.log("clickNextButton");
    // パラメータセット
    let param: TestComponentParam = new TestComponentParam();
    param.name = "西　七海";
    param.address = "福岡県福岡市早良区百道浜2丁目1-22";
    // 画面遷移
    this.goScreen("input", param);
    // this.$router.push({ path: "/input", query: { name: "nanami" } });
  }
}
</script>
