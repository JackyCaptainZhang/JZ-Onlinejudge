<template>
  <div id="GlobalHeader">
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
      <a-menu-item v-for="item in routes" :key="item.path">
        {{ item.name }}
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script setup lang="ts">
import { routes } from "../router/routes";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

//Default "Home" page
const selectedkeys = ref(["/"]);

//Monitor the user click and update the routes to the button
router.afterEach((click) => {
  selectedkeys.value = [click.path];
});

const doMenuClick = (key: string) => {
  router.push({ path: key });
};
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
