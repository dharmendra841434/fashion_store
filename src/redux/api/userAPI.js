"use client";

import axios from "axios";

export const userAPI = {
  getUser: async (id) => {
    return await axios
      .get(`${process.env.NEXT_PUBLIC_BASE_UR}/user/${id}`)
      .then((res) => res.data);
  },
  getUserAddress: async (id) => {
    return await axios
      .get(`${process.env.NEXT_PUBLIC_BASE_UR}/user/addresses/${id}`)
      .then((res) => res.data);
  },
  getAllStates: async (data) => {
    return await axios
      .post(`${process.env.NEXT_PUBLIC_BASE_UR}/user/get-states`, data)
      .then((res) => res.data);
  },
  updateUserDetails: async (data) => {
    const { id, body } = data;
    return await axios
      .post(`${process.env.NEXT_PUBLIC_BASE_UR}/user/update/${id}`, body)
      .then((res) => res.data)
      .catch((error) => error);
  },
  saveUserAddress: async (data) => {
    return await axios
      .post(`${process.env.NEXT_PUBLIC_BASE_UR}/user/save-address`, data)
      .then((res) => res.data)
      .catch((error) => error);
  },

  getUserOrders: async (id) => {
    return await axios
      .get(`${process.env.NEXT_PUBLIC_BASE_UR}/order/order-list/${id}`)
      .then((res) => res.data);
  },
  // getRefreshToken: async (value) => {
  //   return await axios
  //     .post(`${process.env.NEXT_PUBLIC_USER_API_URL}/ref-token`, {
  //       refreshToken: value,
  //     })
  //     .then((res) => res.data);
  // },
  // getUserCoins: async () => {
  //   return await axios
  //     .get(`${process.env.NEXT_PUBLIC_USER_API_URL}/get-user-current-balance`)
  //     .then((res) => res.data);
  // },
  // login: async (values) => {
  //   return await axios
  //     .post(`${process.env.NEXT_PUBLIC_USER_API_URL}/login`, {
  //       phone: values.phone,
  //       password: values.password,
  //     })
  //     .then((res) => res.data);
  // },
  // logout: async () => {
  //   return await axios
  //     .get(`${process.env.NEXT_PUBLIC_USER_API_URL}/logout`)
  //     .then((res) => res.data);
  // },
};
