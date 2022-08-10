import { Vue } from "vue-class-component";
import ScreenTransition from "./ScreenTransition";
import ScreenTransitionParam from "./ScreenTransitionParam";
import CommonCheckUtil from "./util/CommonCheckUtil";
/**
 * コンポーネントベースクラス
 */
export default class ComponentBase extends Vue {
  /** 共通チェックUtil */
  protected commonCheckUtil: CommonCheckUtil = new CommonCheckUtil();

  /**
   * 画面遷移処理を行います。
   *
   * @param screenId 遷移先の画面ID
   * @param param 画面遷移引継ぎ情報
   */
  protected goScreen(screenId: string, param: ScreenTransitionParam) {
    // 画面遷移
    this.$router.push({ path: "/" + screenId });

    // パラメータを保存
    ScreenTransition.setGoScreenParam(screenId, param);
  }

  /**
   * 画面遷移パラメータを取得します。
   *
   * @returns 画面遷移パラメータ
   */
  protected getGoScreenParam(): ScreenTransitionParam {
    return ScreenTransition.getGoScreenParam();
  }

  /**
   * 画面IDの画面に遷移した時の画面遷移パラメータを取得します。
   * 画面IDの画面に一度も遷移してない場合はundefinedを返却します。
   *
   * @param screenId 画面ID
   * @returns 画面遷移パラメータ
   */
  protected getGoScreenParamHist(screenId: string): ScreenTransitionParam {
    return ScreenTransition.getGoScreenParamHist(screenId);
  }
}
