<script>
export default {
    data() {
        return {
            searchedMovieList: [

            ],

            searchedValue: "",
        };
    },

    methods: {

    }
};
</script>

<template>
    <main>
        <div class="container">
            <section class="search-bar">
                <input type="text" name="movie-search-input" id="movie-search-input" placeholder="Cerca Film">
                <button>
                    Cerca
                </button>
            </section>
            <section class="searched-movie-wrapper">
                <ul class="searched-movie-list">
                    <li>
                        Titolo
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