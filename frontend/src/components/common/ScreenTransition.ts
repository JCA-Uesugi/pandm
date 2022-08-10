import ScreenTransitionParam from "./ScreenTransitionParam";
import _ from "lodash";
/**
 * 画面遷移パラメータ保持クラス
 */
export default class ScreenTransition {
  /** 画面遷移パラメータ */
  private static goScreenParam: ScreenTransitionParam;

  /** 画面遷移パラメータの履歴（画面ID, パラメータ） */
  private static goScreenParamHist: Map<string, ScreenTransitionParam> =
    new Map<string, ScreenTransitionParam>();

  /**
   * 画面遷移パラメータ設定
   *
   * @param screenId 遷移先の画面ID
   * @param param 画面遷移パラメータ
   */
  public static setGoScreenParam(
    screenId: string,
    param: ScreenTransitionParam
  ) {
    // 前の情報クリア
    this.goScreenParam = new ScreenTransitionParam();

    // パラメータを保持
    this.goScreenParam = _.cloneDeep(param);

    // 画面遷移パラメータの履歴に追加
    this.goScreenParamHist.set(screenId, _.cloneDeep(param));
  }

  /**
   * 画面遷移パラメータ取得関数
   *
   * @returns 画面遷移パラメータ
   */
  public static getGoScreenParam(): ScreenTransitionParam {
    return _.cloneDeep(this.goScreenParam);
  }

  /**
   * 画面IDの画面に遷移した時の画面遷移パラメータ取得関数
   * 画面IDの画面に一度も遷移してない場合はundefinedを返却します。
   *
   * @param screenId 画面ID
   * @returns 画面遷移パラメータ
   */
  public static getGoScreenParamHist(screenId: string): ScreenTransitionParam {
    // 画面遷移パラメータの履歴から画面IDをもとにデータを取得
    const data = _.cloneDeep(
      this.goScreenParamHist.get(screenId)
    ) as ScreenTransitionParam;
    return data;
  }
}
