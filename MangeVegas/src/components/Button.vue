<script setup lang="ts">
    const props = defineProps({
        text: {type: String, required: true}
    });
</script>

<template>
    <button>{{ props.text }}</button>
</template>

<style scoped lang="scss">
    button {
        border-image: url(https://www.cyberpunk.net/build/images/cp-btn-yellow-fd1ca428.svg) 0 20 fill;
        color: var(--neon-yellow);

        background-color: #222;

        align-items: center;
        border-style: solid;
        border-width: 0 20px;
        cursor: pointer;
        display: inline-flex;
        height: 48px;
        justify-content: center;
        min-width: 232px;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        -webkit-user-select: none;
        user-select: none;

        font-family: 'BlenderProBold',sans-serif;
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: 110%;
    }
</style>