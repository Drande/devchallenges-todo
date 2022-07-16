<template>
    <div class="tabs-container">
        <span v-for="tab,i in tabs" v-on:click.prevent="setIndex(i)" :class="i==activeIndex ? 'active' : '' ">{{tab}}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        tabs: Array<String>
    },
    emits: ["change"],
    data() {
        return {
            activeIndex: 0
        }
    },
    methods: {
        setIndex(i: number) {
            this.activeIndex = i;
            this.$emit('change', i);
        }
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>
    .tabs-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 7rem;
        padding: 0 5rem;
        border-bottom: 1px solid #BDBDBD;
        overflow: hidden;
        width: min-content;
    }

    span {
        cursor: pointer;
        width: 6rem;
        text-align: center;
        font-weight: 600;
        font-size: 14px;
        position: relative;
        height: 32px;
    }
    
    span.active::after, span:hover::after {
        content: "";
        height: 4px;
        width: 100%;
        position: absolute;
        background-color: #2F80ED;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        top: calc(100% - 3px);
        left: 0;
    }

    @media screen and (max-width: 768px) {
        .tabs-container {
            gap: 0.5rem;
            padding: 0 0.5rem;
        }
        
        span {
            width: 5rem;
        }
    }
</style>