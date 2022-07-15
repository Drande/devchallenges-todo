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

</style>