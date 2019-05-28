module.exports = async () => {
  await global.__KNEX__.destroy();
};