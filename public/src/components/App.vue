<template>
  <div id="app">
    <div class="container">
      <div class="row col-md-6 offset-md-3">
        <create-todo></create-todo>
        <list-todo></list-todo>
      </div>
    </div>
  </div>
</template>

<script>
import CreateTodo from './CreateTodo.vue';
import listTodo from './ListTodo'
export default {
  name: 'app',
  data() {
    return{}
  },
  components: {CreateTodo, ListTodo},
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
transition: opacity .5s
}
.fade-enter, 
.fade-leave-active {
opacity:0
}
</style>