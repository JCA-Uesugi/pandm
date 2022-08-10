import { AxiosResponse } from "axios";
import Api from "./index";
/**
 * APIコントローラー
 * 削除予定
 */
export default class ApiController {
  /**
   *
   * @param apiId
   * @returns
   */
  public static get(apiId: string) {
    return Api().get("/" + apiId);
  }

  public static post(apiId: string): Promise<AxiosResponse> {
    return Api().post(apiId);
  }

  // TODO:PUT

  // TODO:DELETE
}
