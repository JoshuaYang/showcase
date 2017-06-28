<template lang="html">
    <div :class="['card', className]">
        <div class="placeholder" :style="{paddingBottom: paddingBottom}"></div>
        <div class="content"></div>
    </div>
</template>

<script>
export default {
    props: {
        ratio: {
            type: [String, Number],
            default: 1,
        },
        className: {
            type: [String],
        },
    },
    computed: {
        paddingBottom() {
            let aspect;

            if (typeof this.ratio === 'string') {
                if (this.ratio.includes(':')) {
                    const sp = this.ratio.split(':');

                    aspect = sp[0] / sp[1];
                } else {
                    aspect = parseFloat(this.ratio);
                }
            } else {
                aspect = this.ratio;
            }


            return `${1 / aspect * 100}%`;
        },
    },
};
</script>

<style lang="scss">
.card {
    position: relative;

    .content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}
</style>
