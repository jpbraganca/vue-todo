<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" icon>
          <v-icon dark>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" @click="item.click()">
          <v-icon left>{{ item.icon }}</v-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <EditConfirm v-if="items[0].modal" @handleCloseModal="items[0].modal = false" :tarefa="tarefa"/>
    <DeleteConfirm v-if="items[1].modal" @handleCloseModal="items[1].modal = false" :tarefa="tarefa"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import DeleteConfirm from './Modal/DeleteConfirm.vue';
import EditConfirm from './Modal/EditConfirm.vue';

export default Vue.extend({
  props: ['tarefa'],
  components: { EditConfirm, DeleteConfirm },
  data: () => ({
    items: [
      {
        icon: 'mdi-pencil',
        title: 'Edit',
        modal: false,
        click() {
          console.log('Edit');
          this.modal = true;
        },
      },
      {
        icon: 'mdi-trash-can',
        title: 'Delete',
        modal: false,
        click() {
          console.log('Delete');
          this.modal = true;
        },
      },
    ],
  }),
});

</script>

<style scoped></style>
