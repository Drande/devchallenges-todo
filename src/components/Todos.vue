<template>
    <div class="column g-1rem">
        <div class="row">
            <Input v-on:changed="(value) => { inputState = value; }" :value="inputState"></Input>
            <Button :label="'Add'" v-on:clicked="() => { addTodo() }"></Button>
        </div>
        <div class="column g-1rem">
            <Todo v-for="todo in todos" v-on:check="($event) => { updateTodo(todo, $event.target.checked) }" :todo="todo"></Todo>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Input from './Input.vue';
import Todo from './Todo.vue';
import Button from './Button.vue';
import { TodoModel } from '@/models/Todo';
export default defineComponent({
    setup() {
        return {};
    },
    data(){
        return {
            inputState: "",
            todos: <any>[]
        }
    },
    methods: {
        updateTodo(todo: TodoModel, newState: Boolean) {
            todo.completed = newState;
        },
        addTodo() {
            if(this.inputState) {
                this.todos.push(new TodoModel(this.inputState));
                this.inputState = "";
            }
        }
    },
    components: { Input, Todo, Button }
})
</script>

<style scoped>

</style>