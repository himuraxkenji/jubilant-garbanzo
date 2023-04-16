const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_VERSION;

const endPoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  products: {
    getList: (limit, offset) => `${API}/api/${VERSION}/products?limit${limit}&offset=${offset}`,
    getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
  },
};
