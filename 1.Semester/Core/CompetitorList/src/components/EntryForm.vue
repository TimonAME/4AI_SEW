<script>
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            rank: null
        }
    },
    props: {
        ranks: {
            type: Set,
            required: true
        }
    },
    methods: {
        createCompetitor() {
            const newCompetitor = {
                firstName: this.firstName,
                lastName: this.lastName,
                rank: this.rank
            }
            
            if (this.ranks.has(this.rank)) {
                alert('Rank already exists! \nPlease choose another rank.');
                return;
            }

            this.$emit('competitorCreated', newCompetitor, this.rank); // $emit is a method that emits an event, emit means to send out
            this.firstName = '';
            this.lastName = '';
            this.rank = null;
        }
    }
}
</script>

<template>
    <form @submit.prevent="createCompetitor" class="competitor-form">
      <label for="firstName" class="form-label">First Name:</label>
      <input type="text" id="firstName" v-model="firstName" required class="form-input">
      
      <label for="lastName" class="form-label">Last Name:</label>
      <input type="text" id="lastName" v-model="lastName" required class="form-input">
      
      <label for="rank" class="form-label">Rank:</label>
      <input type="number" id="rank" v-model="rank" class="form-input">
      
      <button type="submit" class="submit-button">Create Competitor</button>
    </form>
</template>
  
<style scoped>
  .competitor-form {
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid var(--color-border);
    border-radius: 5px;
    background-color: var(--color-background-soft);
  }
  
  .form-label {
    font-weight: bold;
    display: block;
    margin-top: 10px;
  }
  
  .form-input {
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid var(--color-border);;
    border-radius: 3px;
    background-color: var(--color-background-mute);
    color: var(--color-text);
  }
  
  .submit-button {
    display: block;
    width: 100%;
    padding: 10px;
    margin-top: 15px;
    background-color: #41b883;
    color: var(--color-text);
    border: none;
    border-radius: 3px;
    cursor: pointer;
    font-weight: bold;
  }
  
  .submit-button:hover {
    background-color: #41b883;
  }
</style>



<!--OLD

<template>
    <div>
        <h2>Competitor List</h2>
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Rank</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(competitor, index) in sortedCompetitors" :key="index">
                    <td>{{ competitor.firstName }}</td>
                    <td>{{ competitor.lastName }}</td>
                    <td>{{ competitor.rank }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

-->