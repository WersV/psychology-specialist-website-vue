<template>
  <footer class="footer-web">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, vitae
      quod? Esse, asperiores reprehenderit. Aliquid.
    </p>
    <span>Developed by <strong>Przemysław Botwina</strong></span>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      name: "FooterWeb",
    };
  },
};
</script>
<style lang="scss">
.footer-web {
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
  p {
    margin: 50px auto;
    max-width: 700px;
  }
  span {
    margin: 20px 0;
    max-width: 700px;
    strong {
      color: rgb(173, 108, 235);
    }
  }
}
</style>
