<script>
import axios from 'axios';

export default {
    data() {
        return {
            searchedMovieList: [

            ],

            searchedValue: "",
        };
    },

    methods: {

        getMovie() {
            if(this.searchedValue.trim() !== "") {
                axios.get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                    api_key: 'fee27ab56233f46df7aed04f261571a8',
                    query: this.searchedValue,
                    // language: it-IT,
                    }
                    })
                    .then((response) => {
                        console.log(response.data.results);
                        this.searchedMovieList = response.data.results;
                        console.log(`Lista Film = ${this.searchedMovieList}`)
                    })
                    .catch((error) => {
                        console.log(error);
                    })
                    .finally(function () {
                        // always executed
                });  
            }
        }
    }
};
</script>

<template>
    <main>
        <div class="container">
            <section class="search-bar">
                <input type="text" name="movie-search-input" id="movie-search-input" v-model="searchedValue" placeholder="Cerca Film" @keyup.enter="getMovie">
                <button @click="getMovie">
                    Cerca
                </button>
            </section>
            <section class="searched-movie-wrapper">
                <ul class="searched-movie-list">
                    <li v-for="movie in searchedMovieList">
                        <h2>
                            {{ movie.original_title }}
                        </h2>
                        <ul>
                            <li>
                                {{ `Titolo: ${movie.title}` }}
                            </li>
                            <li>
                                {{ `Titolo Originale: ${movie.original_title}` }}
                            </li>
                            <li>
                                {{ `Lingua: ${movie.original_language}` }}
                            </li>
                            <li>
                                {{ `Voto: ${movie.vote_average}` }}
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
        </div>
    </main>
    <h1>
        Io sono un Main!
    </h1>
</template>

<style scoped>

</style>