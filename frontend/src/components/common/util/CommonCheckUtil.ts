/**
 * 共通チェックUtil
 */
export default class CommonCheckUtil {
  /**
   * 文字列が空文字またはnullかどうかを判定します。
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
