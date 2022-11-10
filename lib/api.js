import axios from "axios";
export const baseUrl = "https://zoopla.p.rapidapi.com";
const options = {
  params: {
    area: "London",
    identifier: "london",
    ordering: "descending",
    page_number: "1",
  },
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
    "X-RapidAPI-Host": "zoopla.p.rapidapi.com",
  },
};
export const fetchApi = async (url, params) => {
  const { data } = await axios.get(url, {
    headers: options.headers,
    params: params !== null ? { ...options.params, ...params } : options.params,
  });
  return data;
};
