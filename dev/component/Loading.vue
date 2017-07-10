<template lang="html">
    <div class="loading">
        <img class="loader" src="../image/loading.svg" alt="">
    </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
.loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #202c2f;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;

    .loader {
        width: 256px;
    }
}
</style>
