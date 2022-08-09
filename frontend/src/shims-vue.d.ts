/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // import type Vue from "vue";
  // export default Vue;
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
