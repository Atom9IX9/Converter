<template>
  <v-app theme="dark">
    <v-layout>
      <Navbar />
      <v-main class="main"><RouterView /></v-main>
    </v-layout>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: { Navbar },
};
</script>

<style scoped>
.main {
  padding-top: 20px;
  width: 100%;
  background: #0f1a3c;
}
</style>
