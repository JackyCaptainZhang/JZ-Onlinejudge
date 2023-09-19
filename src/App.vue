<template>
  <div id="app">
    <basic-layout />
  </div>
</template>

<style>
#app {
}
</style>

<script setup lang="ts">
import BasicLayout from "./layouts/BasicLayout";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

//Check if user clicks on the page that needed the permission control
router.beforeEach((to, from, next) => {
  if (to.meta?.access === "canAdmin") {
    //Check the user admin status
    if (store.state.user.loginUser?.role !== "Admin") {
      //Jump to NoAuth View if user is not admin
      next("/noAuth");
      return;
    }
  }
  //Pages that need not the permission control will not be affected
  next();
});
</script>
