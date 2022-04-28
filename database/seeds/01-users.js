/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      id: "7ba099fc-5a50-494c-9999-e51240cc815c",
      username: "User1",
      password: "Password",
      email: "user1@gmail.com",
      first_name: "John",
      last_name: "Smith",
      num_clubs: 0,
      num_clubs_organized: 0,
      points: 0,
      books_completed: 0,
    },
    {
      id: "a97eb801-d782-4fbe-84bb-66f499ff5917",
      username: "Big Red",
      password: "Password2",
      email: "bigred@gmail.com",
      first_name: "Jane",
      last_name: "Doe",
      num_clubs: 1,
      num_clubs_organized: 0,
      points: 220,
      books_completed: 3,
    },
    {
      id: "21431f35-c594-42ef-8ebf-8c150b0a71fc",
      username: "Yazoo",
      password: "Password3",
      email: "yazoo@gmail.com",
      first_name: "Arnold",
      last_name: "Palmer",
      num_clubs: 1,
      num_clubs_organized: 0,
      points: 320,
      books_completed: 2,
    },
    {
      id: "4eff1d5d-2cde-47c2-8a13-1742f3435915",
      username: "Amy Organizer1",
      password: "Password4",
      email: "amyorg@gmail.com",
      first_name: "Amy",
      last_name: "Poehler",
      num_clubs: 1,
      num_clubs_organized: 1,
      points: 80,
      books_completed: 2,
    },
    {
      id: "b7bffe3e-be0a-4091-9d37-ce1fd4889650",
      username: "Louis Organizer2",
      password: "Password5",
      email: "Louis@gmail.com",
      first_name: "Louis",
      last_name: "Armstrong",
      num_clubs: 0,
      num_clubs_organized: 1,
      points: 0,
      books_completed: 2,
    },
    {
      id: "f6275e94-f916-4f3b-bde1-369a222d7f7d",
      username: "Tommy Twoclubs",
      password: "Password6",
      email: "Tommy2@gmail.com",
      first_name: "Tommy",
      last_name: "Tutone",
      num_clubs: 2,
      num_clubs_organized: 0,
      points: 440,
      books_completed: 4,
    },
  ]);
};
