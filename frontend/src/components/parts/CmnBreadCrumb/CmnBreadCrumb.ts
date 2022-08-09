import ComponentBase from "../../common/ComponentBase";
import { Prop } from "vue-property-decorator";

/**
 * 共通パンくずリスト
 */
export default class CmnTab extends ComponentBase {
  /** パンくずの名前とパスのリスト */
  @Prop({ default: [{ name: "Home", path: "" }] })
  private breadcrumbs!: object[];
}
