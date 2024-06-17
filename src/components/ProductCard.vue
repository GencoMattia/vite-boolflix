<script>
export default {
    data() {
        return {
        
        };
    },

    props: {
        searchedMovieList: {
            type: Object,
            required: true,
        },

        searchedSeriesList: {
            type: Object,
            required: true,
        },
    }
};
</script>

<template>
    <article v-for="movie in searchedMovieList" :key="movie.id" class="product-card">
        <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" :alt="movie.title">
        <div class="product-info">
            <p class="product-title">
                Titolo
            </p>
            <p class="product-original-title">
                Titolo Originale
            </p>
            <p class="product-vote">
                Voto
            </p>
            <p class="product-overview">
                Descrizione
            </p>
        </div>
    </article>
</template>

<style scoped>

</style>