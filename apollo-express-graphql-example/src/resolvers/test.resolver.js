const axios = require("axios");

module.exports = {
  // Subscription: {
  // 	test: {
  // 		subscribe: (_, args) => {

  // 		},
  // 	},
  // },
  Query: {
    hi: async function hiResolver() {
      return await axios.default.get("http://localhost:1000/hi").then((res) => {
        console.log(res.data);
        return res.data;
      });
    },
    hello: async function helloResolver() {
      return await axios.default
        .get("http://localhost:1000/hello")
        .then((res) => {
          console.log(res.data);
          return res.data;
        });
    },
    items: async function itemsResolver() {
      return await axios.default
        .get("http://localhost:1000/items")
        .then((res) => {
          return res.data;
        });
    },
  },
  Mutation: {
    itemsAdd: async function itemsAddResolver(_, { params }) {
      console.log("asda", params);
      return await axios.default
        .post("http://localhost:1000/items/add", params)
        .then((res) => {
          return res.data;
        });
    },
  },
};
