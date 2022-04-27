/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.string("id").primary().unique();
    table.string("username").unique().notNullable();
    table.string("password").notNullable();
    table.string("email").unique().notNullable();
    table.string("first_name");
    table.string("last_name");
    table.integer("num_clubs").defaultTo(0);
    table.integer("num_clubs_organized").defaultTo(0);
    table.integer("points").unsigned().defaultTo(0);
    table.integer("books_completed").defaultTo(0);
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
