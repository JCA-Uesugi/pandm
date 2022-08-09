import ComponentBase from "../../common/ComponentBase";
import { Prop } from "vue-property-decorator";

/**
 * 共通ヘッダー
 */
export default class CmnHeader extends ComponentBase {
  menu() {
    const ham = document.getElementById("ham");
    const menu_wrapper = document.getElementById("menu_wrapper");
    /*ham.classList.toggle("clicked");
        menu_wrapper.classList.toggle("clicked");*/
  }
}
