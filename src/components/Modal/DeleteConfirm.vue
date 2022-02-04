<template>
  <v-dialog v-model="dialog" max-width="290">
    <v-card>
      <v-card-title class="text-h5">Edit</v-card-title>
      <v-divider></v-divider>
      <v-card-text class="mt-2">Are you sure ?</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" text @click="$emit('handleCloseModal')">Cancel</v-btn>
        <v-btn color="primary" text @click="handleDelete()">Delete</v-btn>
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
  methods: {
    handleDelete() {
      this.$store.commit('removeTask', this.tarefa.id);
      this.$emit('handleCloseModal');
    },
  },
});
</script>

<style scoped>
</style>
