import ComponentBase from "../../common/ComponentBase";
import { Prop } from "vue-property-decorator";
import Methods from "@/api/methods.js";

/**
 * 共通ファイルアップロード・ダウンロード
 */
export default class CmnFile extends ComponentBase {
  /** 表示非表示の切り替え */
  @Prop({ default: true })
  private isVisible!: boolean;

  /** アップロードされたファイルオブジェクトのリスト */
  private upFiles = [];
  /** アップロードされたファイルの名前 */
  private filesName = "";
  private files = Object;
  private datas = [];
  private downloadUrl = "";
  private imgUrl = "";
  private download = true;

  /*created() {
    this.getFiles();
    this.downloadFile();
  }*/

  /**
   * @param e イベント
   *
   */
  /*inputFiles(e) {
    e.preventDefault();
    let files = e.target.files;
    this.upFiles = files;
    this.filesName = this.upFiles.name;
  }
  async downloadFile() {
    let downloadFile = await Methods.fileDownload();
    // let unit = ArrayBuffer.from(downloadFile.data[0].file.data.data);
    this.downloadUrl = window.URL.createObjectURL(
      new Blob([downloadFile.data[0].file.data.data])
    );
  }
  upLoad() {
    Methods.fileUpload(this.upFiles);
  }
  async getFiles() {
    let files_data = await Methods.dataGet();
    console.log(files_data);
    this.datas = files_data.data;
  }*/
}
