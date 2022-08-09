import Api from "./index";

export default class Methods {
  public static testGetBooks() {
    return Api().get("/mydb");
  }
}
