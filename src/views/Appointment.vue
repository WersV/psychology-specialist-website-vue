<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="appointment">
    <header class="appointment-header">
      <img
        src="../assets/depression.jpeg"
        alt="woman sitting on a chair with depression"
      />
      <h2>Open for appointments</h2>
      <strong>123 456 789</strong>
    </header>
    <section class="subscription">
      <img src="" alt="" />
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
<style lang="scss" scoped></style>
