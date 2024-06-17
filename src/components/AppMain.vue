<script>
import axios from 'axios';
import "../../node_modules/flag-icons/css/flag-icons.min.css";
import ProductCard from "./ProductCard.vue";
import { store } from '../store.js';

export default {
    components: {
        ProductCard,
    },

    data() {
        return {
            store,
        };
    },

    methods: {
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
    },

    computed: {
        searchedMovieList() {
            return store.searchedMovieList;
        },
        searchedSeriesList() {
            return store.searchedSeriesList;
        }
    }
};
</script>

<template>
    <main>
        <div class="container">
            <section class="searched-movie-wrapper">
                <ProductCard v-for="(movie, index) in searchedMovieList" :key="movie.id" :movie="movie"/>

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