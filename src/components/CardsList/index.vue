<template>
    <div>
        <section>
        <div class="container">
            <h2 v-text="devs.length + ' Resultados '"/>
            <div class="box">
                <div class="card" v-for="dev in devs" :key="dev.key" @click="openModal(dev)">
                  <img :src="dev.picture" alt="">
                  <div class="info-card">
                      <div class="description">
                        <label class="dev-name" v-text="dev.name"/>
                        <small v-text="dev.age + ' anos'"/>
                        <small v-text="dev.email"/>
                        <img class="iconLanguage" v-for="lang in dev.programmingLanguages" :key="lang.key" :src="imgLang[lang.id]" alt="">
                      </div>
                  </div>
                </div>               
            </div>
        </div>
    </section>
    </div>
</template>

<script>


export default {
    name: 'CardsList',
    props: ['devs'],
    data() {
        return {
            imgLang: {
                'JavaScript': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/640px-Unofficial_JavaScript_logo_2.svg.png',
                'Python': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png',
                'Java': 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
                'Php': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/800px-PHP-logo.svg.png'
            },
            filtredDevs: [],
            search: null,
        }
    },
    methods: {
        openModal: function (dev) {
            var devLength = dev.programmingLanguages.length
            var devLangs = ''
            for (var i = 0; i < devLength; i++) {
                devLangs += `<img src=${this.imgLang[dev.programmingLanguages[i].id]}>
                             <span >${dev.programmingLanguages[i].language}</span>
                             <label >${dev.programmingLanguages[i].experience}</label>
                            `
            }
            this.$modal.show(
            {
                template: `
                   

                <div class="modal">
                    <div class="modalinfo">
                        <div class="dev-img">
                            <img src="${dev.picture}"  />
                        </div>
                        <div class="heroinfo">
                            <div class="dev-box">
                                <h2 class="card-title">${dev.name}</h2>
                                <div class="closemodal">
                                    <i @click="$emit('close')" class="fa-solid fa-xmark fa-lg" id="closemodal" style="color: #777777; cursor: pointer"></i>
                                </div>
                            </div>
                            <div class="containerhero">
                                <div class="infowidth">
                                    <p>${dev.age} anos</p>
                                    <div class="modal-contacts">
                                        <h3>Contato</h3>
                                        <p class="adjust">${dev.email}</p>
                                        <p class="adjust"><a href="#">http://www.github.com/camwillm</a></p>
                                        <p class="adjust">Telefone: +55 11 99999-9999</p>
                                    </div>
                                    <div class="modal-languages">
                                        <h3>Linguagens</h3>
                                        <div class="modal-language">
                                            ${devLangs}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `
            },
            { height: 'auto' })
            
        },
    }
    
}
</script>

<style >




.vm--modal {
    width: 35.875rem;
    height: 30.563rem;
    background: #FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.15) 0 0.5rem 0.5rem;
    border-radius: 0.5rem;
}

.card {
    display: flex;
    margin: 0 1.5rem 1.5rem 0;
    background: #FFFFFF;
    height: 7.125rem;
    border-radius: 0.6rem;
    box-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
    cursor: pointer;
}

.card img {
    width: 7.5rem;
    height: 7.125rem;
    border-top-left-radius: 0.6rem;
    border-bottom-left-radius: 0.6rem;
}

.info-card {
    width: 100%;
   
}

.info-card img {
    width: 1.313rem;
    height: 1.313rem;
    position: relative;
    top: 1rem;
}

.card-title {
    margin-left: 1.2rem;
}

.description {
    padding: 1rem;
    display: block;
}

.description small{
    display: block;
    color: #7B7B7B;
    margin-top: 0.1rem;
}

.adjust {
    margin-bottom: 0.6rem;
}

.container {
    width: 100%;
}

.container h2{
    margin: 1rem;
}

.dev-name {
    font-weight: bold;
}

.box {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin: 1rem;
}

.modalinfo{
    padding: 1rem;
    display: flex;
}

.dev-img img{
    width: 7.5rem;
    height: 9.313rem;
}

.heroinfo{
    width: 100%;
}

.dev-box {
    display: flex;
    justify-content: space-between;
}

.infowidth{
    margin-left: 1.2rem;
}

.infowidth p{
    width: 25rem;
}

.modal-contacts {
    margin-top: 1rem;
}

.modal-contacts h3 {
    margin-bottom: 0.6rem;
}

.modal-languages h3 {
    margin-bottom: 0.6rem;
}

.modal-language {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.5rem;
    align-items: center;
}

.modal-language label {
    font-weight: bold;
}

.modal-language img {
    width: 1.2rem;
}

.modal-language span {
    margin-right: 5rem;
}

@media (max-width: 1100px){
    .box {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

}

@media (max-width: 800px){
    .box {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

}

@media (max-width: 567px){
    .modal {
        width: 23.5rem;
    }

    .dev-img {
        height: 15rem;
    }


    .modal-contacts {
        width: 13.9rem;
        position: relative;
        right: 8.70rem;
    }

    .modal-languages {
        position: relative;
        right: 8.70rem;
    }

    .modal-contacts p{
        font-size: 0.9rem;
        width: 1rem;
    }

    .dev-box {
        justify-content:flex-start;
    }

    .dev-box h2 {
        /* font-size: 1.2rem; */
        margin-right: 4rem;
    }

    .infowidth p {
        width: 9rem;
    }


    .containerhero {
        width: 15rem;
    }

    .modalinfo h2, h3{
        font-size: 1.2rem;
    }

    .modalinfo p{
        width: 9rem;
    }
}

@media (max-width: 565px){
    .box {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }

    .filter {
        display: flex;
        margin-right: 1rem;
    }

    .first-section {
        display: block;
    }

    .container-languages {
        display: flex;
    }

    .filter {
        display: block;
    }

    .search {
        width: 100%;
        margin-bottom: 1.5rem;
    }
}

@media (max-width: 279px){
    html {
        font-size: 0.7rem;
    }

}


</style>
