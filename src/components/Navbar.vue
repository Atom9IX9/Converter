<template>
  <v-container fluid>
    <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      permanent
      @click="rail = false"
      color="rgb(0, 50, 100)"
    >
      <v-list-item
        prepend-avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxBoARmpqei4gE1D0VQxCNyw9Nwps9dPnNYw&usqp=CAU"
        nav
      >
        <template v-slot:append>
          <v-btn
            variant="text"
            icon="mdi-chevron-left"
            @click.stop="rail = !rail"
          ></v-btn>
        </template>
      </v-list-item>

      <v-divider></v-divider>

      <v-list density="compact">
        <v-list-item
          v-for="item in items"
          :prepend-icon="item.icon"
          :title="item.title"
          :value="item.title"
          @click="$router.push(item.path)"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-home", path: "/" },
        { title: "Converter", icon: "mdi-cash-multiple", path: "/convert" },
        { title: "News", icon: "mdi-newspaper-variant-outline", path: "/news" },
      ],
      rail: true,
    };
  },
};
</script>

<style scoped></style>
