import Methods from "@/api/methods";
import { Options } from "vue-class-component";
import ComponentBase from "../../common/ComponentBase";
import TestComponentParam from "./param/TestComponentParam";
/**
 * テストコンポーネント
 */
@Options({})
export default class TestComponent extends ComponentBase {
  /** テストメッセージ */
  private testMsg = "";

  /** 名前（画面表示） */
  private name = "";

  /** 住所（画面表示） */
  private address = "";

  public mounted() {
    // 画面遷移時引継ぎ情報取得
    const data = <TestComponentParam>this.getGoScreenParam();
    console.log(data);
    if (data) {
      // 引継ぎ情報あり
      this.name = data.name;
      this.address = data.address;
    }
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
    // console.log(store.state.title);
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
