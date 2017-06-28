<template lang="html">
    <div :class="['card', className]">
        <a :href="url" target="_blank">
            <img class="poster" :src="poster" alt="">
            <h2 class="text">{{text}}</h2>
            <div class="line"></div>
        </a>

    </div>
</template>

<script>
export default {
    props: {
        className: {
            type: [String],
        },
        poster: {
            type: [String],
        },
        text: {
            type: [String],
        },
        url: {
            type: [String],
        },
    },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Raleway:300,400");

.card {
    position: relative;
    display: inline-block;
    // border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    cursor: pointer;
    background-color: #4a3753;
    overflow: hidden;
    transform: translate3d(0,0,0);

    &:hover {
        // box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

        .poster {
            opacity: 0.5;
        }

        .text {
            opacity: 1;
            transform: translateY(0);
        }

        .line {
            transform: translateY(0);
        }
    }

    .poster {
        width: 100%;
        display: block;
        // border-radius: 5px;
        transition: opacity 0.35s;
        transform: translate3d(0,0,0);
    }

    .text {
        position: absolute;
        bottom: 30px;
        left: 0;
        width: 100%;
        padding: 0 20px;
        opacity: 0;
        transform: translateY(-30px);
        transition: opacity 0.35s, transform 0.35s;
        font-size: 30px;
        color: white;
        font-family: "Raleway";
        font-weight: 300;
    }

    .line {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 10px;
        background-color: white;
        transform: translateY(100%);
        transition: transform 0.35s;
    }
}
</style>
