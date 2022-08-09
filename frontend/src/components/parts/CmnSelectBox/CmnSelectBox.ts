import ComponentBase from "@/components/common/ComponentBase";
import { Prop } from "vue-property-decorator";

export default class CmnSelectBox extends ComponentBase {
  /** 親画面から渡された選択値 */
  @Prop()
  private modelValue!: object[];

  /** ラベルテキスト */
  @Prop({ default: "" })
  private label!: string;

  /** ラベルの横幅 */
  @Prop({ default: "20%" })
  private labelWidth!: string;

  /** 非活性フラグ */
  @Prop({ default: false })
  private isDisabled!: boolean;

  /** 複数選択フラグ */
  @Prop({ default: false })
  private isMultiple!: boolean;

  /** 必須表示フラグ */
  @Prop({ default: false })
  private isRequired!: boolean;

  /** セレクトボックスの横幅 */
  @Prop({ default: "50%" })
  private selectWidth!: boolean;

  /** 親画面から渡される選択肢のリスト */
  @Prop()
  private options!: object[];

  /** 表示非表示の切り替え */
  @Prop({ default: true })
  private isVisible!: boolean;

  /**
   * getter
   * @return 親画面から渡された選択値
   */
  private get selectedValue(): object[] {
    return this.modelValue;
  }

  /**
   * setter
   * 選択されたオブジェクトを親画面に返却します
   * @param newValue 選択されたオブジェクト
   */
  private set selectedValue(newValue: object[]) {
    this.$emit("update:modelValue", newValue);
  }
}
