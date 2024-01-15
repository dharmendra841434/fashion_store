import axios from "axios";

export const productAPI = {
  getAllProduct: async () => {
    return await axios
      .get(`${process.env.NEXT_PUBLIC_BASE_UR}/product/products-list`)
      .then((res) => res.data);
  },
};
//   getGameRates: async () => {
//     return await axios
//       .get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/game-rates`)
//       .then((res) => res.data);
//   },
//   getBidHistory: async (values) => {
//     const { fromDate, toDate } = values;
//     return await axios
//       .get(
//         `${process.env.NEXT_PUBLIC_BASE_API_URL}/bid-history?fromDate=${fromDate}&toDate=${toDate}`
//       )
//       .then((res) => res.data);
//   },
//   getDepositeHistory: async () => {
//     return await axios
//       .get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/deposit-history`)
//       .then((res) => res.data);
//   },
//   getWithdrawlHistory: async () => {
//     return await axios
//       .get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/withdrawl-history`)
//       .then((res) => res.data);
//   },
//   getWinHistory: async () => {
//     return await axios
//       .get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/win-history`)
//       .then((res) => res.data);
//   },
//   getAllGamesRate: async () => {
//     return await axios
//       .get(
//         `${process.env.NEXT_PUBLIC_BASE_API_URL}/get-all-games-jodi-harup-rate `
//       )
//       .then((res) => res.data);
//   },
//   get24HoursBidHistory: async () => {
//     return await axios
//       .get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/bid-history`)
//       .then((res) => res.data);
//   },
//   makeBid: async (values) => {
//     return await axios
//       .post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/make-bid`, {
//         gameName: values.gameName,
//         type_of_bid: values.type_of_bid,
//         subType: "",
//         bidDetails: values.bidDetails,
//         total: values.total,
//       })
//       .then((res) => res.data);
//   },
//   todayBidRecords: async (gameName) => {
//     return await axios
//       .get(
//         `${process.env.NEXT_PUBLIC_BASE_API_URL}/user-bid-records-today?game=${gameName}`
//       )
//       .then((res) => res.data);
//   },
//   cancelBid: async (bid_Id) => {
//     //alert(bid_Id);
//     return await axios
//       .delete(`${process.env.NEXT_PUBLIC_BASE_API_URL}/cancel-bid/${bid_Id}`)
//       .then((res) => res.data);
//   },
//   bidResult: async () => {
//     //alert(bid_Id);
//     return await axios
//       .get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/results`)
//       .then((res) => res.data);
//   },
//   getNotifications: async () => {
//     return await axios
//       .get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/my-notifications-list `)
//       .then((res) => res.data);
//   },
// };
