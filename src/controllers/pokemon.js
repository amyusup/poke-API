const PokemonModel = require("../models/pokemon");
const { response } = require("../helpers/response");

module.exports = {
    getPokemon: async function (req, res) {
        try {
        const {limit} = req.query
          const result = await PokemonModel.getPokemon(limit);
          if (result) {
            response(res, 200, result);
          } else {
            response(res, 400, { message: "Pokemon not found" });
          }
        } catch (error) {
          response(res, 500, { message: error.message });
        }
      },
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
  deletePokemon: async function (req, res) {
    try {
      const {pokeId} = req.params;
      const result = await PokemonModel.deletePokemon(pokeId);
      response(res, 200, {
        result: result,
        message: "Pokemon data has been deleted",
      });
    } catch (error) {
      console.log(error)
      response(res, 500, { message: "Pokemon data failed to delete" });
    }
  },
  deleteAllPokemon: async function (req, res) {
    try {
      const result = await PokemonModel.deleteAllPokemon();
      response(res, 200, {
        result: result,
        message: "All pokemon data has been deleted",
      });
    } catch (error) {
      console.log(error)
      response(res, 500, { message: "All pokemon data failed to delete" });
    }
  },
};
