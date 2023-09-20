<template>
  <a-row id="GlobalHeader" align="center" :wrap="false"
    ><!--Prevent login bottom warp when in small window-->
    <a-col flex="auto">
      <a-menu
        mode="horizontal"
        :selected-keys="selectedkeys"
        @menu-item-click="doMenuClick"
      >
        <a-menu-item
          key="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
          <div class="title-bar">
            <img class="logo" src="../assets/oj-logo.svg" />
            <div class="title">Jacky OJ</div>
          </div>
        </a-menu-item>
        <a-menu-item v-for="item in visiableRoutes" :key="item.path"
          ><!--Enable denamic headers menu from the filtered router file, which is filtered according to users' role-->
          {{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col flex="100px">
      <div>{{ store.state.user?.loginUser?.userName ?? "Login" }}</div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { routes } from "../router/routes";
import { useRoute, useRouter } from "vue-router";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import accessEnum from "@/access/accessEnum";
import checkAccess from "@/access/checkAccess";

const router = useRouter();
const store = useStore();

// Filter out the pages that should be displayed according to the userprofile
const visiableRoutes = computed(() => {
  return routes.filter((item, index) => {
    if (
      !checkAccess(store.state.user.loginUser, item?.meta?.access as string)
    ) {
      return false;
    }
    return true;
  });
});

//Default "Home" page
const selectedkeys = ref(["/"]);

//Monitor the user click and update the routes to the button
router.afterEach((click) => {
  selectedkeys.value = [click.path];
});

const doMenuClick = (key: string) => {
  router.push({ path: key });
};

// For test use (automatically login as admin after 5 seconds)
setTimeout(() => {
  store.dispatch("user/getLoginUser", {
    userName: "Jacky Admin",
    userRole: accessEnum.ADMIN,
  });
}, 5000);
</script>

<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.logo {
  height: 48px;
}

.title {
  color: #444;
  margin-left: 16px;
}
</style>
