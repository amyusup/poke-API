const PokemonModel = require("../models/pokemon");
const { response } = require("../helpers/response");

module.exports = {
  addPokemon: async function (req, res) {
    try {
      const setData = req.body;
      const result = await PokemonModel.addPokemon(setData);
      response(res, 200, {
        result: result,
        message: "Pokemon data has been saved",
      });
    } catch (error) {
      console.log(error)
      response(res, 500, { message: "Pokemon data has been saved " });
    }
  },
//   deleteBarang: async function (req, res) {
//     try {
//       const {kode} = req.params;
//       const result = await BarangModel.deleteBarang(kode);
//       response(res, 200, {
//         result: result,
//         message: "Berhasil menghapus data barang ",
//       });
//     } catch (error) {
//       console.log(error)
//       response(res, 500, { message: "Gagal menghapus data barang" });
//     }
//   },
};
