<template>
  <menu class="menu-container">
    <div class="hamburger-icon" v-if="isLowRes">
      <font-awesome-icon @click="showNav" icon="fa-solid fa-bars" />
    </div>
    <nav class="nav-menu-high-res" v-if="!isLowRes">
      <ul class="nav-list">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  </menu>
  <nav :class="[{ active: isNavActive }, 'nav-menu']" v-if="isLowRes">
    <div class="nav-close">
      <font-awesome-icon @click="showNav" icon="fa-solid fa-xmark" />
    </div>
    <ul class="nav-list">
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
  <div
    :class="[{ active: isNavActive }, 'div-closing-nav']"
    @click="showNav"
    v-if="isLowRes"
  ></div>
  <section :class="[{ inactive: isNavActive }, 'contact-us']">
    <div class="text">
      <h1>Psychology specialist Dr. Sara Dowson</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad beatae,
        placeat dolor magnam ipsa eligendi ullam eveniet et vel consectetur
        nesciunt consequuntur excepturi reiciendis.
      </p>
    </div>
    <form action="post">
      <label for="email"></label>
      <input id="email" type="email" placeholder="Your email" required />
      <button>contact us</button>
    </form>
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
          assumenda autem totam, alias accusamus consectetur.
        </p>
        <div class="wrap">
          <font-awesome-icon icon="fa-solid fa-cart-shopping" />
          <router-link class="go-to-appointment" to="/"
            >Appointment</router-link
          >
        </div>
      </div>
      <div class="choose">
        <img
          src="../assets/head2.png"
          alt="image of head and heart made of hands"
          class="head-image"
        />
        <h3>Anxiety Disorders</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
          assumenda autem totam, alias accusamus consectetur.
        </p>
        <div class="wrap">
          <font-awesome-icon icon="fa-solid fa-cart-shopping" />
          <router-link class="go-to-appointment" to="/"
            >Appointment</router-link
          >
        </div>
      </div>
      <div class="choose">
        <img
          src="../assets/head3.png"
          alt="image of head and brain"
          class="head-image"
        />
        <h3>Psychologist Issues</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
          assumenda autem totam, alias accusamus consectetur.
        </p>
        <div class="wrap">
          <font-awesome-icon icon="fa-solid fa-cart-shopping" />
          <router-link class="go-to-appointment" to="/"
            >Appointment</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      name: "MenuAndHello",
      isNavActive: false,
      isLowRes: false,
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    showNav() {
      this.isNavActive = !this.isNavActive;
      document.body.style.overflow = this.isNavActive ? "hidden" : "visible";
      const app = document.querySelector("#app");
      app.classList.toggle("active");
    },
    handleResize(e) {
      if (e.target.innerWidth < 1025 && this.isLowRes !== true) {
        this.isLowRes = true;
      } else if (e.target.innerWidth >= 1025 && this.isLowRes !== false) {
        this.isLowRes = false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
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

    .fa-bars {
      font-size: 30px;
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
  }
  .nav-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    margin-top: 70px;
    text-align: center;
    li {
      font-weight: bold;
      margin-bottom: 20px;
      line-height: 250%;
      cursor: pointer;
    }
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

.contact-us {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 280px;
  padding: 10px 10px 50px 10px;
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
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
    max-width: 360px;
    h1 {
      font-size: 35px;
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
      background-color: #f56928;
      color: white;
      font-size: 20px;
      font-weight: bold;
      letter-spacing: 2px;
      border: 0;
      border-radius: 5px;
      text-transform: uppercase;
    }
    button:focus {
      outline: 2px solid black;
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
      .wrap {
        margin-top: 30px;

        .fa-cart-shopping {
          color: #f56928;
        }
        .go-to-appointment {
          margin-left: 5px;
          text-transform: uppercase;
          font-weight: bold;
        }
      }
    }

    .choose:nth-child(2) {
      background-color: #f56928;
      color: white;
      p {
        color: white;
      }
      .wrap {
        .fa-cart-shopping {
          color: white;
        }
      }
    }
  }
}

@media (min-width: 551px) {
  .nav-menu {
    width: 270px;
  }
  .contact-us {
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

@media (min-width: 761px) {
  .contact-us {
    padding: 20px 20px 80px 10vw;
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
      .nav-list {
        display: flex;
        list-style-type: none;
        justify-content: space-evenly;
        margin: 0;
        padding: 0;
        li {
          flex-basis: 20%;
          text-align: center;
        }
      }
    }
  }

  .contact-us {
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
