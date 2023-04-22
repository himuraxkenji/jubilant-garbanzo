import axios from 'axios';
import endpoints from '@services/api';

const addProduct = async (body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-type': 'application/json',
    },
  };

  const response = await axios.post(endpoints.products.postProduct, body, config);
  return response.data;
};

export { addProduct };
