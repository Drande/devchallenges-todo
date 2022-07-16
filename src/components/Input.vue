<template>
    <input v-on:input="(payload: any) => { $emit('changed', payload.target.value) }" :value="value">
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    emits: ['changed'],
    props:{
        value: String
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>
    input {
        width: 100%;
        height: 54px;
        border-radius: 12px;
        border: 1px solid #BDBDBD;
    }
    input:focus-visible {
        outline: none;
        padding: 4px 8px;
    }
</style>