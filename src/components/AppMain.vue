<script>
import "../../node_modules/flag-icons/css/flag-icons.min.css";
import CardsWrapper from "./CardsWrapper.vue";

export default {
    components: {
        CardsWrapper,
    },

    data() {
        return {

        };
    },

    methods: {
        
    },

    computed: {
        
    }
};
</script>

<template>
    <main>
        <div class="container">
            <CardsWrapper />
        </div>
    </main>
</template>

<style scoped lang="scss">
    @use "../styles/partials/variables" as *;
    @use "../styles/partials/mixins" as *;

    main {
        background-color: $appDark;
        padding: 2rem 0;
    }
</style>