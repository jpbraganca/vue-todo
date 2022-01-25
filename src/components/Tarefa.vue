<template>
  <div>
    <v-list-item
      :class="{ 'blue lighten-4': tarefa.concluida }"
      @click="tarefa.concluida = !tarefa.concluida"
    >
      <template v-slot:default="{}">
        <v-list-item-action>
          <v-checkbox :input-value="tarefa.concluida"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{ 'text-decoration-line-through': tarefa.concluida }"
            >{{ tarefa.titulo }}</v-list-item-title
          >
        </v-list-item-content>
        <v-list-item-action>
          <!-- <v-btn icon @click.stop="handleRemoveTask(tarefa.id)">
            <v-icon color="red lighten-3">mdi-trash-can</v-icon>
          </v-btn> -->
          <TaskMenu />
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TaskMenu from './TarefaMenu.vue';

export default Vue.extend({
  components: { TaskMenu },
  props: ['tarefa'],
});
</script>

<style>
</style>
