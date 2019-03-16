<template>
  <app-page>
    <v-flex>
      <v-layout
        justify-space-between
        row
      >
        <h1>Projects</h1>
        <v-btn
          color="primary"
          to="/projects/create"
        >Create</v-btn>
      </v-layout>
      <v-layout
        v-if="projects && projects.length > 0"
        row
        wrap
      >
        <v-flex
          d-flex
          xs12
          sm6
          md4
          pa-3
          v-for="project in projects"
          :key="project.id"
        >
          <router-link :to="getProjectLink(project.id)">
            <v-card tile>
              <v-card-text>{{ project.title }}</v-card-text>
            </v-card>
          </router-link>
        </v-flex>
      </v-layout>
      <div v-else>No Projects</div>
    </v-flex>
  </app-page>
</template>

<script>
import AppPage from '@/components/AppPage.vue';
export default {
  components: {
    AppPage,
  },
  computed: {
    projects () {
      return this.$store.getters.projects;
    },
  },
  methods: {
    getProjectLink (id) {
      return `/projects/${id}`;
    },
  },
};
</script>
