<template>
  <div class="modal" v-if="isVisible">
    <!-- <button @click="openModal">{{ buttonText }}</button> -->
    <div id="overlay">
      <div id="content">
        <div tabindex="0" @focusin="setEndFocus"></div>
        <div ref="startFocus" tabindex="0"></div>
        <p>{{ modalText }}</p>
        <p>
          <button  @click="closeModal">OK</button>
          <button  @click="closeModal">
            キャンセル
          </button>
          <button  @click="closeModal" ref="endFocus">閉じる</button>
        </p>
        <div tabindex="0" @focusin="setStartForcus"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CmdModal",
  props: {
    /** 開くときのボタンテキスト */
    isVisible: {
      type: Boolean,
      default: false
    },
    /** モーダルウィンドウ内のテキスト */
    modalText: {
      type: String,
      default: ""
    },
    buttonType:{
      type: Number,
      default: 3
    }
  },
  data() {
    return {
      /**　ウィンドの表示非表示切り替え */
      // showContent: false
    };
  },
  mounted(){
    console.log("create");
    //this.$refs.startFocus.focus();
  },
  methods: {
    closeModal(){
      // this.isVisible = false;
      this.$emit("close")
    },
    setEndFocus(){
      
      this.$refs.endFocus.focus();
    },
    setStartForcus(){
       this.$refs.startFocus.focus();
    }
  },
  // setup(props, context){
  //   console.log("setup")
  //   this.$refs.startFocus.focus();
  // }
};
</script>
<style scoped>
#overlay {
  /*　要素を重ねた時の順番　*/
  z-index: 1000;

  /*　画面全体を覆う設定　*/
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  /*　画面の中央に要素を表示させる設定　*/
  display: flex;
  align-items: center;
  justify-content: center;
}
#content {
  z-index: 1500;
  width: 50%;
  padding: 1em;
  background: #fff;
}
</style>
