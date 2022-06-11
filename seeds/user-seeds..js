const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [
  {
    username: "john",
    email: "johnDeer@yahoo.com",
    password: "password",
  },
  {
    username: "gary",
    email: "gary@yahoo.com",
    password: "password",
  },
  {
    username: "Christopher",
    email: "chris@gmail.com",
    password: "password",
  },
  {
    username: "jerome",
    email: "jerome@gmail.com",
    password: "password",
  },
  {
    username: "mary",
    email: "mary@email.com",
    password: "password",
  },
  {
    username: "lizzo",
    email: "lizzo@lizzo.com",
    password: "password",
  },
  {
    username: "kate",
    email: "katebush@kate.com",
    password: "password",
  },
  {
    username: "megan",
    email: "theestallion@ahhhh.com",
    password: "password",
  },
  {
    username: "mark",
    email: "mark@yahoo.com",
    password: "password",
  },
  {
    username: "kelly",
    email: "kellybundy@albundy.com",
    password: "password",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
