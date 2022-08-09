<!-- 子コンポーネント -->
<template>
  <div class="selectbox" v-if="isVisible">
    <label :class="{ required: isRequired }" :style="{ width: labelWidth }">
      {{ label }}
    </label>
    <select
      v-model="selected"
      :style="{ width: selectWidth /*height: selectHeight*/ }"
      :disabled="isDisabled"
      :multiple="isMultiple"
    >
      <optgroup>
        <option v-for="option in options" :value="option" :key="option.index">
          {{ option.value }}
        </option>
      </optgroup>
    </select>
  </div>
</template>
<script>
export default {
  name: "CmnSelectBox",
  /** プロパティ */
  props: {
    /** v-modelのvalue */
    value: [],
    /** ラベルテキスト */
    label: {
      type: String,
      default: "default"
    },
    /** ラベルの横幅 */
    labelWidth: {
      type: String,
      default: "20%"
    },
    /** 非活性フラグ */
    isDisabled: {
      type: Boolean,
      default: false
    },
    /** 複数選択フラグ */
    isMultiple: {
      type: Boolean,
      default: false
    },
    /** 必須表示フラグ */
    isRequired: {
      type: Boolean,
      default: false
    },
    /*selectSize: {
      type: Number,
      default: 1
    },*/
    /** セレクトボックスの横幅 */
    selectWidth: {
      type: String,
      default: "50%"
    },
    /*selectHeight: {
      type: String,
      default: '20px'
    },*/
    /** 選択肢のリスト */
    options: {
      type: []
    },
    /** 表示非表示切り替え */
    isVisible: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    /** インプットがあった時、v-modelのvalueを切り替える。*/
    selected: {
      get() {
        console.log("get");
        return this.$props.value;
      },
      set(newValue) {
        console.log("set");
        console.log(this.selected);
        this.$emit("input", newValue);
      }
    }
  }
};
</script>
<style scoped>
div.selectbox {
  text-align: left;
}
label {
  display: inline-block;
  text-align: right;
  vertical-align: top;
  padding-right: 5px;
}
.required::after {
  content: "*";
  position: absolute;
  color: red;
}
</style>
