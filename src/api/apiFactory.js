import api from "./axios";

export const getData = async (url, params = {}) => {
  try {
    const { data } = await api.get(url, { params });
    return data?.data ?? data ?? [];
  } catch (error) {
    console.error(`Error fetching list from ${url}:`, error);
    return [];
  }
};

export const getDataById = async (url, id) => {
  try {
    const { data } = await api.get(`${url}/${id}`);
    return data?.data ?? data ?? null;
  } catch (error) {
    console.error(`Error fetching item ${id} from ${url}:`, error);
    return null;
  }
};

export const updateData = async (method, url, payload) => {
  const { data } = await api[method.toLowerCase()](url, payload);
  return data;
};
