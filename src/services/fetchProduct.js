import axios from "axios";

const API_URL = "https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory";

// Fetch products
export const fetchProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
