import axios from 'axios';
import { Key } from 'constants/constants';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function apiImage(searchValue, page) {
  const response = await axios.get(`/`, {
    params: {
      key: Key,
      q: searchValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 12,
    },
  });
  return response.data;
}
