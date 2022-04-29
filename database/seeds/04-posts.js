/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("comments").del();
  await knex("posts").del();
  await knex("post_types").del();

  await knex("post_types").insert([
    { name: "post" }, // 1
    { name: "review" }, // 2
  ]);
  await knex("posts").insert([
    {
      post_type: 2,
      topic: "The greatest book of all time",
      content:
        "Tempor ad laboris est minim irure anim qui elit amet. Sint ea magna esse tempor eu. Aute fugiat deserunt nulla qui in ex velit irure officia deserunt incididunt nostrud. Nulla magna exercitation irure deserunt non dolor laborum reprehenderit officia aute nisi ipsum officia irure.",
      author_id: "a97eb801-d782-4fbe-84bb-66f499ff5917",
      likes: 3,
      comments: 2,
      book_instance_id: 2,
      checkpoint: 4,
    },
  ]);
};
