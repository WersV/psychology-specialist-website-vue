<template>
  <div class="modal">
    <h1>Book your visit</h1>
    <h2>Relationship Issues</h2>
    <form>
      <label for="firstName">First name:</label>
      <input type="text" name="firstName" id="firstName" />
      <label for="lastName">Last name:</label>
      <input type="text" name="lastName" id="lastName" />
      <label for="email">Email:</label>
      <input type="text" name="email" id="email" />
      <label for="date">Date:</label>
    </form>
    <font-awesome-icon icon="fa-solid fa-xmark" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "AppointmentModal",
    };
  },
};
</script>
<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: brown;
  z-index: 1;

  .fa-xmark {
    position: absolute;
    font-size: 25px;
    top: 10px;
    right: 12px;
    color: blue;
  }
}
</style>
