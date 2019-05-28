import * as knex from 'knex';

declare global {
    namespace NodeJS {
      interface Global {
        __KNEX__: knex;
      }
    }
  }
  
export default knex({
    client: "mysql",
    connection: {
        host: "host",
        user: "user",
        password: "password",
        database: "database",
        timezone: "utc",
    },
});
