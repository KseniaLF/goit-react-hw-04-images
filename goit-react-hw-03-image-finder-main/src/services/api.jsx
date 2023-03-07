import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const KEY = '24536039-c146a0cee4ea2e39b0ff8f9b5';

export const getImgApiData = async (searchQuery, page) => {
  const response = await axios.get(
    `/?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  // console.log(response.data);
  return response.data;
};
