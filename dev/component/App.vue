<template lang="html">
    <div class="app-container">
        <card className="aaa" ratio="3:2"></card>
        <card className="bbb" ratio="0.5"></card>
        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
import Card from './Card.vue';

export default {
    components: {
        Card,
    },
};
</script>

<style lang="scss">
@import "../style/reset";
@import "../style/mixin";

// @include font-face("Lato-Regular");

:root{
    --color1: red;
}

@media (max-width: 1000px) {
    :root{
        --color1: green;
    }
}

.app-container{
    .aaa {
        width: 100px;
        background-color: red;
    }

    .bbb {
        width: 200px;
        background-color: orange;
    }
}
</style>
