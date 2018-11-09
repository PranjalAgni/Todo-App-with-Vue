window.onload = function() {
  const app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Coding Garden!',
      newTodo: '',
      todos: []
    },
    methods: {
      addTodo() {
        this.todos.push({
          title: this.newTodo,
          done: false
        });
        this.newTodo = '';
      },

      removeTodo(todo) {
        const todoIndex = this.todos.indexOf(todo);
        this.todos.splice(todoIndex, 1);
      },
      removeAll() {
        this.todos.forEach(todo => {
          todo.done = true;
        });
      }
    }
  });
};
