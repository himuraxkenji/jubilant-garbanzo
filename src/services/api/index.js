const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endpoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  products: {
    allProducts: `${API}/api/${VERSION}/products?limit`,
    getProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    postProduct: `${API}/api/${VERSION}/products`,
    putProduct: (id) => `${API}/api/${VERSION}/products/${id}/`,
    deleteProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
  },
  users: {
    getList: (limit) => `${API}/api/${VERSION}/users?limit=${limit}`,
    postUser: `${API}/api/${VERSION}/users`,
    isAvailable: `${API}/api/${VERSION}/users/is-available`,
  },
  categories: {
    getList: (limit) => `${API}/api/${VERSION}/categories?limit=${limit}`,
    postCategory: `${API}/api/${VERSION}/categories`,
    getCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    putCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    getProductsByCategorie: (id) => `${API}/api/${VERSION}/categories/${id}/products`,
  },
  files: {
    upload: `${API}/api/${VERSION}/files/upload`,
    getFile: (filename) => `${API}/api/${VERSION}/files/${filename}`,
  },
};

export default endpoints;
