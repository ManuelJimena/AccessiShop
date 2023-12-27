import axios from 'axios';

const getAPIHeaders = () => {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  };
};

const API = axios.create({
  baseURL: 'https://accessi-shop-backend.vercel.app/',
  timeout: 8000,
});

API.interceptors.request.use((config) => {
  if (!config.headers['Content-Type']) {
    config.headers = getAPIHeaders();
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

API.interceptors.response.use(
  response => response,
  error => {
    console.error('Error en la solicitud:', error);
    return Promise.reject(error);
  }
);

const getAllProducts = () => API.get('/products');
const getProductByID = id => API.get(`/products/${id}`);
const searchProductsByName = name => API.get(`/products/search/${name}`);
const filterProductsByCategory = category => API.get(`/products/category/${category}`);

const addToCart = (productId, quantity) => API.post('/cart/add', { productId, quantity });
const removeFromCart = productId => API.delete(`/cart/remove/${productId}`);
const updateCartQuantity = (productId, quantity) => API.put(`/cart/update/${productId}`, { quantity });
const getCartItems = () => API.get('/cart');

const addToFavorites = productId => API.post('/favorites/add', { productId });
const removeFromFavorites = productId => API.delete(`/favorites/remove/${productId}`);
const getFavorites = () => API.get('/favorites');

const getUserDetails = userId => API.get(`/users/${userId}`);
const updateUserDetails = (userId, userDetails) => API.put(`/users/update/${userId}`, userDetails);

export {
  API,
  getAllProducts,
  getProductByID,
  searchProductsByName,
  filterProductsByCategory,
  addToCart,
  removeFromCart,
  updateCartQuantity,
  getCartItems,
  addToFavorites,
  removeFromFavorites,
  getFavorites,
  getUserDetails,
  updateUserDetails
};
