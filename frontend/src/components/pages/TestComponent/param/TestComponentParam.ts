import ScreenTransitionParam from "@/components/common/ScreenTransitionParam";

/**
 * テストコンポーネント用
 * 画面遷移パラメータクラス
 *
 * ※共通画面遷移パラメータ（ScreenTransitionParam）を継承
 *
 */
export default class TestComponentParam extends ScreenTransitionParam {
  /** 名前 */
  public name!: string;

  /** 住所 */
  public address!: string;
}
