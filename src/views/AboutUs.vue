<template>
  <section class="about-us">
    <header class="about-us-hello">
      <div class="about-us-hello-wrapper">
        <div class="wrapper1">
          <h2>About us</h2>
          <h3 class="main-heading">
            Our Clinic Expert Psychologist from New York
          </h3>
          <p class="color-p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do mod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div class="wrapper2">
          <h3>Psycholigist Issues</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure fuga
            cupiditate quaerat ea nostrum dolorem aperiam?
          </p>
          <h3>Relationship Issues</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure fuga
            cupiditate quaerat ea nostrum dolorem aperiam?
          </p>
        </div>
      </div>
    </header>
    <section class="first-specialist">
      <img src="../assets/section-photo.jpeg" alt="person that holds glasses" />
      <div class="first-specialist-content">
        <img src="../assets/avatar.jpeg" alt="avatar of the specialist" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          voluptas, sint enim perferendis dolorum saepe?
        </p>
        <strong> Dr. Paul Smith </strong>
      </div>
    </section>
    <section class="pros">
      <div v-for="item in messagesList" class="pros-element" :key="item.id">
        <font-awesome-icon icon="fa-solid fa-square-check" />
        <strong>{{ item.message }}</strong>
      </div>
    </section>
    <section class="second-specialist">
      <header class="second-specialist-header">
        <p>Psychology Specialist</p>
        <h3>Dr. Sara Dowson</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
          placeat sit dolore dolores suscipit perferendis.
        </p>
      </header>
      <div class="second-specialist-wrapper">
        <section>
          <img
            src="../assets/head4.png"
            alt="head with visible brain and flover with leaves on top"
          />
          <div class="content-right">
            <h4>Our Mission</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis amet itaque, velit obcaecati necessitatibus culpa!
            </p>
          </div>
        </section>
        <section>
          <img src="../assets/head5.png" alt="Head with ligthbulb" />
          <div class="content-right">
            <h4>Our Vision</h4>
            <p>
              Sequi doloribus suscipit ut pariatur! Obcaecati fugit in iure,
              itaque natus quasi labore fuga. Dignissimos?
            </p>
          </div>
        </section>
      </div>
      <footer>
        <img src="../assets/advice.jpeg" alt="man that gives advice" />
      </footer>
    </section>
  </section>
</template>
<script>
export default {
  data() {
    return {
      name: "AboutUs",
      messagesList: [
        { id: 0, message: "Unlimited Revisions" },
        { id: 1, message: "Good Features" },
        { id: 2, message: "Best Solutions" },
        { id: 3, message: "24/7 Supports" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/css/mixins";
.about-us {
  .about-us-hello {
    display: flex;
    justify-content: center;
    background-color: #f2f2f2;
    .about-us-hello-wrapper {
      display: flex;
      flex-direction: column;
      padding: 50px 20px;
      margin-bottom: 50px;
      max-width: 1280px;

      h2 {
        text-transform: uppercase;
        font-size: 18px;
      }
      h3 {
        font-size: 24px;
      }
      .main-heading {
        font-size: 35px;
        margin: 15px 0 10px 0;
      }
      p {
        @include paragraph(120%);
        color: #333;
        margin: 0;
      }
      .color-p {
        @include paragraph(120%);
        color: #f56928;
        font-size: 20px;
        margin: 10px 0 30px 0;
      }
    }
  }
  .first-specialist {
    margin: 20px;
    img {
      display: block;
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
    .first-specialist-content {
      padding: 30px 10px;
      background-color: #f2f2f2;
      img {
        width: 80px;
        height: 80px;
        border-radius: 40px;
      }
      p {
        @include paragraph(150%);
        color: #333;
        margin: 25px 0;
      }
      strong {
        font-size: 20px;
      }
    }
  }
  .pros {
    display: flex;
    flex-direction: column;
    margin: 0 10px 100px 10px;
    .pros-element {
      width: 100%;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      margin-bottom: 10px;
      padding: 20px 0;
      .fa-square-check {
        color: #f56928;
        font-size: 100px;
        margin-bottom: 20px;
      }
      strong {
        text-align: center;
        font-size: 20px;
        letter-spacing: 1px;
      }
    }
    .pros-element:nth-child(2) {
      background-color: #f2f2f2;
    }
  }
  .second-specialist {
    display: block;
    flex-direction: column;
    // align-items: center;
    margin: 20px;
    .second-specialist-header {
      p {
        @include paragraph(120%);
        font-size: 20px;
        color: #333;
      }
      h3 {
        font-size: 35px;
        margin: 0px;
      }
    }
    .second-specialist-wrapper {
      display: flex;
      flex-direction: column;
      margin-top: 40px;
      section {
        display: flex;
        margin-bottom: 40px;
        img {
          width: 60px;
          height: 60px;
        }
        .content-right {
          padding-left: 10px;
          h4 {
            margin: 0;
            font-size: 20px;
          }
          p {
            @include paragraph(120%);
            color: #333;
          }
        }
      }
    }
    footer {
      margin-bottom: 50px;
      img {
        width: 100%;
        height: 250px;
        object-fit: cover;
      }
    }
  }
}

@media (min-width: 551px) {
  .about-us {
    .about-us-hello {
      // width: 551px;
      .about-us-hello-wrapper {
        width: 551px;
      }
    }

    .first-specialist {
    }
  }
}
@media (min-width: 761px) {
  .about-us {
    .about-us-hello {
      .about-us-hello-wrapper {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        width: 100%;
        padding: 50px 40px 0 40px;
        .wrapper1,
        .wrapper2 {
          flex-basis: 45%;
        }
      }
    }
  }
}
</style>
