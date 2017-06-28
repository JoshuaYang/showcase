<template lang="html">
    <div class="app-container">
        <card v-for="(item, i) in config" :key="i"
            :poster="item.poster"
            :text="item.name"
            :url="item.url"
        ></card>

        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
import Card from './Card.vue';

const config = [
    {
        name: 'Friskies_Grumpy_Cat',
        poster: 'image/UT_Friskies_Grumpy_Cat_SS.jpg',
        url: 'http://project.orzy.me/UT_Friskies_Grumpy_Cat_SS/',
    },
    {
        name: 'Microsoft_Cloud',
        poster: 'image/UT_Microsoft_Cloud_SS.jpg',
        url: 'http://project.orzy.me/UT_Microsoft_Cloud_SS/',
    },
    {
        name: 'Reebok_SSFP',
        poster: 'image/UT_Reebok_SSFP.jpg',
        url: 'http://project.orzy.me/UT_Reebok_SSFP/',
    },
    {
        name: 'Reebok_zquick',
        poster: 'image/UT_Reebok_zquick_SS.jpg',
        url: 'http://project.orzy.me/UT_Reebok_zquick_SS/',
    },
    {
        name: 'Shell_pennzoil',
        poster: 'image/UT_Shell_pennzoil_SS.jpg',
        url: 'http://project.orzy.me/UT_Shell_pennzoil_SS/',
    },
    {
        name: 'Simon_Mall',
        poster: 'image/UT_Simon_Mall.jpg',
        url: 'http://project.orzy.me/UT_Simon_Mall/',
    },
    {
        name: 'Xbox',
        poster: 'image/UT_Xbox.jpg',
        url: 'http://project.orzy.me/UT_Xbox/',
    },
];

export default {
    data() {
        return {
            config,
        };
    },
    components: {
        Card,
    },
};
</script>

<style lang="scss">
@import "../style/reset";
@import "../style/mixin";

:root{
    --column-count: 4;
}

@media (max-width: 450px) {
    :root{
        --column-count: 1;
    }
}

@media (max-width: 768px) {
    :root{
        --column-count: 2;
    }
}

@media (max-width: 1024px) {
    :root{
        --column-count: 3;
    }
}

body {
    background-color: #2f3238;
}

.app-container{
    column-count: var(--column-count);
    column-gap: 10px;
    padding: 10px;

    .card {
        width: 100%;
        margin-bottom: 10px;
    }
}
</style>
