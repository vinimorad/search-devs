<template>
  <div id="app">
    <SearchDevelopers @changeValue="newSearchValue"  @changeLinguagem="newLinguagemValue" @changeModo="newModoValue"/>
    <CardsList :devs="filtredDevs"/>
  </div>
</template>

<script>

import SearchDevelopers from './components/SearchDevepolers'
import CardsList from './components/CardsList'
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      search: null,
      devs: [],
      linguagem: [],
      filtredDevs: [],
      modo: 'e',
    }
  },
  components: {
    SearchDevelopers,
    CardsList
  },
  created() {
        axios.get('https://bernardosantos.zeedhi.com/workfolder/dev.php').then(response => {
            this.devs = response.data.devs
            this.filtredDevs = response.data.devs
        })
    },
  methods: {
    newSearchValue: function (value) {
            this.search = value
            this.getFiltredDevs()
    },
    getFiltredDevs: function() {
            const devs = this.devs
            const escopo = this
            escopo.filtredDevs = devs.filter( dev => {
                let noFilters = !escopo.search && escopo.linguagem.length === 0 
                let sameNames = !escopo.search || escopo.getFilterCharacters(dev.name).indexOf(escopo.getFilterCharacters(escopo.search)) >= 0 
                let sameLanguages = dev.programmingLanguages.filter(programming => escopo.linguagem.indexOf(escopo.getFilterCharacters(programming.id)) >= 0)
                if (escopo.modo === 'e') {    
                    if (noFilters || (sameNames && (sameLanguages.length === escopo.linguagem.length))) {
                        return true
                    }
                    return false;
                } else {
                    if (noFilters || (sameNames && (escopo.linguagem.length === 0 || sameLanguages.length >= 1))) {
                        return true;
                    }
                    return false;
                }
            })
    },
    newLinguagemValue: function (value) {
            this.linguagem = value
            this.getFiltredDevs()
    },
    newModoValue: function (value) {
            this.modo = value
            this.getFiltredDevs()
    },
    getFilterCharacters: function (value) {
            return value.trim().toLowerCase()
        }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background: #EDEDED;
    font-family: roboto;
    font-size: 75.5%;
}



</style>
