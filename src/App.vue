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
  <footer class='footer'><span class="credits">created by <b><u>Drande</u></b> - devChallenges.io</span></footer>
</template>

<style scoped>
  .header {
    font-weight: Bold;
    font-size: 36px;
    line-height: 42px;
  }

  .main-container {
    overflow: auto;
    padding: 2rem 0 0 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100% - 80px);
    align-items: center;
    gap: 1rem;
  }
</style>
