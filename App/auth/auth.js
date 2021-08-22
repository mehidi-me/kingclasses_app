<<<<<<< HEAD
import client from '../api/client';

const login = async userInfo => {
  return await client.post('/auth/login', userInfo);
};

const register = async userInfo => {
  return await client.post('/auth/register', userInfo);
};

const getCoin = async id => {
  return await client.get('/auth/getcoin/' + id);
};

const getUser = async () => {
  return await client.get('/auth/getuser');
};

const updatePassword = async password => {
  return await client.put('/auth/updatepassword', password);
};

const updateUser = async userInfo => {
=======
import client from "../api/client";

const login = async (userInfo) => {
  return await client.post("/auth/login", userInfo);
};

const register = async (userInfo) => {
  return await client.post("/auth/register", userInfo);
};

const getUser = async () => {
  return await client.get("/auth/getuser");
};

const updatePassword = async (password) => {
  return await client.put("/auth/updatepassword", password);
};

const updateUser = async (userInfo) => {
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
  if (userInfo.imageUrl) {
    const image = await uploadPhoto(userInfo.imageUrl);
    if (image.image_name) {
      userInfo.image = image.image_name;
    }
  }
<<<<<<< HEAD
  return await client.put('/auth/updateuser', userInfo);
};

const uploadPhoto = url => {
  const photo = new FormData();
  photo.append('api_key', 'mehidi');
  photo.append('image', {
    name: 'image_' + Date.now() + '.jpg',
    type: 'image/jpg',
    uri: url,
  });

  return fetch('http://192.168.0.104/king-classes4/upload-image.php', {
    method: 'POST',
    body: photo,
  })
    .then(v => v.json())
    .then(data => {
      return data;
    })
    .catch(err => console.log('err', err));
=======
  return await client.put("/auth/updateuser", userInfo);
};

const uploadPhoto = (url) => {
  const photo = new FormData();
  photo.append("api_key", "mehidi");
  photo.append("image", {
    name: "image_" + Date.now() + ".jpg",
    type: "image/jpg",
    uri: url,
  });

  return fetch("http://192.168.0.104/king-classes4/upload-image.php", {
    method: "POST",
    body: photo,
  })
    .then((v) => v.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.log("err", err));
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
};

export default {
  login,
  register,
  getUser,
  updateUser,
  updatePassword,
<<<<<<< HEAD
  getCoin,
=======
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
};
