import Api from "./index";
import ApiController from "./ApiController";
import { AxiosRequestConfig, AxiosResponse } from "axios";
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

  /**
   * GETテスト
   * @param param
   * @returns
   */
  public static gettest(
    param: TestComponentDto
  ): Promise<AxiosResponse<TestComponentDto[]>> {
    // 条件設定
    const options: AxiosRequestConfig = {
      params: param,
    };

    const data = Api().get("/gettest", options);
    return data;
  }

  /**
   * POSTテスト
   * @param param
   * @returns
   */
  public static posttest(
    param: TestComponentDto
  ): Promise<AxiosResponse<TestComponentDto[]>> {
    // 条件設定
    const options: AxiosRequestConfig = {
      params: param,
    };

    const data = Api().post("/posttest", options);
    return data;
  }

  // TODO:PUT

  // TODO:DELETE

  /*************************************************************/
}
