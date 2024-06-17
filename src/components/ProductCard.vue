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
        item: {
            type: Object,
            required: true,
        },
    }
};
</script>

<template>
    <!-- <article @mouseover="isHoveredTrue()" @mouseleave="isHoveredFalse()" class="product-card">
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
    </article> -->

    <article @mouseover="isHoveredTrue()" @mouseleave="isHoveredFalse()" class="product-card">
        <img :src="`https://image.tmdb.org/t/p/w342${item.poster_path}`" :alt="item.title || item.name"> 
        <div v-show="isHovered" class="product-info">
            <p class="product-title">
                <span>Titolo:</span> {{ item.title || item.name }} 
            </p>
            <p class="product-original-title">
                <span>Titolo Originale:</span> {{ item.original_title || item.original_name }}
            </p>
            <p class="product-vote">
                <span>Voto:</span> {{ getOneToFiveVote(item.vote_average) }}
            </p>
            <p class="product-overview">
                <span>Overview:</span> {{ item.overview }}
            </p>
        <div class="product-language">
            <span v-if="item.original_language === 'en'" :class="`fi fi-gb`"></span>
            <span v-else :class="`fi fi-${item.original_language.toLowerCase()}`"></span>
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
            bottom: 3px;
            top: 0;
            left: 0;
            right: 0;
            color: white;
            opacity: 0;
            transition: opacity .3s ease;
            background-color: rgba($color: black, $alpha: 0.7);

            &:hover {
                opacity: 1;
            }
        }
    }
</style>