const router = require("express").Router();
const PokemonController = require("../controllers/pokemon");
router
.post("/", PokemonController.addPokemon)
// .patch("/", BarangController.editBarang)
// .delete("/:kode", BarangController.deleteBarang)

module.exports = router;
