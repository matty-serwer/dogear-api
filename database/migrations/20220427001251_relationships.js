/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("liked_posts", (table) => {
      table.increments();
      table
        .string("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")
        .notNullable();
      table
        .integer("post_id")
        .unsigned()
        .references("id")
        .inTable("posts")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")
        .notNullable();
      table.timestamps(true, true);
    })
    .createTable("liked_comments", (table) => {
      table.increments();
      table
        .string("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")
        .notNullable();
      table
        .integer("comment_id")
        .unsigned()
        .references("id")
        .inTable("comments")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")
        .notNullable();
      table.timestamps(true, true);
    })
    .createTable("user_to_club", (table) => {
      table.increments();
      table
        .string("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")
        .notNullable();
      table
        .integer("club_id")
        .unsigned()
        .references("id")
        .inTable("clubs")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")
        .notNullable();
      table.timestamps(true, true);
    })
    .createTable("user_checkpoint", (table) => {
      table.increments();
      table
        .string("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")
        .notNullable();
      table
        .integer("book_instance_id")
        .unsigned()
        .references("id")
        .inTable("book_instance")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")
        .notNullable();
      table.integer("checkpoint");
      table.timestamps(true, true);
    })
    .createTable("book_instance_checkpoint", (table) => {
      table.increments();
      table
        .integer("book_instance_id")
        .unsigned()
        .references("id")
        .inTable("book_instance")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")
        .notNullable();
      table.integer("checkpoint_num").notNullable();
      table.string("description").notNullable();
      table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable("book_instance_checkpoint")
    .dropTable("user_checkpoint")
    .dropTable("user_to_club")
    .dropTable("liked_comments")
    .dropTable("liked_posts");
};
