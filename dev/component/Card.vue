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

            // return 0;
            return `${1 / aspect * 100}%`;
        },
    },
};
</script>

<style lang="scss">
.card {
    position: relative;
    display: inline-block;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    // box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    cursor: pointer;

    &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }

    .content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}
</style>
