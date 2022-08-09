<template>
  <div class="scroll">
    <div class="scrolltop" v-show="scrollY > 10" @click="scrollTop">
      ページのTOPに戻る
    </div>
  </div>
</template>

<script>
export default {
  name: "CmnScroll",
  data() {
    return {
      scrollTimer: 0,
      scrollY: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    /** どの位置までスクロールをしているか判定 */
    handleScroll: function() {
      if (this.scrollTimer) {
        return;
      }
      this.scrollTimer = setTimeout(() => {
        this.scrollY = window.scrollY;
        clearTimeout(this.scrollTimer);
        this.scrollTimer = 0;
      }, 100);
    },
    /** トップまで滑らかに移動する */
    scrollTop: function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>
<style scoped>
.scrolltop {
  position: fixed;
  bottom: 5%;
  right: 5%;
  background-color: #333;
  opacity: 0.5;
  padding: 10px;
  color: #fff;
  border-radius: 10px;
}
.scrolltop:hover {
  cursor: pointer;
  opacity: 1;
}
</style>
