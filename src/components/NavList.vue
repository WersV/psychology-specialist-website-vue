<template>
  <ul class="nav-list">
    <li
      :class="{ active: this.globalStates.isSectionActive[0] }"
      @click="liClick('home')"
      @keyup.enter="liClick('home')"
      tabindex="0"
    >
      Home
    </li>
    <li
      :class="{ active: this.globalStates.isSectionActive[1] }"
      @click="liClick('aboutUs')"
      @keyup.enter="liClick('aboutUs')"
      tabindex="0"
    >
      About
    </li>
    <li
      :class="{ active: this.globalStates.isSectionActive[2] }"
      @click="liClick('plans')"
      @keyup.enter="liClick('plans')"
      tabindex="0"
    >
      Plans
    </li>
    <li
      :class="{ active: this.globalStates.isSectionActive[3] }"
      @click="liClick('contactUs')"
      @keyup.enter="liClick('contactUs')"
      tabindex="0"
    >
      Contact
    </li>
  </ul>
</template>
<script>
import { globalStates } from "../components/GlobalStates.js";
export default {
  data() {
    return {
      name: "NavList",
      globalStates,
    };
  },
  methods: {
    liClick(refName) {
      this.$emit("liClick", refName);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/variables";
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
  li.active {
    color: #f56928;
  }
}
@media (min-width: 1025px) {
  .nav-list {
    display: flex;
    list-style-type: none;
    justify-content: space-evenly;
    margin: 0;
    padding: 0;
    li {
      font-weight: normal;
      margin-bottom: 0;
      line-height: 100%;
      flex-basis: 20%;
      text-align: center;
      padding: 5px;
      cursor: pointer;
    }
    li.active {
      background-color: $nav-text;
      border-radius: 7px;
      color: white;
    }
  }
}
</style>
