<template>
  <div>
    <h4>Your Balance</h4>
    <h1>${{ Number(total(transactions)).toLocaleString() }}</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Balance",
  computed: {
    ...mapState({
      transactions: state => state.expenses.transactions
    })
  },
  methods: {
    total(transactions) {
      return transactions
        .map(transaction => transaction.amount)
        .reduce((acc, item) => (acc += item), 0);
    }
  }
};
</script>
