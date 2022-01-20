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
      </template>
    </v-list-item>
  </div>
</template>

<script>
export default {
  props: ['tarefa'],
};
</script>

<style>
</style>
