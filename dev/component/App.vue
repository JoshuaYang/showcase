<template lang="html">
    <div class="app-container">
        <card className="aaa" ratio="3:2"></card>
        <card className="bbb" ratio="0.5"></card>
        <card className="aaa" ratio="3:2"></card>
        <card className="bbb" ratio="0.5"></card>
        <card className="aaa" ratio="3:2"></card>
        <card className="bbb" ratio="0.5"></card>
        <card className="aaa" ratio="3:2"></card>
        <card className="bbb" ratio="0.5"></card>
        <card className="aaa" ratio="3:2"></card>
        <card className="bbb" ratio="0.5"></card>
        <card className="aaa" ratio="3:2"></card>
        <card className="bbb" ratio="0.5"></card>
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
    column-count: 4;
    column-width: 25%;
    column-gap: 10px;
    padding: 10px;

    .card {
        margin-bottom: 10px;
    }

    .aaa {
        background-color: red;
        width: 100%;
    }

    .bbb {
        background-color: orange;
        width: 100%;
    }
}
</style>
