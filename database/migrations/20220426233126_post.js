/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("post_types", (table) => {
      table.increments();
      table.string("name"); // post / review
    })
    .createTable("posts", (table) => {
      table.increments();
      table
        .integer("post_type") // 0 / 1
        .unsigned()
        .references("id")
        .inTable("post_types")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")
        .defaultTo(0);
      table.string("topic").notNullable();
      table.string("content").notNullable();
      table
        .string("author_id")
        .references("id")
        .inTable("users")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")
        .notNullable();
      table.integer("likes").defaultTo(0);
      table.integer("comments").defaultTo(0);
      table
        .integer("book_instance_id")
        .references("id")
        .inTable("book_instance")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      table.integer("checkpoint");
      table.string("info"); // posible app location info ?
      table.timestamps(true, true);
    })
    .createTable("comments", (table) => {
      table.increments();
      table.string("content").notNullable();
      table
        .string("author_id")
        .references("id")
        .inTable("users")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")
        .notNullable();
      table
        .integer("post_id")
        .references("id")
        .inTable("posts")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")
        .notNullable();
      table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable("comments")
    .dropTable("posts")
    .dropTable("post_types");
};
