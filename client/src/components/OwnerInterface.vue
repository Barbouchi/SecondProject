<script>
import axios from "axios"
export default {
    data() {
        return {
            user: {},
            owner: {},
            clients: [],
            inputValue: 0,
            showId: false,
            togleId: false,
            filteredClients: [],
            searchQuery: "",
          
        }
    },
    watch: {
        showId() {
            axios.get(`http://localhost:3001/api/getClient/${this.user.id_owner}`)
                .then((res) => {
                    console.log(res.data)
                    this.clients = res.data
                    this.filteredClients = res.data
                }
                )
                .catch(err => console.log(err))
        }
    },
    async mounted() {
        try {
            
           
            const owners = await axios.get(`http://localhost:3001/api/getOneOwner/${this.user.id_owner}`);
            
            const user = JSON.parse(localStorage.getItem('user'))
            this.owner = owners.data
             this.user=user.data
             const clients = await axios.get(`http://localhost:3001/api/getClient/${this.user.id_owner}`);
             console.log(this.user.id_owner);
             console.log(owners, 'owners');
            this.clients = clients.data
            this.filteredClients = this.clients.filter((client) =>
                client.first_name.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
          
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        historyOf(id_client){
            console.log("here");
            this.$router.push({name:'HistoryClient',query: { id_client:id_client,id_userr :this.user.id_owner  }  })
        },  
        getAmount(event) {
            console.log(event.target.value);
            this.inputValue = event.target.value
        },
        handleLogOut() {
      localStorage.removeItem('user');
      this.$router.push('/Home');
    },
        handleSearchInputChange(event) {
            this.filteredClients = this.clients.filter((client) =>
                client.first_name.toLowerCase().includes(this.searchQuery.toLowerCase()))
        },
        handleIdClick() {
            this.togleId = !this.togleId;
            console.log(this.user);
        },
        handleDeleteClient(clientId) {
            const clientToDelete = this.clients.find(client => client.idclients === clientId);
            if (clientToDelete.balance === 0) {
                axios.delete(`http://localhost:3001/api/deleteClient/${clientId}`).then(res => { this.showId = !this.showId })
                    .catch(err => console.log(err))
            } else {
                alert('The client has Debt, cannot be deleted');
            }
        },
        async handleIncreaseBalance(clientId) {
            try {
                const toAdd = parseInt(this.inputValue);
            console.log('id', clientId, "balance to add", toAdd);
            const response = await axios.put(`http://localhost:3001/api/addBalance/${clientId}`, { balance: toAdd });
            this.showId = !this.showId
            const history = await axios.post("http://localhost:3001/api/addTransaction",{
                idclients:clientId,
                id_owner:this.user.id_owner ,
                balance:toAdd,
                transaction_method:'+'
            })
            } catch (error) {
                console.log(error);
            }
           
        },
        async handleDecreaseBalance(clientId) {
            try {
                 const toSubtract = parseInt(this.inputValue);
            console.log('id', clientId, "balance to add", toSubtract);
            const response = await axios.put(`http://localhost:3001/api/retrieveBalance/${clientId}`, { balance: toSubtract });
                this.showId = !this.showId
                const history = await axios.post("http://localhost:3001/api/addTransaction",{
                idclients:clientId,
                id_owner:this.user.id_owner ,
                balance:toSubtract,
                transaction_method:'-'
            })
          
            } catch (error) {
                console.log(error);
            }
           
        }
    }
}
</script>
<template>
    <div class="allowner">
        <button className='logout' @click="handleLogOut">LogOut</button>
        <div className='headOwner'>
            <h1> <span className='welcomeword'> Welcome&nbsp;&nbsp;&nbsp; </span> {{ user?.first_name }},
                {{ user?.last_name }} </h1>
            <h1 className='urid' @click="handleIdClick">&nbsp;&nbsp;&nbsp;Your id: {{ this.togleId ? user?.id_owner :
                '*****' }} </h1>
        </div>
        <h2 className='clientlist'>Your clients</h2>
        <div className='inputclients'>
            <label htmlFor="searchInput"></label>
            <input placeholder='Search for a client  by his first name' type="text" v-model="searchQuery" />
            <input type="button" value="search" @click="handleSearchInputChange">
        </div>
        <ul class="client-list">
            <li v-for="(item, index ) in filteredClients" class="client-card" :key="index">
                <div class="card-header">
                    <h3>{{ item.first_name }} {{ item.last_name }}</h3>
                    <input type="button" value="X" class="delete-button" @click="handleDeleteClient(item.idclients)">
                    <input type="button" value="Show history"  @click="historyOf(item.idclients)">
                    <br>
                </div>
                <div class="card-body">
                    <p>Debt: {{ item.balance }} Millimes</p>
                    <div class="balance-input">
                        <input type="button" value="-" @click="handleDecreaseBalance(item.idclients)">
                        <input type="number" min="0" maxLength="6" @change="getAmount($event)">
                        <input type="button" value="+" @click="handleIncreaseBalance(item.idclients)">
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
