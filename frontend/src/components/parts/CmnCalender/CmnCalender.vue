<!-- 子コンポーネント -->
<template>
  <div class="calender" v-if="isVisible">
    <label
      :class="{ required: isRequired }"
      :style="{
        width: labelWidth
      }"
    >
      {{ label }}
    </label>
    <input
      type="date"
      v-model="dateValue"
      :disabled="isDisabled"
      :style="{ width: boxWidth }"
    />
  </div>
</template>
<script>
export default {
  name: "CmnCalender",
  props: {
    /** v-modelのvalue */
    value: String,
    /** カレンダーの横幅 */
    boxWidth: {
      type: String,
      default: "10%"
    },
    /** ラベルテキスト */
    label: {
      type: String,
      default: ""
    },
    /** ラベルの横幅 */
    labelWidth: {
      type: String,
      default: "10%"
    },
    /** 非活性フラグ */
    isDisabled: {
      type: Boolean,
      default: false
    },
    /** 表示非表示切り替え */
    isVisible: {
      type: Boolean,
      default: true
    },
    /** 必須表示フラグ */
    isRequired: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    /** インプットがあった時、v-modelのvalue切り替え */
    dateValue: {
      get() {
        console.log("get");
        return this.$props.value;
      },
      set(newValue) {
        console.log("set");
        console.log(this.dateValue);
        this.$emit("input", newValue);
      }
    }
  }
};
</script>
<style scoped>
label {
  display: inline;
  text-align: right;
  padding-right: 5px;
}
.required::after {
  content: "*";
  position: absolute;
  color: red;
}
</style>
