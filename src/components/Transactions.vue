<template>
  <div v-if="transactions.length > 0">
    <h3>History</h3>
    <ul class="list">
      <li
        v-for="(transaction, index) in transactions"
        :key="transaction.id"
        :class="transaction.amount < 0 ? 'minus' : 'plus'"
      >
        {{ transaction.text }}
        <span>
          {{ sign(transaction.amount) }}
          ${{ Math.abs(transaction.amount) }}
        </span>
        <button class="delete-btn" @click="deleteTransact(index)">x</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Transactions",
  computed: {
    ...mapState({
      transactions: state => state.expenses.transactions
    })
  },
  methods: {
    ...mapActions({
      deleteTransaction: "expenses/deleteTransaction"
    }),
    deleteTransact(index) {
      this.deleteTransaction(index);
    },
    sign(amount) {
      return amount < 0 ? "-" : "+";
    }
  }
};
</script>
