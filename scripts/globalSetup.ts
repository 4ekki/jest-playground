import knex from "../tests/src/db";

module.exports = () => {
  global.__KNEX__ = knex; 
};