# dogear-api

### Instructions ((Thu Apr 28 2022))

in terminal:
knex migrate:latest
knex seed: run
npm start

http://localhost:4000/clubs
A get request here should return 2 clubs initially, in postman or in the browser

This endpoint is full CRUD. you can GET, PUT, or DELETE at
http://localhost:4000/clubs/:id

### knex commands

knex migrate:up
moves up one migration

knex migrate:down
moves down one migration

knex migrate:latest
moves all the way up, running all migrations. This will give you all database tables.

knex migrate:rollback
moves all the way down, removing all tables.
