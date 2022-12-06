<template>
  <section class="contact-us">
    <header>
      <span>Help 24/7</span>
      <h2>Our help offer</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic nulla
        porro odio ab, labore commodi eligendi.
      </p>
      <ul>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis.
        </li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
      </ul>
    </header>
    <footer>
      <span>Contact Us</span>
      <h2>Help form</h2>
      <form>
        <label for="name">Name</label>
        <input type="text" id="name" placeholder="Enter your Name" />
        <label for="message">Message</label>
        <textarea
          name=""
          id="message"
          placeholder="Enter your message"
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </footer>
  </section>
</template>
<script>
export default {
  data() {
    return {
      name: "ContactUs",
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/css/mixins";
$font-size-basic: 20px;
.contact-us {
  padding: 20px;
  margin-top: 50px;
  background-color: #f2f2f2;
  header {
    margin-top: 50px;
    span {
      font-size: $font-size-basic;
    }
    h2 {
      font-size: $font-size-basic * 2;
    }
    p {
      @include paragraph(130%);
    }
    ul {
      padding: 20px;
      li {
        padding: 5px 0;
        font-size: $font-size-basic;
        color: #f56928;
        font-weight: bold;
      }
    }
  }
  footer {
    span {
      font-size: $font-size-basic;
      letter-spacing: 1px;
    }
    h2 {
      font-size: $font-size-basic * 1.4;
      letter-spacing: 1px;
    }
    form {
      display: flex;
      flex-direction: column;
      background-color: white;
      padding: 20px;
      border-radius: 20px;
      height: 300px;
      label {
        margin: 5px 0;
        font-size: 17px;
      }
      input,
      textarea {
        font-size: 17px;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #aaa;
      }
      textarea {
        resize: vertical;
        min-height: 50px;
        height: 100px;
      }
      button {
        padding: 10px;
        width: 40%;
        align-self: flex-end;
        background-color: #f56928;
        color: white;
        border: 0;
        font-size: 18px;
      }
    }
  }
}
</style>
