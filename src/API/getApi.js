import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
export default (pageNumber, query = '') => {
  return axios
    .get(
      `/?image_type=photo&orientation=horizontal&q=${query}&page=${pageNumber}&per_page=12&key=13861072-997e8257308f2a577547e7149`,
    )
    .then(response => response.data.hits)
    .catch(err => console.log(err));
};
