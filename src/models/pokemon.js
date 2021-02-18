const db = require("../config/mysql");

module.exports = {
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

//   deleteBarang: (kode) => {
//     return new Promise((resolve, reject) => {
//       db.query(`DELETE FROM barang WHERE kode='${kode}'`, (err, result) => {
//         if (!err) {
//           resolve(result);
//         } else {
//           reject(err);
//         }
//       });
//     });
//   },
  
}