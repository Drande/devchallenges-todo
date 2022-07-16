<template>
    <button v-on:click="$emit('clicked', $event)">
        {{label}}
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    emits: ["clicked"],
    props: {
        label: String
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>
    button {
        cursor: pointer;
        padding: 20px 40px;
        background-color: #2F80ED;
        border-radius: 12px;
        border-width: 0;
        box-shadow: 0 2px 6px 0px rgba(127, 177, 243, 0.4);
    }
</style>