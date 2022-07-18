import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const key = `27247276-2a88fcc64ac0c5c7b7477cb08`;

export async function apiImage(searchValue, page) {
  const response = await axios.get(`/`, {
    params: {
      key: key,
      q: searchValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 12,
    },
  });
  return response.data.hits;
}
