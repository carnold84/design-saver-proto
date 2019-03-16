<template>
  <app-page>
    <v-flex>
      <h1>Add Image</h1>
      <v-text-field
        autofocus
        label="Image Url"
        required
        v-model="url"
      ></v-text-field>
      <v-text-field
        label="Image Title"
        required
        v-model="title"
      ></v-text-field>
      <v-layout justify-end>
        <v-btn to="/images">Cancel</v-btn>
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
  created () {
    this.projectId = this.$router.history.current.params.projectId;
  },
  data () {
    return {
      title: 'Image',
      url: '',
    };
  },
  methods: {
    clear () {
      this.title = '';
      this.url = '';
    },
    submit () {
      console.log(this.projectId, this.title, this.url);
      this.$store.dispatch('addImage', { projectId: this.projectId, title: this.title, url: this.url });
    },
  },
};
</script>
