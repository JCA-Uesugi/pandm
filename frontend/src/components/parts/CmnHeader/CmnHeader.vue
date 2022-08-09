<template>
  <div class="header">
    <nav class="nav">
      <h1>Taberii</h1>
      <ul class="menu-group">
        <li class="menu-item"><a href="#">ユーザ向け</a></li>
        <li class="menu-item"><a href="#">企業様向け</a></li>
        <li class="menu-item"><a href="#">お問い合わせ</a></li>
        <li class="menu-item"><a href="#">運営情報</a></li>
      </ul>
    </nav>
    <div class="ham" id="ham" @click="menu">
      <span class="ham_line ham_line1"></span>
      <span class="ham_line ham_line2"></span>
      <span class="ham_line ham_line3"></span>
    </div>
    <div class="menu_wrapper" id="menu_wrapper">
      <div class="menu">
        <ul>
          <li class="ham-items"><a href="#1">メニュー１</a></li>
          <li class="ham-items"><a href="#2">メニュー２</a></li>
          <li class="ham-items"><a href="#3">メニュー３</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CmnHeader",
  methods: {
    menu() {
      const ham = document.getElementById("ham");
      const menu_wrapper = document.getElementById("menu_wrapper");
      ham.classList.toggle("clicked");
      menu_wrapper.classList.toggle("clicked");
    },
  },
};
</script>
<style scoped>
div .header{
  display:flex;
  position: fixed;
}
nav {
  z-index: 1;
  position: fixed;
  top: 0;
  left:0;
  width: 100%;
  height: 100px;
  background-color: orange;
  align-items: center;
}

h1 {
  margin-right: auto;
  margin-left: 10px;
  color: white;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-weight: 600;
}
.menu-item {
  list-style: none;
  display: inline;
  padding: 5px;
  font-size: 20%;
}
.ham {
  z-index: 2;
  position: relative;
  top: 0;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: #999999;
}
.ham_line {
  z-index: 3;
  position: absolute;
  left: 10px;
  width: 20px;
  height: 1px;
  background-color: #333333;
  transition: all 0.3s;
}
.ham_line1 {
  top: 10px;
}
.ham_line2 {
  top: 18px;
}
.ham_line3 {
  top: 26px;
}
.clicked .ham_line1 {
  transform: rotate(45deg);
  top: 20px;
}
.clicked .ham_line2 {
  width: 0px;
}
.clicked .ham_line3 {
  transform: rotate(-45deg);
  top: 20px;
}
.menu {
  position: fixed;
  width: 300px;
  height: 300px;
  left: -400px;
  background-color: orange;
  transition: all 0.3s;
}
.clicked .menu {
  left: 8px;
}
.ham-items {
  list-style: none;
  
  padding: 10px;
}
</style>