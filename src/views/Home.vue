<template>
  <div>
    <v-col cols="12" sm="6" md="3">
      <v-text-field
        v-model="inputField"
        label="Outlined"
        placeholder="Placeholder"
        outlined
        @keyup.enter="handleAddTask"
      ></v-text-field>
      <v-list flat subheader>
        <v-list-item-group multiple active-class="">
          <div v-for="(tarefa, index) in $store.state.tarefas" :key="index">
            <Tarefa :tarefa="tarefa" />
          </div>
        </v-list-item-group>
      </v-list>
    </v-col>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Tarefa from '../components/Tarefa.vue';

export default Vue.extend({
  name: 'Home',

  components: {
    Tarefa,
  },
  data() {
    return {
      inputField: null,
    };
  },

  methods: {
    handleAddTask(): void {
      this.$store.commit('addTask', this.inputField);
      this.inputField = null;
    },
  },
});
</script>
