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

</style>