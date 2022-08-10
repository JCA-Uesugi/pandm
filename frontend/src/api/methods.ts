import Api from "./index";
import ApiController from "./ApiController";
import { AxiosResponse } from "axios";
import TestComponentDto from "./../components/pages/TestComponent/dto/TestComponentDto";
export default class Methods {
  // ↓↓仮↓↓
  /*************************************************************/
  /**
   * myDB検索
   *
   * @returns 検索結果
   */
  public static testGetBooks(): Promise<AxiosResponse<TestComponentDto[]>> {
    const data = ApiController.get("mydb");
    return data;
  }

  /*************************************************************/
}
