import client from './client';

const getMcqCat = () => client.get('/mcq/cat');
const getMcq = id => client.get('/mcq/' + id);

export default {
  getMcqCat,
  getMcq,
};
