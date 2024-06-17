<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
    data() {
        return {
            store,       
        };
    },

    methods: {
        getMovie() {
            if(store.searchedValue.trim() !== "") {
                axios.get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                    api_key: 'fee27ab56233f46df7aed04f261571a8',
                    query: store.searchedValue,
                    // language: it-IT,
                    }
                    })
                    .then((response) => {
                        console.log(response.data.results);
                        store.searchedMovieList = response.data.results;
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
                    query: store.searchedValue,
                    // language: it-IT,
                    }
                    })
                    .then((response) => {
                        console.log(response.data.results);
                        store.searchedSeriesList = response.data.results;
                    })
                    .catch((error) => {
                        console.log(error);
                    })
                    .finally(function () {
                        // always executed
                });  
            }
        },
    }
};
</script>

<template>
    <header>
        <div class="container">
            <section class="logo">
                <h1>
                    Boolflix
                </h1>
            </section>
            <section class="search-bar">
                <input 
                type="text" 
                name="movie-search-input" id="movie-search-input" 
                v-model="store.searchedValue" placeholder="Cerca Film" 
                @keyup.enter="getMovie">
    
                <button @click="getMovie">
                    Cerca
                </button>
            </section>
        </div>
    </header>
</template>

<style scoped lang="scss">
    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>