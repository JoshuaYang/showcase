<template lang="html">
    <div class="app-container">
        <transition name="loading-transition">
            <loading v-if="!this.loaded"></loading>
        </transition>

        <card v-for="(item, i) in config" :key="i"
            :poster="item.poster"
            :text="item.name"
            :url="item.url"
        ></card>

        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
import _ from 'lodash';
import PictureLoader from 'joshua-picture-loader';

import Loading from './Loading.vue';
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
    {
        name: 'South_Africa_Tourism',
        poster: 'image/UT_South_Africa_Tourism_PGX.jpg',
        url: 'http://pgdemo2origin.undertone.com/screenshiftfp/UT_South_Africa_Tourism_PGX_1107/mobile.html',
    },
    {
        name: 'holiday-gift-curator',
        poster: 'image/R29_holiday_gift_curator.jpg',
        url: 'http://www.clientapprove.com/preview/R29_holiday_gift_curator/',
    },
    {
        name: 'Prego',
        poster: 'image/NYT17009_Prego.jpg',
        url: 'http://paidpost.nytimes.com/prego/could-the-most-flavorful-supermarket-tomatoes-actually-come-in-jars.html',
    },
    {
        name: 'DVF',
        poster: 'image/NYT_DVF.jpg',
        url: 'http://demos.clientapprove.com/NYT_dvf/',
    },
    {
        name: 'rev-rei',
        poster: 'image/Attn-rev-rei.jpg',
        url: 'http://www.clientapprove.com/preview/rev-rei-landing-page/#/',
    },
    {
        name: 'Loreal_portfolio',
        poster: 'image/Loreal_portfolio_site.jpg',
        url: 'http://www.clientapprove.com/preview/Loreal_portfolio_site',
        un: 'dev',
        pw: 'F@ncyPants145!',
    },
    {
        name: 'Alcoa',
        poster: 'image/NYT_Alcoa_PP.jpg',
        url: 'http://demos.clientapprove.com/NYT_Alcoa_PP/',
    },
    {
        name: 'coned',
        poster: 'image/NYT_coned.jpg',
        url: 'http://demos.clientapprove.com/NYT_coned/',
    },
    {
        name: 'paper-scissors-art',
        poster: 'image/NYT-paper-scissors-art.jpg',
        url: 'https://paidpost.nytimes.com/hennessy-paradis-imperial/the-sense-of-precision-series/paper-scissors-art.html',
    },
    {
        name: 'Activia',
        poster: 'image/NYT_Activia.jpg',
        url: 'http://adv.preview.nytimes.com/m/activia/doing-a-gut-check-scaffolding-next/',
    },
    {
        name: 'mexico-tourism',
        poster: 'image/NYT-mexico-tourism.jpg',
        url: 'http://adv.preview.nytimes.com/m/mexico-tourism/my-journey-to-mexico/',
    },
    {
        name: 'Adobe',
        poster: 'image/NYT-Adobe.jpg',
        url: 'https://paidpost.nytimes.com/adobe/carrying-the-digital-torch.html',
    },
    {
        name: 'Tylenol',
        poster: 'image/NYT1614_Tylenol_Paidpost.jpg',
        url: 'http://paidpost.nytimes.com/tylenol/what-moves-me.html',
    },
    {
        name: 'bee-2-b',
        poster: 'image/NYT1616_IBMWeather_PaidPost.jpg',
        url: 'http://paidpost.nytimes.com/ibm/bee-2-b.html',
    },
    {
        name: 'ChevronEfficiencyIDV',
        poster: 'image/NYT1618_ChevronEfficiencyIDV_PaidPost.jpg',
        url: 'http://paidpost.nytimes.com/chevron/how-the-us-has-cut-pollution-while-growing-the-economy.html',
    },
    {
        name: 'ChevronMobileMoments',
        poster: 'image/NYT1617_ChevronMobileMoments_PaidPost.jpg',
        url: 'http://paidpost.nytimes.com/chevron/what-do-you-really-know-about-natural-gas.html',
    },
    {
        name: 'PfizerPrevnar',
        poster: 'image/NYT1624_PfizerPrevnar_PaidPost.jpg',
        url: 'http://paidpost.nytimes.com/pfizer/for-the-active-and-over-50.html',
    },
    // {
    //     name: '',
    //     poster: '',
    //     url: '',
    // },
];

export default {
    data() {
        return {
            config: _.shuffle(config),
            loaded: false,
        };
    },
    mounted() {
        new PictureLoader({
            loadAll: () => {
                console.log('234234', this);
                this.loaded = true;
            },
        }).load();
    },
    components: {
        Loading,
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

.loading-transition-enter-active, .loading-transition-leave-active {
    transition: opacity 1s;
}

.loading-transition-enter, .loading-transition-leave-to {
    opacity: 0;
}
</style>
