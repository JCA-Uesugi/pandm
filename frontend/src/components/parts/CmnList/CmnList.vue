<template>
  <div class="list" v-if="isVisible">
    <label>{{ label }}</label>
    <!-- <label>{{ sort_key }}</label> -->
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th
            v-for="(element, index) in headers"
            :key="element.index"
            v-show="true"
          >
            <span>
              {{ element }}
              <button @click="sortBy(index)" :class="addClass(index)">sort</button>
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(option, index) in options" :key="option.id">
          <th :style="{ textAlign: contentAlign }">{{ index + 1 }}</th>
          <td
            :style="{ textAlign: contentAlign }"
            v-for="item in option"
            :key="item.index"
          >
            <span>{{ item.value }}</span>
          </td>
          <td v-if="option.isVisible">
            <button>{{ buttonContent }}</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "CmnList",
  props: {
    /** 一覧に出す要素 */
    options: [],
    /** 一覧のカラム名 */
    headers: {
      type: [],
      defalut: [{ name: "default", book: true }]
    },
    /** 一覧要素の文字寄せ */
    contentAlign: {
      type: String,
      defalut: "left"
    },
    /** ラベルテキスト */
    label: {
      type: String,
      default: "default"
    },
    /** ボタンのテキスト */
    buttonContent: {
      type: String,
      default: "defalut"
    },
    /** 表示非表示切り替え */
    isVisible: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      /** ソート実装用キー */
      sort_key: "",
      /** 昇順フラグ */
      sort_asc: true,
    };
  },
  methods: {
    /** 一覧の列ソート */
    sortBy(key) {
      console.log("key : " + key);
      /** 同じ列のボタンか異なる列のボタンか */
      this.sort_key === key ? (this.sort_asc = !this.sort_asc)
      : (this.sort_asc = true)
      this.sort_key = key;

      /** ソートキーがインプットされたとき */
      if (this.sort_key !== "") {
        var set = 1; //昇順と降順を入れ替えるための変数
        this.sort_asc ? (set = -1) : (set = 1);

        this.options.sort((a, b) => {
          var nameA = a[this.sort_key].value;
          /*console.log(this.sort_key);
          console.log(nameA);*/
          var nameB = b[this.sort_key].value;
          /*console.log(nameB);*/
          /** 比較 */
          if (nameA < nameB) {
            console.log("sort-1");
            return -1*set;
          }
          if (nameA > nameB) {
             console.log("sort1");
            return 1*set;
          }
          console.log("sort0");
          return 0;
        });
        return this.options;
      } else {
        return this.options;
      }
    },
   /** ボタンの切り替え */
    addClass(key){
      return{
        asc: this.sort_key == key && this.sort_asc,
        desc: this.sort_key === key && !this.sort_asc,
      };
    }
  },
};
</script>
<style>
div .list {
  display: block;
  text-align: left;
}
table {
  border: solid 1px #ccc;
  border-collapse: collapse;
}
th {
  padding: 5px;
  border: solid 1px #ccc;
  background-color: #eee;
}
td {
  padding: 5px;
  border: solid 1px #ccc;
}
.asc::after {
  content: "▼";
}
.desc::after {
  content: "▲";
}
</style>
