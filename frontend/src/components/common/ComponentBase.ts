import { Vue } from "vue-class-component";
import ScreenTransition from "./ScreenTransition";
import ScreenTransitionParam from "./ScreenTransitionParam";
/**
 * コンポーネントベースクラス
 */
export default class ComponentBase extends Vue {
  /**
   * 画面遷移処理を行います。（仮）
   *
   * @param screenId 遷移先の画面ID
   * @param param 画面遷移引継ぎ情報
   */
  public goScreen(screenId: string, param: ScreenTransitionParam) {
    // 画面遷移
    this.$router.push({ path: "/" + screenId });

    // パラメータを保存
    ScreenTransition.setGoScreenParam(param);
  }

  /**
   * 画面遷移パラメータ取得関数（仮）
   *
   * @returns 画面遷移パラメータ
   */
  public getGoScreenParam(): ScreenTransitionParam {
    return ScreenTransition.getGoScreenParam();
  }

  /**
   * 文字列が空文字またはnullかどうかを判定します。（仮）
   * ※共通関数は別クラスに分ける
   *
   * @param value 判定する文字列
   * @returns 判定結果
   */
  public isEmpty(value: string): boolean {
    if (value === "" || value === null) {
      return true;
    }
    return false;
  }
}
