<template>
    <div>
    <header>
      <h1>Pesquisa de Desenvolvedores</h1>
      <section class="first-section">
            <div class="search">
                <label for="name" >Por Nome:</label>
                <input type="text" id="nameSearch" placeholder="Digite aqui..." autofocus @keyup="getSearchValue"/>
            </div>
            <div class="container-languages">
                <div class="filter">
                <span>Por linguagem:</span>
                <div class="optionsfilter" id="language">
                    <input type="radio" v-model="modo" value="E" id="1" name="option" checked />
                    <label>E</label>
                    <input type="radio"  v-model="modo" value="OU" id="2" name="option" />
                    <label>OU</label>
                </div>
                </div>
            <div class="languages">
                <div class="java language">
                    <input type="checkbox" v-model="linguagem" name="language" id="java" value="java" checked />
                    <label>Java</label>
                </div>
                <div class="php language">
                    <input type="checkbox" v-model="linguagem" id="php" name="language" value="php" checked />
                    <label>PHP</label>
                </div>
                <div class="javascript language">
                    <input type="checkbox" id="javascript" v-model="linguagem" name="language" value="javascript"  checked />
                    <label>JavaScript</label>
                </div>
                <div class="python language">
                    <input type="checkbox" id="python"  v-model="linguagem" name="language" value="python" checked />
                    <label>Python</label>
                </div>
            </div>
          </div> 
      </section>
    </header>
    </div>
</template>

<script>



export default {
    name: 'SearchDevelopers',
    data() {
        return {
            modo: 'e',
            linguagem: [],
        }
    },
    watch: {
        modo: function () {
            this.$emit('changeModo', this.modo)
        },
        linguagem: function () {
            this.$emit('changeLinguagem', this.linguagem)
        }
    },
    methods: {
        getSearchValue (event) {
            this.$emit('changeValue', event.target.value);
        }
    }
}
</script>

<style scoped>
section {
    align-items: center;
    gap: 0.6rem;
}

header {
    background: #FFFFFF;
    padding: 1rem;
}

header h1 {
    background: #FFFFFF;
    line-height: 2.625rem;
    font-size: 2.188rem;
}

header section {
    display: flex;
    margin-top: 1rem;
}

label {
    font-weight: 600;
}

.search {
    width: 72%;
}

.search label{
    display: block;
}

.container-languages {
    display: flex;
}

.filter {
    margin-right: 0.9rem;
}

.search input {
    width: 98.9%;
    margin-top: 0.5rem;
    padding: 0.6rem;
}

.optionsfilter {
    margin-top: 0.5rem;
}

.optionsfilter label:first-of-type{
    margin-right: 0.5rem;
}


.languages {
    display: flex;
    flex-wrap: wrap;
}

.language {
    flex-basis: 50%;
    margin-top: 0.5rem;
}


</style>
