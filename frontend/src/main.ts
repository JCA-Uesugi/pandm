import { createApp } from "vue";
import App from "./App.vue";
import TestComponent from "./components/pages/TestComponent/TestComponent.vue";
import CmnTextBox from "./components/parts/CmnTextBox/CmnTextBox.vue";
import router from "./router";
import store from "./store";
import "./assets/style/Common.css";

const app = createApp(App);
// 仮
app.component("test-comp", TestComponent);
app.component("cmn-text-box", CmnTextBox);

app.use(store).use(router).mount("#app");
