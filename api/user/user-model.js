const db = require("../../database/dbConfig");

module.exports = {
  get,
  insert,
  remove,
};

function get() {
  return db("user");
}

function insert(new_user) {
  return db("user").insert(new_user);
}

function remove(id) {
  return db("user").where("id", id).del();
}
