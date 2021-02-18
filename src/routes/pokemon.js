const router = require("express").Router();
const PokemonController = require("../controllers/pokemon");
router
.get("/", PokemonController.getPokemon)
.post("/", PokemonController.addPokemon)
.delete("/:pokeId", PokemonController.deletePokemon)
.delete("/", PokemonController.deleteAllPokemon)

module.exports = router;
