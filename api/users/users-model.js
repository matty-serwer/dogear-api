const db = require("./../../database/dbConfig");

module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
  findBy,
};

function get() {
  return db("users");
}

function getById(id) {
  return db("users").where({ id }).first();
}

function insert(user) {
  return db("users").insert(user);
}

function update(id, changes) {
  return db("users").where({ id }).update(changes);
}

function remove(id) {
  return db("users").where("id", id).del();
}

function findBy(filter) {
  return db("users as u").where(filter);
}
