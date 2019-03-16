<template>
  <app-page>
    <v-flex>
      <v-layout
        justify-space-between
        row
      >
        <h1>Images</h1>
        <v-btn
          color="primary"
          :to="getCreateImageUrl(id)"
        >Add Image</v-btn>
      </v-layout>
      <v-layout v-if="images && images.length > 0" row wrap>
        <v-flex
          d-flex
          xs12
          sm6
          md4
          pa-3
          v-for="image in images"
          :key="image.id"
        >
          <v-card tile>
            <v-responsive>
              <v-img :src="getImageUrl(image.imageId)" height="220"></v-img>
            </v-responsive>
            <v-card-text>{{ image.title }}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <div v-else>No Images</div>
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
    images () {
      console.log(this.$store.getters.imagesByProject(this.id));
      return this.$store.getters.imagesByProject(this.id);
    },
  },
  created () {
    this.id = this.$router.history.current.params.id;
  },
  methods: {
    getCreateImageUrl (projectId) {
      return `/images/add/${projectId}`;
    },
    getImageUrl (imageId) {
      return `https://res.cloudinary.com/carnold/image/upload/w_400/${imageId}`;
    },
  },
};
</script>
