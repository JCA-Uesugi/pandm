import ScreenTransitionParam from "./ScreenTransitionParam";

/**
 * 画面遷移パラメータ保持クラス
 */
export default class ScreenTransition {
  /** 画面遷移用パラメータ */
  private static goScreenParam: ScreenTransitionParam;

  // TODO:パラメータの履歴マップ

  /**
   * 画面遷移パラメータ設定
   *
   * @param param 画面遷移パラメータ
   */
  public static setGoScreenParam(param: ScreenTransitionParam) {
    // TODO:前の情報クリア
    // 仮ディープコピーしてからパラメータセット
    this.goScreenParam = param;
  }

  /**
   * 画面遷移パラメータ取得関数
   *
   * @returns 画面遷移パラメータ
   */
  public static getGoScreenParam(): ScreenTransitionParam {
    // 仮ディープコピーして渡す
    return this.goScreenParam;
  }
}
