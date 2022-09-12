const { gql } = require("apollo-server-express");

const typedefs = gql`
  type Query {
    hi: QueryResponse
    hello: QueryResponse
    items: [String]
  }

  type QueryResponse {
    userId: String
    name: String
    phoneNo: String
    pic: String
  }

  input Temp {
    name: String
  }

  type ItemsAddData {
    name: String
  }

  type ItemsAddResponse {
    data: [ItemsAddData]
  }

  type Mutation {
    itemsAdd(params: Temp): ItemsAddResponse
  }
`;

module.exports = { typedefs };
