<template>
  <div class="radio" v-if="isVisible">
    <label
      id="title"
      :class="{ required: isRequired }"
      :style="{
        width: labelWidth
      }"
    >
      {{ label }}
    </label>
    <label
      class="items"
      :for="option.index"
      v-for="option in options"
      :key="option.index"
    >
      <input
        type="radio"
        :id="option.index"
        v-model="radio"
        :value="option"
        :disabled="isDisabled"
      />
      {{ option.value }}
    </label>
  </div>
</template>

<script>
export default {
  name: "CmnRadioButton",
  props: {
    /** v-modelのvalue */
    value: Object,
    /** 選択肢のリスト */
    options: {
      type: []
    },
    /** ラベルテキスト */
    label: {
      type: String,
      default: ""
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
    /** 表示非表示切り替え */
    isVisible: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    /** インプットがあった時、v-modelのvalue切り替え */
    radio: {
      get() {
        console.log("get");
        return this.$props.value;
      },
      set(newValue) {
        console.log("set");
        this.$emit("input", newValue);
      }
    }
  }
};
</script>
<style scoped>
div.radio {
  text-align: left;
}
label#title {
  display: inline-block;
  text-align: right;
  padding-right: 5px;
}
label.items {
  display: inline;
  text-align: left;
  width: 90px;
}
.required::after {
  content: "*";
  position: absolute;
  color: red;
}
</style>
