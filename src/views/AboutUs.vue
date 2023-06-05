<template>
  <section class="about-us" ref="aboutUs">
    <header class="about-us-hello">
      <div class="about-us-hello-wrapper">
        <div class="wrapper1">
          <h2>About us</h2>
          <p class="color-p">
            At MindScape Psychology Clinic, we are committed to providing
            exceptional care and support to individuals seeking assistance with
            a wide range of psychological issues. With a compassionate and
            client-centered approach, our team of dedicated psychologists
            creates a safe and nurturing environment where personal growth and
            healing can flourish.
          </p>
        </div>
        <div class="wrapper2">
          <h3>Psycholigist Issues</h3>
          <p>
            Through evidence-based practices and personalized treatment plans,
            our experienced psychologists work collaboratively with individuals
            to identify and address psychological issues, empowering them to
            overcome challenges and achieve mental well-being.
          </p>
          <h3>Relationship Issues</h3>
          <p>
            Our skilled psychologists provide compassionate and specialized
            guidance, helping couples and individuals navigate relationship
            issues, foster effective communication, and cultivate healthier and
            more fulfilling connections.
          </p>
        </div>
      </div>
    </header>
    <section class="specialist-pros">
      <div class="specialist-pros-container">
        <section class="first-specialist">
          <img
            src="../assets/section-photo.jpeg"
            alt="person that holds glasses"
          />
          <div class="first-specialist-content">
            <img src="../assets/avatar.jpeg" alt="avatar of the specialist" />
            <p>
              Hello and welcome! I am excited to embark on a transformative
              journey with you, helping you discover your inner strength and
              resilience while providing guidance and support every step of the
              way.
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
      </div>
    </section>
    <section class="second-specialist">
      <header class="second-specialist-header">
        <h3>Dr. Alexandra Bennett</h3>
        <p>
          Hello! As a specialist in psychology, I extend a heartfelt welcome to
          you. It is my privilege to join you on this journey of self-discovery,
          growth, and empowerment. Together, we will navigate the intricacies of
          the mind, unlocking the doors to a brighter future.
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
              Our mission at MindScape Psychology Clinic is to empower
              individuals, foster personal growth, and promote mental well-being
              by providing compassionate and evidence-based psychological care.
            </p>
          </div>
        </section>
        <section>
          <img src="../assets/head5.png" alt="Head with ligthbulb" />
          <div class="content-right">
            <h4>Our Vision</h4>
            <p>
              Our vision at MindScape Psychology Clinic is to create a world
              where individuals have the tools, support, and understanding to
              overcome psychological challenges, thrive in their lives, and
              achieve lasting happiness and fulfillment.
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
import { globalStates } from "../components/GlobalStates.js";
export default {
  data() {
    return {
      name: "AboutUs",
      messagesList: [
        { id: 0, message: "Expertise and Experience" },
        { id: 1, message: "Personalized Approach" },
        { id: 2, message: "Holistic Well-being" },
        { id: 3, message: "Supportive Environment" },
      ],
      globalStates,
    };
  },
  mounted() {
    this.globalStates.addRefToGlobalState("aboutUs", this.$refs.aboutUs);
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/css/mixins";
@import "../assets/css/variables";
.about-us {
  .about-us-hello {
    display: flex;
    justify-content: center;
    background-color: $bgc-main;
    .about-us-hello-wrapper {
      display: flex;
      flex-direction: column;
      padding: 50px 20px;
      margin-bottom: 50px;
      max-width: 1280px;
      h2 {
        text-transform: uppercase;
        font-size: 36px;
        margin: 0 0 20px 0;
      }
      h3 {
        margin: 0;
        font-size: 26px;
        margin: 0 0 10px 0;
      }
      p {
        @include paragraph(120%);
        color: #333;
      }
      .color-p {
        @include paragraph(120%);
        color: $text-on-gray;
        font-size: 20px;
        margin: 10px 0 30px 0;
      }
    }
  }
  .specialist-pros {
    .specialist-pros-container {
      max-width: 1280px;
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
          background-color: $bgc-main;
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
            color: $text-on-white;
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
          background-color: $bgc-main;
        }
      }
    }
  }

  .second-specialist {
    display: block;
    flex-direction: column;
    max-width: 1280px;
    // align-items: center;
    margin: 20px;
    .second-specialist-header {
      p {
        @include paragraph(120%);
        font-size: 20px;
        margin-top: 0;
        color: #333;
      }
      h3 {
        font-size: 35px;
        margin: 0px 0 10px 0;
      }
    }
    .second-specialist-wrapper {
      display: flex;
      flex-direction: column;
      margin-top: 30px;
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
    .specialist-pros {
      .specialist-pros-container {
        .first-specialist {
          position: relative;
          width: 510px;
          height: 560px;
          margin: 50px auto 80px auto;

          img {
            height: 500px;
            width: 70%;
          }
          .first-specialist-content {
            position: absolute;
            top: 50%;
            left: 20%;
          }
        }
      }
    }
    .second-specialist {
      max-width: 560px;
      padding: 0 20px;
      margin: 0 auto;
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
    .specialist-pros {
      .specialist-pros-container {
        .first-specialist {
          position: relative;
          width: 650px;
          height: 560px;
          margin: 50px auto 150px auto;

          img {
            height: 500px;
            width: 60%;
          }
          .first-specialist-content {
            position: absolute;
            top: 60%;
            left: 40%;
          }
        }

        .pros {
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-around;
          .pros-element {
            flex-basis: 45%;
          }
        }
      }
    }
    .second-specialist {
      display: grid;
      grid-template: 1fr 2fr / 1fr 1fr;
      column-gap: 50px;
      max-width: 1280px;
      padding: 0 50px;
      .second-specialist-header {
        margin-left: 40px;
      }
      .second-specialist-wrapper {
        grid-column: 1/2;
        grid-row: 2/3;
        margin-left: 40px;
      }
      footer {
        grid-column: 2/3;
        grid-row: 1/3;
        margin-right: 40px;
        img {
          height: 600px;
        }
      }
    }
  }
}

@media (min-width: 1025px) {
  .about-us {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    .about-us-hello {
      flex-basis: 100%;
      .about-us-hello-wrapper {
        display: flex;
        justify-content: space-between;
        padding: 50px 0 0 0;

        .wrapper1 {
          margin-left: 40px;
        }
        .wrapper2 {
          margin-right: 40px;
        }
      }
    }
    .specialist-pros {
      display: flex;
      justify-content: center;
      flex-basis: 100%;
      .specialist-pros-container {
        display: flex;
        justify-content: space-between;
        .first-specialist {
          flex-basis: 40%;
          margin: 50px 0 200px 40px;
          max-width: 640px;
          img {
            width: 90%;
          }
          .first-specialist-content {
            position: absolute;
            top: 60%;
            left: 5%;
          }
        }
        .pros {
          flex-basis: 40%;
          align-self: center;
          margin: 0 40px 0 0px;
          max-width: 640px;

          .pros-element {
            margin: 0;
          }
        }
      }
    }

    .second-specialist {
      flex-basis: 100%;
      padding: 0;
      margin: 0;
    }
  }
}
</style>
