const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", (req, res) => {
  res.render("recipes");
});

router.get("/:food/:id", (req, res) => {
  let food = req.params.food;
  let decoded = decodeURI(food);
  let id = Number(req.params.id);
  axios
    .get(
      `https://api.edamam.com/search?q=${decoded}&app_id=dbf86cd5&app_key=86999e439416cc6d0f9a9a3b54a21f4d&to=100`
    )
    .then(result => {
      const foundRecipe = result.data.hits.filter(
        item => item.recipe.totalWeight === id
      )[0];
      res.render("show", {
        recipe: foundRecipe
      });
    })
    .catch(err => console.log(err));
});

module.exports = router;
