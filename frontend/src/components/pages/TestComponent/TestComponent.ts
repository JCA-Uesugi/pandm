import Methods from "@/api/methods";
import { Options } from "vue-class-component";
import ComponentBase from "../../common/ComponentBase";

@Options({})
export default class TestComponent extends ComponentBase {
  /** テストメッセージ */
  private testMsg = "";

  /** 名前 */
  private name = "";

  /** 住所 */
  private address = "";

  public mounted() {
    // console.log(this.$route.query);
  }
  /**
   * クリアボタン押下処理
   *
   * @param event クリアボタン押下イベント
   */
  private clearButtonClick(event: Event) {
    this.testMsg = this.isEmpty(this.testMsg) ? "★" : "";
    this.name = "";
    this.address = "";
  }

  /**
   * DB検索ボタン押下処理
   *
   * @param event DB検索ボタン押下イベント
   */
  private async dbSearchButtonClick(event: Event) {
    // DB検索
    const data = await Methods.testGetBooks();
    console.log(data);
    alert("検索完了");
  }
}
