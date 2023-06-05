<template>
  <footer class="footer-web">
    <p>
      "The greatest discovery of my generation is that human beings can alter
      their lives by altering their attitudes of mind." William James
    </p>
    <span
      >Developed by
      <a href="https://github.com/WersV" target="_blank"
        >Przemysław Botwina</a
      ></span
    >
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
    font-size: 20px;
  }
  span {
    margin: 20px 0;
    max-width: 700px;
    a {
      color: #ab86f9;
      text-decoration: none;
      font-weight: bold;
    }
  }
}
</style>
