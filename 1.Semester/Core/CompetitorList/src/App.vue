<template>
  <div>
    <header>
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    </header>

    <main>
      <EntryForm @competitorCreated="addCompetitor" :ranks="ranks"/> <!-- Pass the ranks to the EntryForm component -->
      <br>
      <CompetitorList @competitorUpdated="updateCompetitor"  :competitors="competitors" :ranks="ranks"/> <!--@competitorUpdated="updateCompetitor" enfernen für advanced; Pass the competitors and ranks to the CompetitorList component -->
    </main>
  </div>
</template>

<script>
import EntryForm from './components/EntryForm.vue'
import CompetitorList from './components/CompetitorList.vue'

export default {
  components: {
    EntryForm,
    CompetitorList
  },
  data() {
    return {
      competitors: [
        //{ firstName: 'Max', lastName: 'Mustermann', rank: 69 },
      ],
      ranks: new Set(),
    };
  },
  methods: {
    addCompetitor(newCompetitor, rank) {
      this.competitors.push(newCompetitor); // Add the new competitor to the array
      this.ranks.add(rank); // Add the new competitor's rank to the set
    },

    /* NUR WEGEN ADVANCED AUSKOMMENTIERT */
    updateCompetitor(competitor, rank) {
      //put data in the Form, delet from List, let User update the data in the Form, push the updated data back to the List
      this.ranks.delete(competitor.rank); // Delete the competitor's rank from the set
      this.competitors.splice(this.competitors.indexOf(competitor), 1); // Delete the competitor from the array

      competitor.rank = rank; // Update the competitor's rank
      this.addCompetitor(competitor, rank); // Add the competitor back to the array
    },
     
  },

  //ADVANCED only (Eventbus)
  /*
  mounted() {
    this.emitter.on("competitorUpdated", (cr) => {
      this.updateCompetitor(cr.competitor, cr.r);
    })
  }
  */
  
}
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>