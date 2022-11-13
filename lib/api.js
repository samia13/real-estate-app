import axios from "axios";
export const baseUrl = "https://zoopla.p.rapidapi.com";

export const fetchApi = async (url, params) => {
  const options = {
    params: {
      area: params.area !== undefined ? params.area : "London",
      ordering: "descending",
      page_number: "1",
      page_size: "25",
    },
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
      "X-RapidAPI-Host": "zoopla.p.rapidapi.com",
    },
  };
  const { data } = await axios.get(url, {
    headers: options.headers,
    params: params !== null ? { ...options.params, ...params } : options.params,
  });
  return data;
};
