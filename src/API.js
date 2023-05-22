import axios from 'axios';

const BaseUrl = process.env.REACT_APP_BASEURL;
const SearchCategory = process.env.REACT_APP_SEARCHCATEGORY;
// const SearchName = process.env.SEARCH_NAME;

export const getProduct = async () => {
  const response = await axios.get(BaseUrl);
  return response.data;
};
export const getProductCategory = async (cat) => {
  const response = await axios.get(`${SearchCategory}?search=${cat}`);
  return response.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(`${BaseUrl}/${id}`);
  return response.data;
}

// export const getProductByName = async (cat) => {
//   const response = await axios.get(`${SearchName}?search=${cat}`);
//   return response.data;
// }