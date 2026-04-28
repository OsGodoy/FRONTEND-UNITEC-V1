import {
  getData,
  getDataById,
  patchData,
  postData,
  updateData,
} from "./apiFactory";

export const getUsers = async (filters = {}) => {
  const params = { ...filters };
  return await getData("/users", params);
};

export const getStudents = async (filters = {}) => {
  const params = { ...filters };
  return await getData("/students", params);
};

export const getStudentById = async (id) => {
  return await getDataById("/student", id);
};

export const updateGrade = async (gradeData) => {
  return await patchData("/grades/update", gradeData);
};

// export const createItem = async (itemData) => {
//   return await postData("/items", itemData);
// };
