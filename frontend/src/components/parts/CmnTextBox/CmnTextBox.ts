import ComponentBase from "../../common/ComponentBase";
import { Prop } from "vue-property-decorator";

/**
 * 共通テキストボックス
 */
export default class CmnTextBox extends ComponentBase {
  /** 親画面から渡された文字列 */
  @Prop()
  private modelValue!: string;

  /** ラベルテキスト */
  @Prop({ default: "" })
  private label!: string;

  /** テキストボックスの横幅 */
  @Prop({ default: "60%" })
  private boxWidth!: string;

  /** ラベルの横幅 */
  @Prop({ default: "20%" })
  private labelWidth!: string;

  /** テキストボックス内の文字寄せ */
  @Prop({ default: "left" })
  private textAlign!: string;

  /** 非活性フラグ */
  @Prop({ default: false })
  private isDisabled!: boolean;

  /** 必須表示フラグ */
  @Prop({ default: false })
  private isRequired!: boolean;

  /** 最大桁数 */
  @Prop({ default: 0 })
  private maxLength!: number;

  /** 初期表示文字（プレイスホルダー） */
  @Prop({ default: "" })
  private placeholder!: string;

  /** 表示非表示の切り替え */
  @Prop({ default: true })
  private isVisible!: boolean;

  /**
   * getter
   * @return 親画面から渡された文字列
   */
  private get textValue(): string {
    return this.modelValue;
  }

  /**
   * setter
   * 入力された文字列を親画面に返却します
   * @param newValue 入力文字列
   */
  private set textValue(newValue: string) {
    this.$emit("update:modelValue", newValue);
  }
}
