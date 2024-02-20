<script setup lang="ts">
import { ref } from "vue";
import SideBar from "./components/SideBar.vue"
import { axiosClient } from "./utils/AxiosClient";
import type { ICity, ICompany } from "./Types/types";

const companyData = ref<ICompany>()
const choosenCity = ref('')
const cities = ref<ICity[]>([])

axiosClient.get(`https://bitbucket.org/ilakhmotkin/front-end-assesment-ru/raw/09c0e12a2b5325e71f36c08e7e29dc8eefbdb081/company-response.json`).then(res => {
  console.log(res.data);
  companyData.value = res.data
  if (companyData.value) {
    companyData.value.status.today = res.data.status.today.split('T')[0].split('-').reverse().join('.')
  }
}).catch(e => console.log(e))

axiosClient.get(`https://bitbucket.org/ilakhmotkin/front-end-assesment-ru/raw/7bc28b7ede222e25fe44fec52ad1e74a03168501/cities-response.json`).then(res => {
  console.log(res.data);
  cities.value = res.data.cities
})

</script>

<template>
  <v-app>
    <SideBar />
    <v-main class="pt-2 pl-16">
      <v-avatar size="80"
        image="https://yastatic.net/naydex/yandex-search/c1Uu6n321/bfa145yNqyYI/XWZxjzqbLTTmI0G2HdyeFBXc85n4uWFe248rsUtVnYV8t03at1KD5e7dbu55NKTXAYDWDHRYsU7X83ItDF4SXcwStfsrTthw15YBNi2Mv8HB7eJcWPyw-v5KeoTuIA3wL1H6rTVEATaJaiw5vTSkZ3SEN_mQ7jcw"
        color="surface-variant" />
      <div>{{ companyData?.name }}</div>
      <div>Today: {{ companyData?.status.today }}</div>
      <div>Available products: {{ companyData?.status.availableProducts }}</div>
      <div>Unavailable products: {{ companyData?.status.nonAvailableProducts }}</div>
      <div>Products quantity: {{ companyData?.status.totalProducts }}</div>
      <div>Location: {{ choosenCity }}</div>
      <select v-model="choosenCity" class="border border-black border-opacity-10 w-52" name="cities">
        <option :value="item.name" v-for="item in cities" :key="item.code">{{ item.name }}</option>
      </select>
    </v-main>
  </v-app>
</template>