<template>
    <div class="column g-1rem align-items-center">
        <Tab :tabs="['All', 'Active', 'Completed']" v-on:change="onTabChange"></Tab>
        <div class="add-controls-container" v-if="activeIndex!==2">
            <Input v-on:changed="(value) => { inputState = value; }" :value="inputState"></Input>
            <Button class="add" :label="'Add'" v-on:clicked="() => { addTodo() }"></Button>
        </div>
        <div class="todo-list" v-if="activeIndex===0">
            <Todo v-for="todo in todos" v-on:check="($event) => { updateTodo(todo, $event.target.checked) }" :todo="todo"></Todo>
        </div>
        <div class="todo-list" v-if="activeIndex===1">
            <Todo v-for="todo in activeTodos" v-on:check="($event) => { updateTodo(todo, $event.target.checked) }" :todo="todo"></Todo>
        </div>
        <div class="todo-list" v-if="activeIndex===2">
            <div class="row justify-content-between align--items-center" v-for="todo in completedTodos">
                <Todo v-on:check="($event) => { updateTodo(todo, $event.target.checked) }" :todo="todo"></Todo>
                <span v-on:click="() => { deleteTodo(todo.id); }" class="material-icons cursor-pointer">delete</span>
            </div>
            <Button v-if="completedTodos.length" v-on:clicked="() => { deleteTodos(); }" :icon="'delete'" class="delete align-self-end" :label="'delete all'"></Button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Input from './Input.vue';
import Todo from './Todo.vue';
import Button from './Button.vue';
import { TodoModel } from '@/models/Todo';
import Tab from './Tab.vue';

export default defineComponent({
    setup() {
        return {};
    },
    data() {
        const savedTodos = localStorage.getItem("todos");
        let todos = [];
        if(savedTodos) {
            todos = JSON.parse(savedTodos);
        }
        todos = todos.map((t:any) => new TodoModel(t.task, t.completed));
        return {
            inputState: "",
            activeIndex: 0,
            todos: todos,
            completedTodos: todos.filter((t:any) => t.completed),
            activeTodos: todos.filter((t:any) => !t.completed),
        }
    },
    methods: {
        deleteTodo(id: string) {
            console.log(id);
            this.todos = this.todos.filter((t:TodoModel) => t.id !== id);
            this.updateTodosSublists();
        },
        deleteTodos() {
            this.todos = this.todos.filter((t:TodoModel) => !t.completed);
            this.updateTodosSublists();
        },
        onTabChange(index: number) {
            this.activeIndex = index;
        },
        updateTodo(todo: TodoModel, newState: Boolean) {
            todo.completed = newState;
            this.updateTodosSublists();
        },
        updateTodosSublists() {
            this.completedTodos = this.todos.filter((t:TodoModel) => t.completed);
            this.activeTodos = this.todos.filter((t:TodoModel) => !t.completed);
            localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        addTodo() {
            if(this.inputState) {
                const newTodo = new TodoModel(this.inputState);
                this.todos.push(newTodo);
                this.updateTodosSublists();
                this.inputState = "";
            }
        }
    },
    components: { Input, Todo, Button, Tab }
})
</script>

<style scoped>
    .add-controls-container {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        width: 100%;
    }
    @media screen and (max-width: 768px) {
      .add-controls-container {
        flex-direction: column;
        align-items: center;
      }
    }

    .todo-list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 80vw;
    }
</style>