import { getData, getDataById, updateData } from "./apiFactory";

export const getUsers = (filters) => getData("/users", filters);

export const getStudentById = (id) => getDataById("/student", id);

export const updateGrade = (gradeData) =>
  updateData("PATCH", "/grades/update", gradeData);

export const createItem = (itemData) => updateData("POST", "/items", itemData);
