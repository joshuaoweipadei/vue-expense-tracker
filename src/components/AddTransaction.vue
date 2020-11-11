<template>
  <div>
    <h3>Add new transaction</h3>
    <ValidationObserver v-slot="{ handleSubmit }" ref="form">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <ValidationProvider name="Text" rules="required" v-slot="{ errors }">
          <div class="form-group">
            <label for="text">Text</label>
            <input
              type="text"
              class="form-control"
              v-model="text"
              placeholder="Enter text..."
            />
            <span class="small">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider name="Amount" rules="required" v-slot="{ errors }">
          <div class="form-group">
            <label for="amount"
              >Amount <br />
              <small>(negative - expense, positive - income)</small></label
            >
            <input
              type="number"
              v-model="amount"
              placeholder="Enter amount..."
            />
            <span class="small">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <button type="submit" class="btn">Add New Transaction</button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "addTransaction",
  data: () => {
    return {
      text: "",
      amount: ""
    };
  },
  methods: {
    ...mapActions({
      addTransaction: "expenses/addTransaction"
    }),
    onSubmit() {
      const { text, amount } = this;
      this.addTransaction({ text, amount });

      // Resetting Values
      this.text = this.amount = "";

      // Wait until the models are updated in the UI
      this.$nextTick(() => {
        this.$refs.form.reset();
      });
    }
  }
};
</script>

<style scoped>
.small {
  display: block;
  color: #af2d2d;
  font-size: 12px;
}
</style>
