/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("book_instance").del();
  await knex("book_instance").insert([
    {
      club_id: 1,
      book_title: "The Time Traveler's Wife",
      book_author: "Audrey Neffenegger",
      book_isbn: "978-1476764832",
      image_url:
        "https://images-na.ssl-images-amazon.com/images/I/51tMY5saxKL._SX326_BO1,204,203,200_.jpg",
      status: "closed",
      queue_number: null,
      num_checkpoints: 5,
    }, // 1
    {
      club_id: 1,
      book_title: "Water For Elephants: A Novel",
      book_author: "Sara Gruen",
      book_isbn: "978-1565125605",
      image_url:
        "https://images-na.ssl-images-amazon.com/images/I/71XBPDuC1KL.jpg",
      status: "active",
      queue_number: 0,
      num_checkpoints: 4,
    }, // 2
    {
      club_id: 1,
      book_title: "Memoirs Of A Geisha",
      book_author: "Arthur Golden",
      book_isbn: "978-0679781585",
      image_url:
        "https://images-na.ssl-images-amazon.com/images/I/51O9HqW8ZAL._SX322_BO1,204,203,200_.jpg",
      status: "in_queue",
      queue_number: 1,
      num_checkpoints: 6,
    }, // 3
    {
      club_id: 2,
      book_title: "The Great Gatsby",
      book_author: "F. Scott Fitzgerald",
      book_isbn: "978-1982146702",
      image_url:
        "http://prodimage.images-bn.com/pimages/9780743273565_p0_v14_s1200x630.jpg",
      status: "closed",
      queue_number: null,
      num_checkpoints: 3,
    }, // 4
    {
      club_id: 2,
      book_title: "Cat's Cradle",
      book_author: "Kurt Vonnegut",
      book_isbn: "978-0385333481",
      image_url:
        "http://prodimage.images-bn.com/pimages/9780743273565_p0_v14_s1200x630.jpg",
      status: "active",
      queue_number: 0,
      num_checkpoints: 4,
    }, // 5
  ]);
};
