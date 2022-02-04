import { Tarefa } from '@/interfaces/ITarefa';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tarefas: [] as Tarefa [],
  },
  mutations: {
    addTask(state, titulo: string) {
      if (titulo) {
        state.tarefas.push({
          id: new Date().getTime(),
          titulo,
          concluida: false,
        });
      }
    },

    removeTask(state, id: number) {
      state.tarefas = state.tarefas.filter((tarefa) => tarefa.id !== id);
    },

    editTask(state, newTask: Tarefa) {
      const task = state.tarefas.filter((tarefa) => tarefa.id === newTask.id)[0];
      task.titulo = newTask.titulo;
    },
  },
  actions: {
  },
  modules: {
  },
});
