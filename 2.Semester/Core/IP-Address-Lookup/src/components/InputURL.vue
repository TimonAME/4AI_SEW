<script>
import { ref } from "vue";
import axios from "axios";

export default {
  name: "InputURL",
  setup() {
    let searchResults = ref([]);
    let searchResultsSun = ref([]);
    let searchResultsWeather = ref([]);
    let searchQuery = ref("");
    let datadelivered = ref(false);

    const getSearchResults = async () => {
      if (searchQuery.value.length > 3) {
        try {
          let response = await axios.get(
            `http://ip-api.com/json/${searchQuery.value}`
          );
          searchResults.value = response.data;
          //console.log(response.data);
          console.log(searchResults.value);
          console.log("Received data");

          if (searchResults.value.status == 'success') {
            // more data
            // https://api.sunrise-sunset.org/json?lat=40.7128&lng=-74.006&date=today

            let sunResponse = await axios.get(
              `https://api.sunrise-sunset.org/json?lat=${searchResults.value.lat}&lng=${searchResults.value.lon}&date=today`
            );
            searchResultsSun.value = sunResponse.data.results;

            //https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,relative_humidity_2m,rain,snowfall,cloud_cover,wind_speed_10m
            let weatherResponse = await axios.get(
              `https://api.open-meteo.com/v1/forecast?latitude=${searchResults.value.lat}&longitude=${searchResults.value.lon}&current=temperature_2m,relative_humidity_2m,rain,snowfall,cloud_cover,wind_speed_10m`
            );
            searchResultsWeather.value = weatherResponse.data.current;

            datadelivered.value = true;
          } else {
            datadelivered.value = false;
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    return {
      searchQuery,
      getSearchResults,
      searchResults,
      datadelivered,
      searchResultsSun,
      searchResultsWeather,
    };
  },
};
</script>

<template>
  <div>
    <!-- input field with v-model for the given value -->
    <input
      type="text"
      v-model="searchQuery"
      @input="getSearchResults"
      placeholder="e.g. eduvidual.at"
    />
    <br>
    <!-- Display search results -->
    <div v-if="datadelivered">
      <ul>
        <!-- display: query, country, regionName, lat & lon, timezone  -->
        <li>
          IP Address: {{ searchResults.query }}
        </li>
        <li>
          Geo Location:
        </li>
        <ul>
          <li>
            Country: {{ searchResults.country }}
          </li>
          <li>
            City: {{ searchResults.city }}
          </li>
          <li>
            Region: {{ searchResults.regionName }}
          </li>
          <li>
            Latitude: {{ searchResults.lat }}
          </li>
          <li>
            Longitude: {{ searchResults.lon }}
          </li>
        </ul>
        <li>
          Times:
        </li>
        <ul>
          <li>
            Curent Time: {{ searchResultsWeather.time }}
          </li>
          <li>
            Timezone: {{ searchResults.timezone }}
          </li>
          <li>
            Sunrise: {{ searchResultsSun.sunrise }}
          </li>
          <li>
            Sunset: {{ searchResultsSun.sunset }}
          </li>
        </ul>
        <li>
          Weather at Location:
        </li>
        <ul>
          <li>
            Temperature: {{ searchResultsWeather.temperature_2m }} °C
          </li>
          <li>
            Humidity: {{ searchResultsWeather.relative_humidity_2m }} %
          </li>
          <li>
            Rain: {{ searchResultsWeather.rain }} mm
          </li>
          <li>
            Snowfall: {{ searchResultsWeather.snowfall }} mm
          </li>
          <li>
            Cloud Cover: {{ searchResultsWeather.cloud_cover }} %
          </li>
          <li>
            Wind Speed: {{ searchResultsWeather.wind_speed_10m }} km/h
          </li>
        </ul>
      </ul>
    </div>

  </div>
</template>

<style scoped>
/* Your scoped styles here */
</style>