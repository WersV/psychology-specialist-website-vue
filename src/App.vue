<template>
  <MenuAndHello />
</template>

<script>
import MenuAndHello from "./views/MenuAndHello.vue";

export default {
  data() {
    return {
      name: "App",
      components: {
        MenuAndHello,
      },
    };
  },
  components: { MenuAndHello },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: arial;
  /* overflow: hidden; */
  #app.active {
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
