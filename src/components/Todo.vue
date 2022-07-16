<template>
<div class="todo-row">
    <input :checked="(todo?.completed as any)" v-on:change="$emit('check', $event)" type="checkbox">
    <span :class="(todo?.completed==true ? 'completed' : '')">{{todo?.task}}</span>
</div>
</template>

<script lang="ts">
import { TodoModel } from '@/models/Todo';
import { defineComponent } from 'vue';

export default defineComponent({
    emits: {
        check(payload: any) {
            return true;
        }
    },
    props: {
        todo: TodoModel,
        state: Boolean
    },
    setup() {
        return {};
    }
})

</script>

<style scoped>
    .todo-row {
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }

    .completed {
        text-decoration: line-through;
    }

    input {
        width: 24px;
        height: 24px;
    }

    span {
        font-weight:400;
        font-size: 18px;
        line-height: 22px;
    }
</style>