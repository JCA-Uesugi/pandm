import ComponentBase from "../../common/ComponentBase";
import { Prop } from "vue-property-decorator";

/**
 * 共通一覧
 */
export default class CmnList extends ComponentBase {
  /** 一覧の要素となるリスト */
  @Prop()
  private options!: object[];

  /** 一覧のカラム名 */
  @Prop()
  private headers!: object[];

  /** ラベルテキスト */
  @Prop({ default: "" })
  private label!: string;

  /** ラベルの横幅 */
  @Prop({ default: "20%" })
  private labelWidth!: string;

  /** 一覧要素の文字寄せ */
  @Prop({ default: "left" })
  private contentAlign!: string;

  /** ソート実装用キー */
  private sort_key = 500;
  /** 昇順フラグ */
  private sort_asc = true;

  /**
   * ソート
   * ソートされたリストを親画面に返却します
   * @param key ソートボタンが押されたとき
   */
  private sortBy(key: number) {
    /** 直前に押したボタンと同じ列のボタンか、異なるボタンか */
    this.sort_key === key
      ? (this.sort_asc = !this.sort_asc)
      : (this.sort_asc = true);
    this.sort_key = key;

    /** ソートキーがインプットされたとき */
    if (this.sort_key !== 500) {
      var set = 1; //昇順と降順を入れ替えるための変数
      this.sort_asc ? (set = -1) : (set = 1);

      /*this.options.sort((a, b) => {
          var nameA = a[this.sort_key].value;
          var nameB = b[this.sort_key].value;
          if (nameA < nameB) {
            console.log("sort-1");
            return -1 * set;
          }
          if (nameA > nameB) {
            console.log("sort1");
            return 1 * set;
          }
          console.log("sort0");
          return 0;
        });
        return this.options;
      } else {
        return this.options;
      }*/
    }
  }

  /**
   * ボタンの切り替え
   */
  private addClass(key: number) {
    return {
      asc: this.sort_key == key && this.sort_asc,
      desc: this.sort_key === key && !this.sort_asc,
    };
  }
}
