/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("clubs").del();
  await knex("clubs").insert([
    {
      name: "Awesome Books",
      organizer_id: "4eff1d5d-2cde-47c2-8a13-1742f3435915",
      genre1: "Science Fiction",
      genre2: "Hostorical Fiction",
      description:
        "Here at the Awesome Books club, we read all kinds of books! But particularly, we love books involving time travelling romances that were converted into movies starring Rachel McAdams.",
      num_members: 3,
      sprint_start: "2022-04-25",
      sprint_end: "2022-05-10",
    }, // 1
    {
      name: "The Fitzgeralds",
      organizer_id: "b7bffe3e-be0a-4091-9d37-ce1fd4889650",
      genre1: "Classic Literature",
      description:
        "The Fitzgeralds book club will be focussing on classic Americal literature, particularly from the modern era.",
      num_members: 2,
      sprint_start: "2022-04-28",
      sprint_end: "2022-05-15",
    },
  ]);
};
