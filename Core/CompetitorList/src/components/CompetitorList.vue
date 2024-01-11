
<script>
import Competitor from './Competitor.vue';

export default {
  components: {
    Competitor,
  },
  props: { //get data from parent (App.vue)
    competitors: {
      type: Array,
      required: true,
    },
    ranks: {
      type: Set,
      required: true,
    },
  },

  /*
  data() {
    return {
      newRank: null,
    };
  },
*/

  computed: {
    sortedCompetitors() {
      return this.competitors
            .sort((a, b) => a.lastName.localeCompare(b.lastName));
    },
  },
  methods: {
    updateCompetitor(competitor) {
      if (this.ranks.has(this.newRank)) {
        alert('Rank already exists! \nPlease choose another rank.');
        
      } else {
        // CORE ->
        this.$emit('competitorUpdated', competitor, this.newRank);

        // ADVACEND ->
        //const r = this.newRank;
        //this.emitter.emit('competitorUpdated', {competitor, r});
      }
      this.newRank = null;
    },
  }
};
</script>

<template>
  <div class="competitor-list">
    <h2 class="list-title">Competitor List</h2>
    <table class="competitor-table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Curent Rank</th>
          <th>Set/Update Rank</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(competitor, index) in sortedCompetitors" :key="index" class="competitor-row">
          <!--<td>{{ competitor.firstName }}</td>
          <td>{{ competitor.lastName }}</td>
          <td>{{ competitor.rank }}</td>-->
          <Competitor :firstName="competitor.firstName" :lastName="competitor.lastName" :rank="competitor.rank"/>

          <!-- Competitor Componente Benutzen !!!-->
          <td>
            <form @submit.prevent="updateCompetitor(competitor)">
              <input type="number" id="newRank" v-model="newRank" class="form-input">
              <!--Update Button that Calls the update method-->
              <button type="submit">Update</button>
            </form>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!--
  <div>
    <h2>Used Ranks</h2>
    <ul>
      <li v-for="rank in ranks" :key="rank">{{ rank }}</li>
    </ul>
  </div>
  -->
</template>

<style scoped>
.competitor-list {
  max-width: 600px;
  margin: 0 auto;
}

.list-title {
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
}

.competitor-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid var(--color-border);
}

.competitor-table th, .competitor-table td {
  padding: 10px;
  text-align: center;
  border: 1px solid var(--color-border);
}

.competitor-table th {
  background-color: #41b883;
  color: var(--color-text);
}

.competitor-row:hover {
  background-color: var(--color-background-soft);
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