<template>
    <table class="transaction-table">
      <thead>
        <tr>
          <th>Transaction ID</th>
          <th>Transaction Method</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(transaction, index) in transaction_history" :key="index">
          <td>{{ transaction.id_transaction }}</td>
          <td>{{ transaction.transaction_method }}</td>
          <td>{{ transaction.balance }}</td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <style>
  .transaction-table {
    font-family: Arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    margin: 20px 0;
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }
  
  .transaction-table th, .transaction-table td {
    text-align: left;
    padding: 12px;
  }
  
  .transaction-table th {
    background-color: #0474b7;
    color: #fff;
  }
  
  .transaction-table tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  
  .transaction-table tr:hover {
    background-color: #e2e2e2;
  }
  </style>
  
  <script>
import axios from 'axios'
export default {
  name: 'HistoryClient',
  data() {
    return {
        id_client:'',
        id_userr: '',
        transaction_history:[]
    }
  },
  created() {
    this.id_client = this.$route.query.id_client
    this.id_userr = this.$route.query.id_userr
  },
  async mounted (){
    const history = await axios.get(`http://localhost:3001/api/getTransactions/${this.id_userr}/${this.id_client}`);
    this.transaction_history=history.data;
    console.log(history.data);
  }

  
  
}

  </script>