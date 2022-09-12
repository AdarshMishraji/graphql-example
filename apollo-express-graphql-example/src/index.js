const Express = require("express");
const ApolloExpress = require("apollo-server-express");
const http = require("http");
const resolvers = require("./resolvers/test.resolver");
const { typedefs } = require("./typedefs/test.typedef");

const app = Express();

app.use(Express.json({ limit: "50mb" }));
app.use(Express.urlencoded({ limit: "50mb" }));

const apolloServer = new ApolloExpress.ApolloServer({
  typeDefs: typedefs,
  resolvers: resolvers,
  debug: true,
});

apolloServer.applyMiddleware({ app });

const httpServer = http.createServer(app);
apolloServer.installSubscriptionHandlers(httpServer);
httpServer.timeout = 60000; // 1 min

httpServer.listen(2000, () => {
  console.log(`🚀 Server ready at http://localhost:${2000}/graphql`);
});
