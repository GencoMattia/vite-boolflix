<script>
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
    <section class="searched-movie-wrapper">

        <ProductCard v-for="(item, index) in [...searchedMovieList, ...searchedSeriesList]" :key="item.id" :item="item"/>

    </section>
</template>

<style scoped lang="scss">
    @use "../styles/partials/variables" as *;
    @use "../styles/partials/mixins" as *;

    section {
        @include flex-center;
        align-items: stretch;
        flex-wrap: wrap;
        gap: 1rem;
    }
</style>