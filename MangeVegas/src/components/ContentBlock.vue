<script setup lang="ts">
    const props = defineProps({
        title: {type: String, required: true},
        paragraph: {type: String, required: true},
    });
</script>

<template>
    <div id="content">
        <h2>{{ props.title }}</h2>
        <p>{{ props.paragraph }}</p>
    </div>
</template>

<style scoped lang="scss">
#content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 16px;

    h2 {
    font-family: 'Refinery-25';
    font-size: 44px;
    font-style: normal;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    line-height: 100%;
  }

  p {
    max-width: 820px;
    font-size: 22px;
    font-style: normal;
    font-family: BlenderProBook,sans-serif;
    font-weight: 400;
    line-height: 120%;
  }
}
</style>