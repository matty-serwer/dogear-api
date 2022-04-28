const db = require("./../../database/dbConfig");

module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
};

function get() {
  return db("clubs");
}

function getById(id) {
  return db("clubs").where("id", id).first();
}

function insert(club) {
  return db("clubs").insert(club);
}

function update(id, changes) {
  return db("clubs").where("id", id).update(changes);
}

function remove(id) {
  return db("clubs").where("id", id).del();
}
