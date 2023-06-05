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
          plan: "Individual Therapy Plan",
        },
        {
          id: 1,
          plan: "Couples Counseling Plan",
        },
        {
          id: 2,
          plan: "Family Therapy Plan",
        },
        {
          id: 3,
          plan: "Wellness and Resilience Plan",
        },
      ],
      planDetails: [
        [
          { id: 0, plan: "Personalized one-on-one therapy sessions" },
          {
            id: 1,
            plan: "Tailored treatment to address specific concerns and goals",
          },
          {
            id: 2,
            plan: "Exploration of underlying issues and development of coping strategies",
          },
          {
            id: 3,
            plan: "Focus on personal growth, resilience, and overall well-being",
          },
        ],
        [
          { id: 0, plan: "Joint therapy sessions for couples" },
          {
            id: 1,
            plan: "Improving communication and resolving conflicts",
          },
          { id: 2, plan: "Rebuilding trust and deepening emotional intimacy" },
          {
            id: 3,
            plan: "Addressing relationship challenges and enhancing overall partnership",
          },
        ],
        [
          {
            id: 0,
            plan: "Collaborative therapy sessions for the entire family",
          },
          { id: 1, plan: "Resolving conflicts and improving communication" },
          {
            id: 2,
            plan: "Fostering understanding, harmony, and healthy dynamics",
          },
          {
            id: 3,
            plan: "Addressing family-specific challenges and promoting stronger relationships",
          },
        ],
        [
          {
            id: 0,
            plan: "Focus on overall well-being and resilience-building",
          },
          {
            id: 1,
            plan: "Personalized strategies to manage stress and improve self-care",
          },
          {
            id: 2,
            plan: "Cultivating healthy habits and promoting emotional balance",
          },
          {
            id: 3,
            plan: "Enhancing mental health and achieving a greater sense of wellness",
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
@import "../assets/css/variables";
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
          color: $text-on-white;
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
        color: $text-on-white;
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
            background-color: $text-on-white;
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
            margin: 0 20px;
            padding: 0;
            color: #333;
            font-size: 16px;
            list-style-type: "•";
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
