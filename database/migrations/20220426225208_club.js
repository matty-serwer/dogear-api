/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema
    .createTable("clubs", (table) => {
      table.increments().primary();
      table.string("name").unique().notNullable();
      table
        .string("organizer_id")
        .references("id")
        .inTable("users")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")
        .notNullable();
      table.string("genre1");
      table.string("genre2");
      table.string("description");
      table.integer("num_members").defaultTo(0);
      table.date("sprint_start");
      table.date("spring_end");
      table.timestamps(true, true);
    })
    .createTable("book_instance", (table) => {
      table.increments();
      table
        .integer("club_id")
        .unsigned()
        .references("id")
        .inTable("clubs")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")
        .notNullable();
      table.string("book_title").notNullable();
      table.string("book_author");
      table.string("book_isbn");
      table.string("image_url");
      table.string("status").defaultTo("in_queue"); // closed / active / in_queue
      table.integer("queue_number");
      table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("book_instance").dropTable("clubs");
};
