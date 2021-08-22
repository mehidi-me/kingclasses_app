import client from './client';

const getNotification = email => client.get('/notification/get/' + email);

const sendReadNotValue = value =>
  client.post('/notification/sendreadnotvalue', value);

export default {
  getNotification,
  sendReadNotValue,
};
