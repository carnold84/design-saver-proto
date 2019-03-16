import Vue from 'vue';
import Vuex from 'vuex';

import api from './api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: undefined,
    projects: undefined,
    user: undefined,
    imagesProjects: undefined,
  },
  actions: {
    async addImage (context, payload) {
      const image = await api.addImage(payload);
      context.commit('addImage', image);
    },
    async createProject (context, payload) {
      const project = await api.createProject(payload);
      context.commit('createProject', project);
    },
    async getImages (context) {
      const data = await api.getImages();
      context.commit('updateImages', data);
    },
    async init (context) {
      const images = await api.getImages();
      const imagesProjects = await api.getImagesProjects();
      const projects = await api.getProjects();
      context.commit('updateImages', images);
      context.commit('updateImagesProjects', imagesProjects);
      context.commit('updateProjects', projects);
    },
    async setUser (context, payload) {
      const user = await api.getUser(payload);

      if (user) {
        context.commit('setUser', user);
        return {
          success: true,
        };
      } else {
        return {
          error: 'Username or password was incorrect.',
        };
      }
    },
  },
  mutations: {
    addImage: (state, payload) => {
      state.images.push(payload);
    },
    createProject: (state, payload) => {
      state.projects.push(payload);
    },
    setUser: (state, payload) => {
      state.user = payload;
    },
    updateImages (state, payload) {
      const { images = [] } = state;
      state.images = [...images, ...payload];
    },
    updateImagesProjects (state, payload) {
      const { imagesProjects = [] } = state;
      state.imagesProjects = [...imagesProjects, ...payload];
    },
    updateProjects (state, payload) {
      const { projects = [] } = state;
      state.projects = [...projects, ...payload];
    },
  },
  getters: {
    image: state => id => {
      return state.images.filter(image => image.id === id)[0];
    },
    images: state => {
      return state.images;
    },
    imagesByProject: state => projectId => {
      const { images, imagesProjects } = state;

      console.log('projectId', projectId);
      console.log(images, imagesProjects);

      const imageLinks = imagesProjects.filter(link => {
        return link.projectId === projectId;
      });
      console.log(imageLinks);

      const imageIds = imageLinks.map(link => {
        return link.imageId;
      });
      console.log(imageIds);

      return images.filter(image => {
        return imageIds.includes(image.id);
      });
    },
    project: state => id => {
      return state.projects.filter(project => project.id === id)[0];
    },
    projects: state => {
      return state.projects;
    },
    user: state => {
      return state.user;
    },
  },
});
