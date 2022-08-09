import ComponentBase from "../../common/ComponentBase";
import { Prop } from "vue-property-decorator";

/*import Tab1 from "./Tab1.vue";
import Tab2 from "./Tab2.vue";
import Tab3 from "./Tab3.vue";*/

/**
 * 共通タブ
 */
export default class CmnTab extends ComponentBase {
  /** 表示非表示の切り替え */
  @Prop({ default: true })
  private isVisible!: boolean;

  /** 現在選択しているタブ */
  data() {
    return {
      currentTab: "Tab1",
    };
  }
  /** タブに入っているコンポーネント */
  /*components: {
        Tab1,
        Tab2,
        Tab3
      }*/
}
