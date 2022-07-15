<template>
    <span>{{todo}}</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        todo: String,
        state: Boolean
    },
    
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>