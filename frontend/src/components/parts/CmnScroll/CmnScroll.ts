import ComponentBase from "../../common/ComponentBase";
import { Prop } from "vue-property-decorator";

/**
 * 共通スクロールボタン
 */
export default class CmnScroll extends ComponentBase {
  scrollTimer = 0;
  scrollY = 0;
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  }
  /** どの位置までスクロールをしているか判定 */
  handleScroll() {
    if (this.scrollTimer) {
      return;
    }
    this.scrollTimer = setTimeout(() => {
      this.scrollY = window.scrollY;
      clearTimeout(this.scrollTimer);
      this.scrollTimer = 0;
    }, 100);
  }
  /** トップまで滑らかに移動する */
  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}
