<template>
  <menu class="menu-container" ref="home">
    <div class="hamburger-icon" v-if="isLowRes">
      <div
        class="hamburger-icon-container"
        @click="showNav"
        @keyup.enter="showNav"
        tabindex="0"
      >
        <font-awesome-icon icon="fa-solid fa-bars" />
      </div>
    </div>
    <nav class="nav-menu-high-res" v-if="!isLowRes">
      <NavList @liClick="goTo" />
    </nav>
    <section class="sent-message-form" v-if="globalStates.isFormSubmitted">
      <span>Form successfully sent</span>
    </section>
  </menu>
  <nav :class="[{ active: isNavActive }, 'nav-menu']" v-if="isLowRes">
    <div class="nav-close">
      <font-awesome-icon @click="showNav" icon="fa-solid fa-xmark" />
    </div>
    <NavList @liClick="goTo" />
  </nav>
  <div
    :class="[{ active: isNavActive }, 'div-closing-nav']"
    @click="showNav"
    v-if="isLowRes"
  ></div>
  <section :class="[{ inactive: isNavActive }, 'contact-us-hello']">
    <div class="contact-us-hello-wrapper">
      <div class="text">
        <h1>MindScape Psychology Clinic</h1>
        <p>
          Unlock the potential of your mind and embark on a transformative
          journey of self-discovery with our dedicated team of psychology
          specialists. We believe that everyone deserves to live a fulfilling
          and balanced life, and we are here to guide you every step of the way.
        </p>
      </div>
      <form @submit.prevent="onSubmit">
        <label for="email-hello"></label>
        <input
          id="email-hello"
          type="email"
          placeholder="Your email"
          required
          v-model="inputValue"
        />
        <button>contact us</button>
      </form>
    </div>
  </section>
  <section class="appointment">
    <div class="appointment-wrapper">
      <div class="choose">
        <img
          src="../assets/head1.png"
          alt="image of head and puzzle"
          class="head-image"
        />
        <h3>Relationship Issues</h3>
        <p>
          Unlock the secrets to healthy and fulfilling relationships at
          MindScape Psychology Clinic
        </p>
        <!-- <button class="go-to-appointment">
          <font-awesome-icon icon="fa-solid fa-cart-shopping" /> Appointment
        </button> -->
      </div>
      <div class="choose">
        <img
          src="../assets/head2.png"
          alt="image of head and heart made of hands"
          class="head-image"
        />
        <h3>Anxiety Disorders</h3>
        <p>
          Break Free from Anxiety: Discover Lasting Peace at MindScape
          Psychology Clinic
        </p>
        <!-- <button class="go-to-appointment">
          <font-awesome-icon icon="fa-solid fa-cart-shopping" /> Appointment
        </button> -->
      </div>
      <div class="choose">
        <img
          src="../assets/head3.png"
          alt="image of head and brain"
          class="head-image"
        />
        <h3>Psychologist Issues</h3>
        <p>
          Empower Your Mind: Seek Clarity and Solutions with Our Expert
          Psychologists
        </p>
        <!-- <button class="go-to-appointment">
          <font-awesome-icon icon="fa-solid fa-cart-shopping" /> Appointment
        </button> -->
      </div>
    </div>
  </section>
</template>
<script>
import NavList from "../components/NavList.vue";
import { globalStates } from "../components/GlobalStates.js";
import _ from "lodash";
export default {
  data() {
    return {
      name: "MenuAndHello",
      isNavActive: false,
      isLowRes: false,
      globalStates,
      inputValue: "",
      isScrollDisabled: false,
    };
  },
  components: {
    NavList,
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize(window.innerWidth);
    this.globalStates.addRefToGlobalState("home", this.$refs.home);
    window.addEventListener("scroll", _.throttle(this.handleScroll, 100));
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    showNav() {
      const app = document.querySelector("#app");
      this.isNavActive = !this.isNavActive;
      const overflow = this.isNavActive ? "hidden" : "visible";
      document.body.style.overflow = overflow;
      app.classList.toggle("active");
    },
    handleResize(e) {
      let width;
      if (typeof e === "number") {
        width = e;
      } else {
        width = e.target.innerWidth;
      }
      const isLowRes = width < 1025;
      if (isLowRes !== this.isLowRes) {
        this.isLowRes = isLowRes;
      }
    },
    onSubmit() {
      const key = "1a0bf743549b4122839c69f78395e388";
      const url = `https://emailvalidation.abstractapi.com/v1/?api_key=${key}&email=${this.inputValue}`;

      const sendValidationRequest = async (emailAddress) => {
        try {
          const apiResponse = await fetch(emailAddress);
          const data = await apiResponse.json();
          const isValid = data.is_valid_format.value;
          return isValid;
        } catch (error) {
          console.error(error);
          throw new Error(`Failed to validate email: ${error.message}`);
        }
      };
      const validateEmail = async () => {
        const isValid = await sendValidationRequest(url);
        if (isValid) {
          this.inputValue = "";
          this.globalStates.changeSubmitStatus();
        } else {
          alert("Please provide a correct email address.");
        }
      };

      validateEmail();
    },
    goTo(refName) {
      this.isScrollDisabled = true;
      this.globalStates.scrollToEl(refName);
      if (this.isLowRes) {
        this.showNav();
      }
    },
    handleScroll() {
      const { globalStates } = this;
      const isScrolledToBottom =
        window.innerHeight + Math.ceil(window.scrollY) >=
        document.body.offsetHeight;
      const { SECTIONS, lastSectionActive, currentRefOffset } = globalStates;

      if (
        window.scrollY === currentRefOffset ||
        (isScrolledToBottom && !lastSectionActive[3])
      ) {
        this.isScrollDisabled = false;
      }
      if (this.isScrollDisabled) {
        return;
      }

      const currentHeight = window.scrollY;
      const aboutUsOffset = SECTIONS.aboutUs.ref.offsetTop - 70;
      const plansOffset = SECTIONS.plans.ref.offsetTop - 70;
      const contactUsOffset = SECTIONS.contactUs.ref.offsetTop - 70;

      let sectionName = "";
      if (currentHeight >= 0 && currentHeight < aboutUsOffset) {
        sectionName = "home";
      } else if (
        currentHeight >= aboutUsOffset &&
        currentHeight < plansOffset
      ) {
        sectionName = "aboutUs";
      } else if (
        currentHeight >= plansOffset &&
        currentHeight < contactUsOffset
      ) {
        sectionName = isScrolledToBottom ? "contactUs" : "plans";
      } else if (isScrolledToBottom) {
        sectionName = "contactUs";
      }

      if (sectionName) {
        globalStates.changeClassOnScroll(sectionName);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/css/variables";
.menu-container {
  position: fixed;
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
  width: 100%;
  min-width: 280px;
  height: 70px;
  background-color: rgb(223, 223, 223);
  z-index: 15;
  .hamburger-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px 0;
    .hamburger-icon-container {
      cursor: pointer;
      .fa-bars {
        font-size: 30px;
      }
    }
  }
  .sent-message-form {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: 20px auto;
    max-width: 300px;
    height: 50px;
    border-radius: 5px;
    background-color: $nav-text;
    span {
      color: white;
      font-size: 20px;
    }
  }
}

.nav-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 65%;
  background-color: rgba(0, 0, 0, 0.9);
  height: 100vh;
  color: white;
  transform: translateX(-100%);
  transition: 0.3s ease-out;
  z-index: 20;
  .nav-close {
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 30px;
    cursor: pointer;
  }
}
.nav-menu.active {
  transform: translateX(0);
}

.div-closing-nav {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100vh;
  transform: translateX(-100%);
  opacity: 0;
  z-index: 15;
}
.div-closing-nav.active {
  animation: make-bcg-darker 0.3s forwards;
}

.contact-us-hello {
  background:
        /* top, transparent black, faked with gradient */ linear-gradient(
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    ),
    /* bottom, image */ url("../assets/main.jpeg");
  background-repeat: no-repeat;
  background-position: 15%;
  background-size: cover;
  color: white;
  margin-top: 70px;
  .contact-us-hello-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 280px;
    padding: 10px 10px 50px 10px;
    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 50px;
      max-width: 360px;
      h1 {
        font-size: 35px;
        margin-bottom: 0px;
      }
      p {
        font-weight: bold;
        line-height: 150%;
      }
    }
    form {
      width: 100%;
      max-width: 360px;
      input {
        width: 100%;
        height: 55px;
        margin: 20px 0;
        padding: 10px;
        font-size: 20px;
        box-sizing: border-box;
        border: 0;
        border-radius: 5px;
      }
      input:focus {
        outline: 2px solid black;
      }
      button {
        width: 100%;
        height: 55px;
        padding: 10px;
        background-color: $nav-text;
        color: white;
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 2px;
        border: 0;
        border-radius: 5px;
        text-transform: uppercase;
        cursor: pointer;
      }
      button:hover {
        background-color: darken($nav-text, 5%);
      }
      button:focus {
        outline: 2px solid black;
      }
    }
  }
}
.appointment {
  display: flex;
  justify-content: center;
  margin-top: 70px;
  padding: 10px;
  min-width: 280px;
  .appointment-wrapper {
    width: 450px;
    .choose {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 15px;
      margin-bottom: 30px;
      .head-image {
        width: 20%;
      }
      h3 {
        font-size: 20px;
        margin: 30px 0 0 0;
      }
      p {
        line-height: 150%;
        text-align: center;
        color: #333;
      }

      .go-to-appointment {
        margin-top: auto;
        display: inline-block;
        background-color: transparent;
        border: 0;
        letter-spacing: 0.5px;
        margin-left: 5px;
        text-transform: uppercase;
        font-weight: bold;
        color: $text-on-white;
        cursor: pointer;
        .fa-cart-shopping {
          color: $text-on-white;
        }
      }
    }

    .choose:nth-child(2) {
      background-color: $nav-text;
      color: white;
      p {
        color: white;
      }
      .fa-cart-shopping,
      button {
        color: white;
      }
    }
  }
}

@media (min-width: 551px) {
  .nav-menu {
    width: 270px;
  }
  .contact-us-hello {
    .contact-us-hello-wrapper {
      .text,
      form {
        max-width: 450px;
      }

      .text {
        h1 {
          font-size: 45px;
        }
        p {
          font-size: 20px;
        }
      }
    }
  }
}

@media (min-width: 761px) {
  .contact-us-hello {
    .contact-us-hello-wrapper {
      // padding: 20px 20px 80px 10vw;
      width: 80%;
      max-width: 1280px;
      margin: 0 auto;
      .text {
        max-width: 800px;
        align-self: flex-start;
        h1 {
          font-size: 65px;
        }
      }
      form {
        align-self: flex-start;
        display: flex;
        align-items: center;
        max-width: 600px;
        button {
          flex-basis: 50%;
          margin-left: 5px;
        }
      }
    }
  }

  .appointment {
    .appointment-wrapper {
      display: grid;
      grid-template: 1fr 1fr / 1fr 1fr;
      width: 700px;
    }
  }
}

@media (min-width: 1025px) {
  .menu-container {
    .nav-menu-high-res {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 40vw;
      font-size: 20px;
      color: black;
    }
    .sent-message-form {
      margin: 100px auto;
    }
  }

  .contact-us-hello {
    background-position: 15% 25%;
  }

  .appointment {
    .appointment-wrapper {
      grid-template: 1fr/ 1fr 1fr 1fr;
      column-gap: 20px;
      width: 1280px;
    }
  }
}

@keyframes make-bcg-darker {
  0% {
    opacity: 0;
    transform: translateX(0);
  }
  100% {
    opacity: 1;
    z-index: 15;
    transform: translateX(0);
  }
}
</style>
