<template>
  <div class="textarea" v-if="isVisible">
    <label
      :class="{ required: isRequired }"
      :style="{
        width: labelWidth
      }"
    >
      {{ label }}
    </label>

    <textarea
      v-model="areaValue"
      :rows="areaRows"
      :style="{ width: areaWidth }"
      :disabled="isDisabled"
      :maxlength="maxLength"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "CmnTextArea",
  /** プロパティ */
  props: {
    /** v-modelのvalue */
    value: String,
    /** ラベルテキスト */
    label: {
      type: String,
      default: ""
    },
    /** テキストエリアの横幅 */
    areaWidth: {
      type: String,
      default: "60%"
    },
    /** テキストエリアの行数(縦幅) */
    areaRows: {
      type: Number,
      default: 5
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
    /** 必須表示フラグ */
    isRequired: {
      type: Boolean,
      default: false
    },
    /** 最大桁数 */
    maxLength: {
      type: Number,
      default: 0
    },
    /** 表示非表示切り替え */
    isVisible: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    /** インプットがあった時、v-modelのvalue切り替え */
    areaValue: {
      get() {
        console.log("get");
        return this.$props.value;
      },
      set(newValue) {
        console.log("set");
        this.$emit("input", newValue);
        console.log(this.areaValue);
      }
    }
  }
};
</script>
<style scoped>
div .textarea {
  text-align: left;
}
label {
  display: inline-block;
  text-align: right;
  padding-right: 5px;
}
.required::after {
  content: "*";
  position: absolute;
  color: red;
}
</style>
