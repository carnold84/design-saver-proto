<template>
  <app-page>
    <v-flex>
      <h1>Login</h1>
      <v-text-field
        autofocus
        label="Username"
        required
        v-model="username"
      ></v-text-field>
      <v-text-field
        label="Password"
        required
        type="password"
        v-model="password"
      ></v-text-field>
      <v-layout justify-end>
        <v-btn @click="submit" color="primary">Login</v-btn>
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
      password: '',
      username: '',
    };
  },
  methods: {
    async submit () {
      console.log(this.password, this.username);
      const result = await this.$store.dispatch('setUser', { password: this.password, username: this.username });

      console.log(result);
      if (result.success) {
        this.$router.replace('/');
      }
    },
  },
};
</script>
