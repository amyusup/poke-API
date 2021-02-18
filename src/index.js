const router = require("express").Router();
const pokemonRoutes = require("./routes/pokemon");
router.use("/pokemon", pokemonRoutes);
module.exports = router;
