<template>
  <div>
    <div class="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p class="money plus">{{ income(transactions) }}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p class="money minus">{{ expenses(transactions).toFixed(2) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "IncomeExpenses",
  computed: {
    ...mapState({
      transactions: state => state.expenses.transactions
    })
  },
  methods: {
    income(transactions) {
      return transactions
        .map(transaction => transaction.amount)
        .filter(amount => amount > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
    },
    expenses(transactions) {
      return transactions
        .map(transaction => transaction.amount)
        .filter(amount => amount < 0)
        .reduce((acc, item) => (acc += item), 0) * -1;
    }
  }
};
</script>
