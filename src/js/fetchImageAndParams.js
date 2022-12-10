const { default: axios } = require('axios');

const KEY = '31970069-a9908647d31fafc5acab91eef';
const URL = 'https://pixabay.com/api/';

const searchParams = {
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

export  async function fetchImage(query, page, per_page) {
  const { data } = await axios.get(
    `${URL}?key=${KEY}&q=${query}&page=${page}&per_page=${per_page}`,
    searchParams
  );
  return data;
}