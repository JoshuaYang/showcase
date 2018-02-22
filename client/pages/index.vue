<template>
  <div class="app-container">
    <card v-for="(item, i) in config" :key="i"
        :poster="item.poster"
        :text="item.name"
        :url="item.url"
    ></card>
  </div>
</template>

<script>
import _ from 'lodash';

import card from '~/components/card.vue';

const config = [
  {
    name: 'Friskies_Grumpy_Cat',
    poster: require('~/assets/image/UT_Friskies_Grumpy_Cat_SS.jpg'),
    url: 'http://project.orzy.me/UT_Friskies_Grumpy_Cat_SS/',
  },
  {
    name: 'Microsoft_Cloud',
    poster: require('~/assets/image/UT_Microsoft_Cloud_SS.jpg'),
    url: 'http://project.orzy.me/UT_Microsoft_Cloud_SS/',
  },
  {
    name: 'Reebok_SSFP',
    poster: require('~/assets/image/UT_Reebok_SSFP.jpg'),
    url: 'http://project.orzy.me/UT_Reebok_SSFP/',
  },
  {
    name: 'Reebok_Zquick',
    poster: require('~/assets/image/UT_Reebok_zquick_SS.jpg'),
    url: 'http://project.orzy.me/UT_Reebok_zquick_SS/',
  },
  {
    name: 'Shell_Pennzoil',
    poster: require('~/assets/image/UT_Shell_pennzoil_SS.jpg'),
    url: 'http://project.orzy.me/UT_Shell_pennzoil_SS/',
  },
  {
    name: 'Simon_Mall',
    poster: require('~/assets/image/UT_Simon_Mall.jpg'),
    url: 'http://project.orzy.me/UT_Simon_Mall/',
  },
  {
    name: 'Xbox',
    poster: require('~/assets/image/UT_Xbox.jpg'),
    url: 'http://project.orzy.me/UT_Xbox/',
  },
  {
    name: 'South_Africa_Tourism',
    poster: require('~/assets/image/UT_South_Africa_Tourism_PGX.jpg'),
    url: 'http://pgdemo2origin.undertone.com/screenshiftfp/UT_South_Africa_Tourism_PGX_1107/mobile.html',
  },
  {
    name: 'Holiday_Gift_Curator',
    poster: require('~/assets/image/R29_holiday_gift_curator.jpg'),
    url: 'http://www.clientapprove.com/preview/R29_holiday_gift_curator/',
  },
  {
    name: 'Prego',
    poster: require('~/assets/image/NYT17009_Prego.jpg'),
    url: 'http://paidpost.nytimes.com/prego/could-the-most-flavorful-supermarket-tomatoes-actually-come-in-jars.html',
  },
  {
    name: 'DVF',
    poster: require('~/assets/image/NYT_DVF.jpg'),
    url: 'http://demos.clientapprove.com/NYT_dvf/',
  },
  {
    name: 'Rev_Rei',
    poster: require('~/assets/image/Attn-rev-rei.jpg'),
    url: 'http://www.clientapprove.com/preview/rev-rei-landing-page/#/',
  },
  {
    name: 'Loreal_Portfolio',
    poster: require('~/assets/image/Loreal_portfolio_site.jpg'),
    url: 'http://www.clientapprove.com/preview/Loreal_portfolio_site',
    un: 'dev',
    pw: 'F@ncyPants145!',
  },
  {
    name: 'Alcoa',
    poster: require('~/assets/image/NYT_Alcoa_PP.jpg'),
    url: 'http://demos.clientapprove.com/NYT_Alcoa_PP/',
  },
  {
    name: 'Coned',
    poster: require('~/assets/image/NYT_coned.jpg'),
    url: 'http://demos.clientapprove.com/NYT_coned/',
  },
  {
    name: 'Paper_Scissors_Art',
    poster: require('~/assets/image/NYT-paper-scissors-art.jpg'),
    url: 'https://paidpost.nytimes.com/hennessy-paradis-imperial/the-sense-of-precision-series/paper-scissors-art.html',
  },
  {
    name: 'Activia',
    poster: require('~/assets/image/NYT_Activia.jpg'),
    url: 'http://adv.preview.nytimes.com/m/activia/doing-a-gut-check-scaffolding-next/',
  },
  {
    name: 'Mexico_Tourism',
    poster: require('~/assets/image/NYT-mexico-tourism.jpg'),
    url: 'http://adv.preview.nytimes.com/m/mexico-tourism/my-journey-to-mexico/',
  },
  {
    name: 'Adobe',
    poster: require('~/assets/image/NYT-Adobe.jpg'),
    url: 'https://paidpost.nytimes.com/adobe/carrying-the-digital-torch.html',
  },
  {
    name: 'Tylenol',
    poster: require('~/assets/image/NYT1614_Tylenol_Paidpost.jpg'),
    url: 'http://paidpost.nytimes.com/tylenol/what-moves-me.html',
  },
  {
    name: 'Bee_2_B',
    poster: require('~/assets/image/NYT1616_IBMWeather_PaidPost.jpg'),
    url: 'http://paidpost.nytimes.com/ibm/bee-2-b.html',
  },
  {
    name: 'Chevron_Efficiency',
    poster: require('~/assets/image/NYT1618_ChevronEfficiencyIDV_PaidPost.jpg'),
    url: 'http://paidpost.nytimes.com/chevron/how-the-us-has-cut-pollution-while-growing-the-economy.html',
  },
  {
    name: 'Chevron_Mobile',
    poster: require('~/assets/image/NYT1617_ChevronMobileMoments_PaidPost.jpg'),
    url: 'http://paidpost.nytimes.com/chevron/what-do-you-really-know-about-natural-gas.html',
  },
  {
    name: 'Pfizer_Prevnar',
    poster: require('~/assets/image/NYT1624_PfizerPrevnar_PaidPost.jpg'),
    url: 'http://paidpost.nytimes.com/pfizer/for-the-active-and-over-50.html',
  },
];

export default {
  data () {
    return {
      config: _.shuffle(config),
    };
  },

  components: {
    card,
  },
};
</script>

<style lang="scss">
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
    padding-bottom: 0;

    .card {
        width: 100%;
        margin-bottom: 10px;
    }
}
</style>
