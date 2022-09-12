const Express = require("express");
const Faker = require("@faker-js/faker");
const app = Express();

const array = [];

app.use(Express.json());
app.get("/hi", (req, res) => {
  const user = {
    userId: Faker.faker.random.word(),
    name: Faker.faker.name.fullName(),
    phoneNo: Faker.faker.phone.number(),
  };
  res.json(user);
});

app.get("/hello", (req, res) => {
  const user = {
    userId: Faker.faker.random.word(),
    name: Faker.faker.name.fullName(),
    phoneNo: Faker.faker.phone.number(),
    pic: Faker.faker.image.abstract(),
  };
  res.json(user);
});

app.post("/items/add", (req, res) => {
  console.log(req.body);
  array.push(req.body);
  res.json({ data: array });
});

app.get("/items", (req, res) => {
  res.json(array);
});

app.listen(1000, () => {
  console.log("Started listening to port 1000");
});
