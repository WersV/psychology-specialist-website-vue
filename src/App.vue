<template>
  <MenuAndHello />
  <!-- <AboutUs />
  <Appointment />
  <ContactUs />
  <FooterWeb /> -->
</template>

<script>
import MenuAndHello from "./views/MenuAndHello.vue";
import AboutUs from "./views/AboutUs.vue";
import Appointment from "./views/Appointment.vue";
import ContactUs from "./views/ContactUs.vue";
import FooterWeb from "./views/FooterWeb.vue";

export default {
  data() {
    return {
      name: "App",
      components: {
        MenuAndHello,
        AboutUs,
        Appointment,
        ContactUs,
        FooterWeb,
      },
    };
  },
  components: { MenuAndHello, AboutUs, Appointment, ContactUs, FooterWeb },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: arial;
  /* overflow: hidden; */
}
</style>

<!-- https://nicepage.com/website-templates/preview/qualified-psychologist-help-1428794?device=desktop -->

<!-- Mogę później udoskonalić tę apkę i np wpisać nazwy specjalistów które poźniej się wyświetlą -->
