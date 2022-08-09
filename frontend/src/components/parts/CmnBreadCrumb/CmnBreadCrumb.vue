<template>
  <div class="breadcrumb">
    <div class="breadcrumb-item">
      <div v-for="content in breadcrumbs" :key="content.index">
        <div class="items" v-if="content.path">
          <router-link :to="content.path">
            <span class="link">{{ content.name }}</span>
          </router-link>
          <span class="space">></span>
        </div>
        <div class="items" v-else>
          {{ content.name }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CmnBreadCrumb",
  /** プロパティ */
  props: {
    /** パンくずリストの名前とパスのリスト */
    breadcrumbs: {
      type: [],
      default: [
        {
          name: "Home",
          path: ""
        }
      ]
    }
  }
};
</script>
<style scoped>
.items {
  float: left;
  padding: 3px;
}
.breadcrumb {
  display: inline-block;
  width: 100%;
  height: 30px;
}
</style>
