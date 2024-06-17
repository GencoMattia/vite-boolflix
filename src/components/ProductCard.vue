<script>
export default {
    data() {
        return {
            isHovered: false,
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
        },

        isHoveredTrue() {
            this.isHovered = true;
        },

        isHoveredFalse() {
            this.isHovered = false;
        }
    },

    props: {
        movie: {
            type: Object,
            required: true,
        },
    }
};
</script>

<template>
    <article @mouseover="isHoveredTrue()" @mouseleave="isHoveredFalse()" class="product-card">
        <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" :alt="movie.title">
        <div v-show="isHovered" class="product-info">
            <p class="product-title">
                <span>Titolo:</span> {{ movie.title }}
            </p>
            <p class="product-original-title">
                <span>Titolo Originale:</span> {{ movie.original_title }}
            </p>
            <p class="product-vote">
                <span>Voto:</span> {{ getOneToFiveVote(movie.vote_average) }}
            </p>
            <p class="product-overview">
                <span>Overview:</span> {{ movie.overview }}
            </p>
            <div class="product-language">
                <span v-if="movie.original_language === 'en'" :class="`fi fi-gb`"></span>
                <span v-else :class="`fi fi-${movie.original_language.toLowerCase()}`"></span>
            </div>
        </div>
    </article>
</template>

<style scoped lang="scss">
    article {
        width: 342px;
        position: relative;

        
        .product-info {
            display: flex;
            flex-direction: column;
            justify-content: end;
            position: absolute;
            bottom: 0;
            top: 0;
            left: 0;
            right: 0;
            color: white;
            // transition: all .3s;
            background-color: rgba($color: black, $alpha: 0.5);
        }
    }
</style>