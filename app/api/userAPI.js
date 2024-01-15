import axios from "axios";

export const userAPI = {
  getUser: async () => {
    return await axios
      .get(`${process.env.NEXT_PUBLIC_USER_API_URL}/getuser`)
      .then((res) => res.data);
  },
  getRefreshToken: async (value) => {
    return await axios
      .post(`${process.env.NEXT_PUBLIC_USER_API_URL}/ref-token`, {
        refreshToken: value,
      })
      .then((res) => res.data);
  },
  getUserCoins: async () => {
    return await axios
      .get(`${process.env.NEXT_PUBLIC_USER_API_URL}/get-user-current-balance`)
      .then((res) => res.data);
  },
  login: async (values) => {
    return await axios
      .post(`${process.env.NEXT_PUBLIC_USER_API_URL}/login`, {
        phone: values.phone,
        password: values.password,
      })
      .then((res) => res.data);
  },
  logout: async () => {
    return await axios
      .get(`${process.env.NEXT_PUBLIC_USER_API_URL}/logout`)
      .then((res) => res.data);
  },
};
