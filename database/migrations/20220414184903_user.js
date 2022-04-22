/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.string("id").primary().unique();
    table.string("username").unique();
    table.string("password");
    table.string("email").unique();
    table.string("first_name");
    table.string("last_name");
    table.integer("num_clubs");
    table.integer("num_clubs_organized");
    table.integer("points");
    table.integer("books_completed");
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
