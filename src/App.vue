<template>
  <v-app>
    <router-view name="toolbar" />
    <v-main>
      <router-view :key="$route.fullPath"/>
    </v-main>
  </v-app>
</template>

<script>

import { defineComponent} from "@vue/composition-api";

export default defineComponent({
  name: 'App',

  data: () => ({
    //
  }),
});
</script>
