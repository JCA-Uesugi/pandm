import ComponentBase from "../../common/ComponentBase";
import { Prop } from "vue-property-decorator";

/**
 * モーダルウィンドウ
 */
export default class CmnModal extends ComponentBase {
  /** 表示非表示の切り替え */
  @Prop({ default: true })
  private isVisible!: boolean;

  /** モーダル内テキスト */
  @Prop({ default: "" })
  private modalText!: string;

  mounted() {
    //this.$refs.startFocus.focus();
  }

  /** モーダルを閉じる */
  private closeModal() {
    this.$emit("close");
  }

  /** tabキーのフォーカス制御 */
  setEndFocus() {
    // this.$refs.endFocus.focus();
  }
  setStartForcus() {
    // this.$refs.startFocus.focus();
  }
}
