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
    <section class="subscription">
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
    <footer class="appointment-benefits"></footer>
  </section>
</template>
<script>
export default {
  data() {
    return {
      name: "Appointment",
      subsPlans: [
        { id: 0, plan: "Plan 1" },
        { id: 1, plan: "Plan 2" },
        { id: 2, plan: "Plan 3" },
        { id: 3, plan: "Plan 4" },
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
    };
  },
  methods: {
    showDetails(index) {
      this.detailsShown[index] = !this.detailsShown[index];
    },
  },
};
</script>
<style lang="scss" scoped>
.appointment {
  .appointment-header {
    background-color: #f2f2f2;
    padding: 40px 0;
    .header-wrapper {
      margin: 20px;
      background-color: white;
      img {
        width: 100%;
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
    margin: 20px;
    img {
      width: 100%;
    }
    .subscription-plans {
      ul {
        list-style-type: none;
        color: #f56928;
        font-weight: bold;
        font-size: 20px;
        li {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          line-height: 50px;
          button {
            background-color: #f56928;
            border: 0;
            border-radius: 25px;
            width: 40px;
            height: 40px;
            color: white;
            font-size: 30px;
            margin-left: 10px;
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
            }
          }
        }
      }
    }
  }
}
</style>
