<script>
import { FontAwesomeIcon } from "../assets/font-awesome";
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

export default {
    components: {
        FontAwesomeIcon,
    },

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

        getStarVote(max, item) {
            return max - this.getOneToFiveVote(item.vote_average);
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
    <article @mouseover="isHoveredTrue()" @mouseleave="isHoveredFalse()" class="product-card">
        <img v-if="item.poster_path" 
        :src="`https://image.tmdb.org/t/p/w342${item.poster_path}`" 
        :alt="item.title || item.name"> 
        <img v-else 
        src="../assets/img/No-Image-Placeholder.svg.png" 
        :alt="item.title || item.name"> 
        <div v-show="isHovered" class="product-info">
            <p class="product-title">
                <span>Titolo:</span> {{ item.title || item.name }} 
            </p>
            <p class="product-original-title">
                <span>Titolo Originale:</span> {{ item.original_title || item.original_name }}
            </p>
            <p class="product-vote">
                <span>Voto:</span> 
                <font-awesome-icon 
                    v-for="n in getOneToFiveVote(item.vote_average)" 
                    :key="n" 
                    :icon="['fas', 'star']" 
                    class="filled-star" 
                />
                <font-awesome-icon 
                    v-for="n in getStarVote(5, item)" 
                    :key="n + 5" 
                    :icon="['far', 'star']" 
                    class="empty-star" 
                />
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
@use "../styles/partials/variables" as *;
    @use "../styles/partials/mixins" as *;

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
            opacity: 0;
            transition: opacity .3s ease;
            background-color: rgba($color: black, $alpha: 0.7);

            &:hover {
                opacity: 1;
            }

            span {
                font-weight: bolder;
            }

            .filled-star {
                color: gold; // Colore per le stelle piene
            }

            .empty-star {
                color: lightgray; // Colore per le stelle vuote
            }
        }
    }

    img {
        width: 100%;
        height: 100%;
    }
</style>