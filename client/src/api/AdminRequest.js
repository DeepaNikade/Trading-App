import { API } from "./AxiosInstance";

export const adminLogin = async(loginData) => await API.post("/admin/login", loginData);
export const getUsers = async () => await API.get("/admin/users");
export const updateAuthorization = async(userId, data) => await API.patch(`/admin/user/${userId}/authorization`, data);
export const addUser = async(userId) => await API.get(`/admin/user/${userId}/add`);