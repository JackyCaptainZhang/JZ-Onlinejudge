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
import accessEnum from "@/access/accessEnum";
import { onMounted } from "vue";

const router = useRouter();
const store = useStore();

/**
 * todo The global initialise function. All the codes that only runs ONCE at the start can be written here
 */
const doInit = () => {
  console.log("Welcome to Jacky Online Judge System");
};
// Call the initialise function
onMounted(() => {
  doInit();
});

//Check if user clicks on the page that needed the permission control (Can be deleted, in case any invalid click)
router.beforeEach((to, from, next) => {
  if (to.meta?.access === accessEnum.ADMIN) {
    //Check the user admin status
    if (store.state.user.loginUser?.userRole !== accessEnum.ADMIN) {
      //Jump to NoAuth View if user is not admin
      next("/noAuth");
      return;
    }
  }
  //Pages that need not the permission control will not be affected
  next();
});
</script>
