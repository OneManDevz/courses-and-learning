<template>
  <div class="about flex flex-col items-center">
    <div class="absolute inset-0 z-0" @click="modal=false">

    </div>
    <input 
      type="text" 
      class="bg-gray-300 px-4 py-2 z-10" 
      autocomplete="off" 
      v-model="country" 
      @focus="modal = true"
    >

    <div v-if="filteredCountries && modal" class="z-10">
      <ul class="w-48 bg-gray-800 text-white">
        <li 
        class="py-2 border-b cursor-pointer"
        v-for="filteredCountry in filteredCountries" 
        v-bind:key="{filteredCountry}"
        @click="setCountry(filteredCountry)"
        >{{ filteredCountry}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      country: '',
      modal: false,
      countries: [
        'Slovakia',
        'Czech Republic',
        'United Kingdom',
        'Slovenia'
      ],
      filteredCountries: []
    }
  },
  mounted(){
    this.filterCountries();
  },
  methods: {
    filterCountries(){
      if(this.country.length == 0){
        this.filteredCountries = this.countries
      }
      this.filteredCountries = this.countries.filter( country => {
        return country.toLowerCase().startsWith(this.country.toLowerCase())
      })
    },
    setCountry(country){
      this.country = country;
      this.modal = false
    }
  },
  watch: {
    country(){
      this.filterCountries();
    }
  }
}
</script>