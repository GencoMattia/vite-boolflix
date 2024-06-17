<script>
import axios from 'axios';
import "../../node_modules/flag-icons/css/flag-icons.min.css";
import ProductCard from "./ProductCard.vue";

export default {
    components: {
        ProductCard,
    },

    data() {
        return {
            searchedMovieList: [

            ],

            searchedSeriesList: [

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
                
                axios.get('https://api.themoviedb.org/3/search/tv', {
                    params: {
                    api_key: 'fee27ab56233f46df7aed04f261571a8',
                    query: this.searchedValue,
                    // language: it-IT,
                    }
                    })
                    .then((response) => {
                        console.log(response.data.results);
                        this.searchedSeriesList = response.data.results;
                        console.log(`Lista Serie TV = ${this.searchedMovieList}`)
                    })
                    .catch((error) => {
                        console.log(error);
                    })
                    .finally(function () {
                        // always executed
                });  
            }
        },

        getOneToFiveVote(voteAverage) {
            const parsedVote = parseFloat(voteAverage, 10);
            if (!isNaN(parsedVote)) {
                const roundedVote = Math.floor(parsedVote / 2);
                return roundedVote;
            } else {
                console.warn("Il voto fornito non è un numero:", voteAverage);
                return "Nessun voto disponibile";
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
                <ProductCard v-for="(movie, index) in searchedMovieList" :key="movie.id" :movie="movie"/>

                <ul class="searched-movie-list">
                    <li>
                        <h1>
                            Films
                        </h1>
                    </li>
                    <li v-for="movie in searchedMovieList" :key="movie.id">
                        <h2>
                            {{ movie.original_title }}
                        </h2>
                        <ul>
                            <li>
                                {{ `Titolo: ${movie.title}` }}
                            </li>
                            <li>
                                <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" :alt="movie.title">
                            </li>
                            <li>
                                {{ `Titolo Originale: ${movie.original_title}` }}
                            </li>
                            <li>
                                <span v-if="movie.original_language === 'en'" :class="`fi fi-gb`"></span>
                                <span v-else :class="`fi fi-${movie.original_language.toLowerCase()}`"></span>
                            </li>
                            <li>
                                {{ `Voto: ${movie.vote_average}` }}
                            </li>
                            <li>
                                {{ getOneToFiveVote(movie.vote_average) }}
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul class="searched-series-list">
                    <li>
                        <h1>
                            Series
                        </h1>
                    </li>
                    <li v-for="series in searchedSeriesList" :key="series.id">
                        <h2>
                            {{ series.original_name }}
                        </h2>
                        <ul>
                            <li>
                                {{ `Titolo: ${series.name}` }}
                            </li>
                            <li>
                                <img :src="`https://image.tmdb.org/t/p/w342${series.poster_path}`" :alt="series.name">
                            </li>
                            <li>
                                {{ `Titolo Originale: ${series.original_name}` }}
                            </li>
                            <li>
                                <span v-if="series.original_language === 'en'" :class="`fi fi-gb`"></span>
                                <span v-else :class="`fi fi-${series.original_language.toLowerCase()}`"></span>
                            </li>
                            <li>
                                {{ `Voto: ${series.vote_average}` }}
                            </li>
                            <li>
                                {{ getOneToFiveVote(series.vote_average) }}
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
        </div>
    </main>
</template>

<style scoped>

</style>