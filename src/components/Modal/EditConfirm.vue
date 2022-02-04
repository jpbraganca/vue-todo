<template>
  <v-dialog v-model="dialog" max-width="290">
    <v-card>
      <v-card-title class="text-h5">Edit</v-card-title>
      <v-divider></v-divider>
      <v-card-text class="mt-2">What's the new title ?</v-card-text>
      <v-text-field
        v-model="title"
        class= "px-3"
        solo
        placeholder="Inform the new title"
        clearable
        @keyup.enter="handleEdit()"
      ></v-text-field>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" text @click="$emit('handleCloseModal')">Cancel</v-btn>
        <v-btn color="primary" text @click="handleEdit()">Confirm</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: ['tarefa'],
  data() {
    return {
      dialog: true,
      title: null,
    };
  },
  created() {
    this.title = this.tarefa.titulo;
  },
  methods: {
    handleEdit() {
      this.$store.commit('editTask', { titulo: this.title, id: this.tarefa.id });
      this.$emit('handleCloseModal');
    },
  },
});
</script>

<style scoped>
</style>
