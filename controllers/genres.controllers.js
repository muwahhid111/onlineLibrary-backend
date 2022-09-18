const Genre = require("../models/Genre.models");
module.exports.genreController = {
  addGenre: async (req, res) => {
    const { genreName, description } = req.body;
    try {
      await Genre.create({
        genreName,
        description,
      });
      res.json("жанр добавлен");
    } catch (error) {
      res.json();
    }
  },
  dropGenre: async (req, res) => {
    try {
      await Genre.findByIdAndRemove(req.params.id);
      res.json("Жанр удален");
    } catch (error) {
      res.json(error);
    }
  },
  getGenre: async (req, res) => {
    try {
      await Genre.find({});
    } catch (error) {
      res.json(error);
    }
  },
  updateGenre: async (req, res) => {
    const { genreName, description } = req.body;
    try {
      await Genre.findByIdAndUpdate(req.params.id, {
        genreName,
        description,
      });
      res.json("Жанр успешно изменен");
    } catch (error) {
      res.json(error);
    }
  },
};
