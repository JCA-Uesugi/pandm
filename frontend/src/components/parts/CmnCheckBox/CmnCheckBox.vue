<template>
  <div class="checkbox" v-if="isVisible">
    <label
      id="title"
      :class="{ required: isRequired }"
      :style="{ width: labelWidth }"
      >{{ label }}
    </label>
    <label
      :for="option.key"
      class="items"
      v-for="option in options"
      :key="option.index"
    >
      <input
        type="checkbox"
        :id="option.key"
        v-model="checked"
        :value="option"
        :disabled="isDisabled"
      />
      {{ option.value }}
    </label>
  </div>
</template>
<script>
export default {
  name: "CmnCheckBox",
  props: {
    /** v-modelのvalue */
    value: [],
    /** 選択肢のオブジェクトリスト */
    options: {
      type: []
    },
    /** 非活性フラグ */
    isDisabled: {
      type: Boolean,
      default: false
    },
    /** ラベルの横幅 */
    labelWidth: {
      type: String,
      default: "20%"
    },
    /** 必須表示フラグ */
    isRequired: {
      type: Boolean,
      default: false
    },
    /** ラベルテキスト */
    label: {
      type: String,
      default: ""
    },
    /** 表示非表示切り替え */
    isVisible: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    /** インプットがあった時、v-modelのvalue切り替え */
    checked: {
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
div.checkbox {
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
