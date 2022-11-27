<template>
  <MenuAndHello />
  <AboutUs />
  <Appointment />
</template>

<script>
import MenuAndHello from "./views/MenuAndHello.vue";
import AboutUs from "./views/AboutUs.vue";
import Appointment from "./views/Appointment.vue";

export default {
  data() {
    return {
      name: "App",
      components: {
        MenuAndHello,
        AboutUs,
        Appointment,
      },
    };
  },
  components: { MenuAndHello, AboutUs, Appointment },
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

<!-- https://nicepage.com/website-templates/preview/qualified-psychologist-help-1428794?device=desktop -->

<!-- Mogę później udoskonalić tę apkę i np wpisać nazwy specjalistów które poźniej się wyświetlą -->
