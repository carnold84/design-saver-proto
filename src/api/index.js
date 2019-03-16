import localforage from 'localforage';
import uuidV4 from 'uuid/v4';

localforage.config({
  name: 'design-saver',
  version: 1.0,
  storeName: 'design-saver',
});

const getImages = async () => {
  let images = null;

  await localforage.getItem('images', (err, value) => {
    if (err) {
      console.error(err);
    }
    images = value;
  });

  return images;
};

const setImages = async images => {
  let success = true;

  await localforage.setItem('images', images, (err) => {
    if (err) {
      success = false;
    }
  });

  return success;
};

const getImagesProjects = async () => {
  let imagesProjects = null;

  await localforage.getItem('imagesProjects', (err, value) => {
    if (err) {
      console.error(err);
    }
    imagesProjects = value;
  });

  return imagesProjects;
};

const setImagesProjects = async imagesProjects => {
  let success = true;

  await localforage.setItem('imagesProjects', imagesProjects, (err) => {
    if (err) {
      success = false;
    }
  });

  return success;
};

const getProjects = async () => {
  let projects = null;

  await localforage.getItem('projects', (err, value) => {
    if (err) {
      console.error(err);
    }
    projects = value;
  });

  return projects;
};

const setProjects = async projects => {
  let success = true;

  await localforage.setItem('projects', projects, (err) => {
    if (err) {
      success = false;
    }
  });

  return success;
};

const getUsers = async () => {
  let users = null;

  await localforage.getItem('users', (err, value) => {
    if (err) {
      console.error(err);
    }
    users = value;
  });

  return users;
};

const setUsers = async users => {
  let success = true;

  await localforage.setItem('users', users, (err) => {
    if (err) {
      success = false;
    }
  });

  return success;
};

const uploadFile = async (publicId, fileUrl) => {
  const uploadUrl = `https://api.cloudinary.com/v1_1/carnold/upload`;
  const requestUrl = `${uploadUrl}?file=${fileUrl}&public_id=${publicId}&upload_preset=orcbnzny`;
  let url = null;

  await fetch(requestUrl, {
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
  })
    .then(function (data) {
      console.log('Request succeeded with JSON response', data);
      url = data.url;
    })
    .catch(function (error) {
      console.log('Request failed', error);
    });

  return url;
};

const api = {
  async addImage (payload) {
    const { projectId, title, url } = payload;
    const id = uuidV4();
    const imageId = `design_saver/${id}`;

    let images = await getImages();
    let fileUrl = await uploadFile(imageId, url);

    if (projectId) {
      await this.createImageProject({ imageId: id, projectId });
    }

    console.log(fileUrl);

    const date = Date.now();

    const image = {
      title,
      imageId,
      created: date,
      id,
      modified: date,
    };

    images.push(image);

    await setImages(images);

    return image;
  },
  async createImageProject (payload) {
    const { imageId, projectId } = payload;

    let imagesProjects = await getImagesProjects();

    const imageProject = {
      imageId,
      projectId,
    };

    imagesProjects.push(imageProject);

    await setImagesProjects(imagesProjects);

    return true;
  },
  async createProject (payload) {
    const { description, title } = payload;
    const id = uuidV4();

    let projects = await getProjects();

    const date = Date.now();

    const project = {
      created: date,
      description,
      id,
      modified: date,
      title,
    };

    projects.push(project);

    await setProjects(projects);

    return project;
  },
  async getImages () {
    let images = await getImages();

    if (images === null) {
      images = [];
      await setImages(images);
    }

    return images;
  },
  async getImagesProjects () {
    let imagesProjects = await getImagesProjects();

    if (imagesProjects === null) {
      imagesProjects = [];
      await setImagesProjects(imagesProjects);
    }

    return imagesProjects;
  },
  async getProjects () {
    let projects = await getProjects();

    if (projects === null) {
      projects = [];
      await setProjects(projects);
    }

    return projects;
  },
  async getUser ({ password, username }) {
    let users = await getUsers();

    if (users === null) {
      users = [
        {
          firstName: 'Demo',
          id: '02c78bba-4430-4ede-abdd-6f851de1055c',
          lastName: 'User',
          password: 'password',
          username: 'demo@agency.com',
        },
      ];
      await setUsers(users);
    }

    let user;

    users.forEach(element => {
      if (element.username === username) {
        user = element;
      }
    });

    if (user) {
      if (user.password === password) {
        return {
          firstName: user.firstName,
          id: user.id,
          lastName: user.lastName,
          username: user.username,
        };
      }
    }

    return undefined;
  },
};

export default api;
