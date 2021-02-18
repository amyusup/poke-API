const db = require("../config/mysql");

module.exports = {
  getPokemon: function (limit) {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM mypokemon LIMIT ${limit}`, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },
  addPokemon: (setData) => {
    return new Promise((resolve, reject) => {
      db.query(`INSERT INTO mypokemon SET ?`, setData, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },

    deletePokemon: (pokeId) => {
      return new Promise((resolve, reject) => {
        db.query(`DELETE FROM mypokemon WHERE pokeId='${pokeId}'`, (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(err);
          }
        });
      });
    },
    deleteAllPokemon: () => {
      return new Promise((resolve, reject) => {
        db.query(`DELETE FROM mypokemon`, (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(err);
          }
        });
      });
    },
};
