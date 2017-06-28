<template lang="html">
    <div class="app-container">
        <card poster="image/1.jpg" text="hello world"></card>
        <card poster="image/2.jpg" text="hello world"></card>
        <card poster="image/3.jpg" text="hello world"></card>
        <card poster="image/1.jpg" text="hello world"></card>
        <card poster="image/2.jpg" text="hello world"></card>
        <card poster="image/3.jpg" text="hello world"></card>
        <card poster="image/1.jpg" text="hello world"></card>
        <card poster="image/2.jpg" text="hello world"></card>
        <card poster="image/3.jpg" text="hello world"></card>
        <card poster="image/1.jpg" text="hello world"></card>
        <card poster="image/2.jpg" text="hello world"></card>
        <card poster="image/3.jpg" text="hello world"></card>
        <card poster="image/1.jpg" text="hello world"></card>
        <card poster="image/2.jpg" text="hello world"></card>
        <card poster="image/3.jpg" text="hello world"></card>
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
