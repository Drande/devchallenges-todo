<template>
    <button v-on:click="$emit('clicked', $event)">
        <span v-if="icon" class="material-icons">{{icon}}</span>
        {{label}}
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    emits: ["clicked"],
    props: {
        icon: String,
        label: String
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>
    button {
        width: min-content;
        white-space: nowrap;
        display: flex;
        align-items: center;
    }
    button.add {
        cursor: pointer;
        padding: 20px 40px;
        background-color: #2F80ED;
        border-radius: 12px;
        border-width: 0;
        box-shadow: 0 2px 6px 0px rgba(127, 177, 243, 0.4);
    }

    .material-icons {
        font-size: 16px;
    }

    button.delete {
        cursor: pointer;
        padding: 12px 24px;
        background-color: #EB5757;
        border-radius: 4px;
        border-width: 0;
    }
</style>