import Methods from "@/api/methods";
import { Options } from "vue-class-component";
import ComponentBase from "../../common/ComponentBase";
import TestComponentDto from "./dto/TestComponentDto";
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

  private list: TestComponentDto[] = [];

  /**
   * DOM未生成時の処理
   */
  public created() {
    //
  }

  /**
   * DOMが作成された直後の処理
   */
  public mounted() {
    // 画面遷移時引継ぎ情報取得（キャストを行う）
    const data = this.getGoScreenParam() as TestComponentParam;
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
   */
  private clearButtonClick() {
    this.testMsg = this.commonCheckUtil.isEmpty(this.testMsg) ? "★" : "";
    this.name = "";
    this.address = "";
    // console.log(store.state.title);
  }

  /**
   * 検索ボタン押下処理（同期処理）
   *
   */
  private async searchButtonClick() {
    // DB検索
    const param: TestComponentDto = new TestComponentDto();
    param._id = "123";
    param.name = "nihsi";
    const data = await Methods.posttest(param);
    // const data = await Methods.testGetBooks();

    // 成功時
    if (data && data.status === 200) {
      // データが存在する場合
      if (data.data && data.data.length > 0) {
        console.log("data._id : " + data.data[0]._id);
        console.log("data.name : " + data.data[0].name);

        // 検索結果セット
        this.list = data.data;
      } else {
        console.log("データなし");
      }
      alert("検索完了");
    }
    // 失敗時
    else {
      alert("検索失敗");
    }
  }

  private async registButtonClick() {
    //
  }
}
