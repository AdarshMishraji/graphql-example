const Express = require("express");
const resolvers = require("./resolvers/test.resolver");
const { schema } = require("./schema/test.schema");
const express_graphql = require("express-graphql").graphqlHTTP;

const app = Express();

app.use(Express.json({ limit: "50mb" }));
app.use(Express.urlencoded({ limit: "50mb" }));

const root = {
  hi: resolvers.Query.hi,
  hello: resolvers.Query.hello,
  items: resolvers.Query.items,
  itemsAdd: resolvers.Mutation.itemsAdd,
};

app.use(
  "/graphql",
  express_graphql({
    schema,
    pretty: true,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log(`🚀 Server ready at http://localhost:${4000}/graphql`);
  // console.log(
  //   `🚀 Subscriptions ready at ws://localhost:${4000}`
  // );
});
