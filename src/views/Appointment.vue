<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="appointment">
    <header class="appointment-header">
      <div class="header-wrapper">
        <img
          src="../assets/depression.jpeg"
          alt="woman sitting on a chair with depression"
        />
        <h2>Open for appointments</h2>
        <strong>
          <font-awesome-icon icon="fa-solid fa-phone" />123 456 789</strong
        >
      </div>
    </header>
    <section class="subscription" ref="plans">
      <img src="../assets/help.jpeg" alt="" />
      <section class="subscription-plans">
        <ul>
          <li v-for="item in subsPlans" :key="item.id">
            <span>{{ item.plan }}</span>
            <button @click="showDetails(item.id)">+</button>
            <ul
              class="subscription-plans-detail"
              :class="{ active: detailsShown }"
              v-if="detailsShown[item.id]"
            >
              <li v-for="detail in planDetails[item.id]" :key="detail.id">
                {{ detail.plan }}
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </section>
  </section>
</template>
<script>
import { globalStates } from "../components/GlobalStates.js";
export default {
  data() {
    return {
      name: "Appointment",
      subsPlans: [
        {
          id: 0,
          plan: "Plan 1 Lorem ipsum dolor sit amet consectetur ",
        },
        {
          id: 1,
          plan: "Plan 2 Lorem ipsum dolor sit ",
        },
        {
          id: 2,
          plan: "Plan 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          id: 3,
          plan: "Plan 4 Lorem ipsum dolor",
        },
      ],
      planDetails: [
        [
          { id: 0, plan: "Mattis nunc sed blandit libero volutpat" },
          { id: 1, plan: "Tortor at risus viverra adipiscing at in tellus" },
          { id: 2, plan: "Purus ut faucibus pulvinar elementum" },
          { id: 3, plan: "Blandit turpis cursus in hac habitasse" },
        ],
        [
          { id: 0, plan: "Interdum velit euismod in pellentesque massa" },
          {
            id: 1,
            plan: "Diam volutpat commodo sed egestas egestas fringilla",
          },
          { id: 2, plan: "Nibh nisl condimentum id venenatis a condimentum" },
          {
            id: 3,
            plan: "Tristique et egestas quis ipsum suspendisse ultrices gravidae",
          },
        ],
        [
          { id: 0, plan: "Mattis nunc sed blandit libero volutpat" },
          { id: 1, plan: "Tortor at risus viverra adipiscing at in tellus" },
          { id: 2, plan: "Purus ut faucibus pulvinar elementum" },
          { id: 3, plan: "Blandit turpis cursus in hac habitasse" },
        ],
        [
          { id: 0, plan: "Interdum velit euismod in pellentesque massa" },
          {
            id: 1,
            plan: "Diam volutpat commodo sed egestas egestas fringilla",
          },
          { id: 2, plan: "Nibh nisl condimentum id venenatis a condimentum" },
          {
            id: 3,
            plan: "Tristique et egestas quis ipsum suspendisse ultrices gravidae",
          },
        ],
      ],
      detailsShown: [false, false, false, false],
      globalStates,
    };
  },
  mounted() {
    this.globalStates.addRefToGlobalState("plans", this.$refs.plans);
  },
  methods: {
    showDetails(index) {
      this.detailsShown[index] = !this.detailsShown[index];
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/css/mixins";
.appointment {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  .appointment-header {
    background-color: #f2f2f2;
    // padding: 40px 0;
    width: 100%;
    .header-wrapper {
      margin: 20px;
      background-color: white;
      img {
        width: 100%;
        object-fit: cover;
      }
      h2 {
        text-align: center;
        letter-spacing: 1px;
      }
      strong {
        display: block;
        text-align: center;
        font-size: 20px;
        padding: 30px;
        letter-spacing: 2px;
        .fa-phone {
          color: #f56928;
          padding-right: 5px;
        }
      }
    }
  }
  .subscription {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    img {
      display: block;
      width: 95%;
      max-width: 560px;
    }
    .subscription-plans {
      padding: 0 20px;

      ul {
        font-weight: bold;
        font-size: 20px;
        padding: 0;
        color: #f56928;
        list-style-type: none;
        li {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          line-height: 50px;
          border-bottom: 1px solid #aaa;
          padding: 10px 0;

          span {
            @include paragraph(150%);
            flex-basis: 60%;
            flex-grow: 1;
            font-size: 15px;
          }

          button {
            background-color: #f56928;
            border: 0;
            border-radius: 25px;
            width: 40px;
            height: 40px;
            color: white;
            font-size: 30px;
            margin-left: 30px;
            cursor: pointer;
          }
          ul {
            margin: 20px 0;
            padding: 0;
            color: #333;
            font-size: 16px;
            list-style-type: "-";
            li {
              display: list-item;
              padding-left: 10px;
              line-height: 150%;
              border-bottom: 0;
            }
          }
        }
      }
    }
  }
}

@media (min-width: 551px) {
  .appointment {
    .appointment-header {
      padding: 50px 0;
      .header-wrapper {
        width: 93%;
        max-width: 560px;
        margin: 0 auto;
      }
    }
  }
}

@media (min-width: 761px) {
  .appointment {
    .appointment-header {
      .header-wrapper {
        display: flex;
        // width: 100%;
        max-width: 1280px;
        height: 300px;
        margin: 0 30px;
        img {
          flex-basis: 30%;
        }
        h2 {
          align-self: center;
          margin: 0 10px;
          flex-grow: 2;
        }
        strong {
          align-self: center;
          padding: 0;
          margin: 0 10px;
          flex-grow: 1;
        }
      }
    }
    .subscription {
      flex-direction: row;
      img {
        align-self: flex-start;
        width: 45%;
        height: 800px;
        object-fit: cover;
      }
      .subscription-plans {
        align-self: flex-start;
        ul {
          li {
            margin: 30px 0;
          }
        }
      }
    }
  }
}

@media (min-width: 1025px) {
  .appointment {
    // max-width: 1280px;
    .appointment-header {
      .header-wrapper {
        width: 95%;
        max-width: 1280px;
        margin: 0 auto;
        h2 {
          font-size: 30px;
        }
        strong {
          font-size: 25px;
        }
      }
    }
    .subscription {
      width: 95%;
      max-width: 1280px;
      img {
        // width: 50%;
        max-width: 600px;
      }
      .subscription-plans {
        flex-grow: 1;
      }
    }
  }
}
</style>
