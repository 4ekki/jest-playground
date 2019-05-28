import knex from '../../src/db'

test("some test", async () => {
  const a = await knex.table("profiles").where({id: "d6a66831-4e21-4465-9bc7-a5554a250541"})
  // await knex.destroy(); 
  expect(a[0].email).toBeTruthy(); 
})