<script setup lang="ts">
import Todos from "./components/Todos.vue";
</script>

<template>
  <div class="main-container">
    <header>
      <h1 class="header">#todo</h1>
    </header>

    <main>
      <Todos></Todos>
    </main>
  </div>
</template>

<style scoped>
  .header {
    font-weight: Bold;
    font-size: 36px;
    line-height: 42px;
  }

  .main-container {
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
</style>
