<template>
  <app-page>
    <v-flex>
      <h1>Add Project</h1>
      <v-text-field
        autofocus
        label="Title"
        required
        v-model="title"
      ></v-text-field>
      <v-text-field
        label="Description"
        required
        v-model="description"
      ></v-text-field>
      <v-layout justify-end>
        <v-btn to="/projects">Cancel</v-btn>
        <v-btn @click="submit" color="primary">Save</v-btn>
      </v-layout>
    </v-flex>
  </app-page>
</template>

<script>
import AppPage from '@/components/AppPage';
export default {
  components: {
    AppPage,
  },
  data () {
    return {
      description: '',
      title: '',
    };
  },
  methods: {
    async submit () {
      await this.$store.dispatch('createProject', { description: this.description, title: this.title });
      this.$router.replace('/projects');
    },
  },
};
</script>
