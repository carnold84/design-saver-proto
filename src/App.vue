<template>
  <v-app>
    <v-toolbar
      app
      color="primary"
      dark
    >
      <v-toolbar-title class="headline text-uppercase">
        <span>Design </span>
        <span class="font-weight-light">Saver</span>
      </v-toolbar-title>
      <v-layout v-if="user" align-center grow justify-end>
        <v-btn
          flat
          to="/"
        >Home</v-btn>
        <v-btn
          flat
          to="/projects"
        >Projects</v-btn>
        <v-btn
          flat
          to="/images"
        >Images</v-btn>
        <span>{{user.firstName}} {{user.lastName}}</span>
      </v-layout>
    </v-toolbar>

    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  computed: {
    user () {
      return this.$store.getters.user;
    },
  },
  created () {
    if (!this.user) {
      this.$router.replace('/login');
    }
  },
  mounted () {
    this.$store.dispatch('init');
  },
};
</script>
