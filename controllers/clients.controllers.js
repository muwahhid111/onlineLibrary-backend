const User = require("../models/Client.models");
const Book = require("../models/Book.models");

module.exports.usersController = {
  addUser: async (req, res) => {
    const { username, books, isBlocked } = req.body;
    try {
      await User.create({
        username,
        books,
        isBlocked,
      });
      res.json("Клиент добавлен");
    } catch (error) {
      res.json(error.message);
    }
  },
  dropUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.is);
      res.json("Клиент удален");
    } catch (error) {
      res.json(error);
    }
  },
  userUpdate: async (req, res) => {
    const { username, books, isBlocked } = req.body;
    try {
      await User.findByIdAndUpdate(req.params.id, {
        username,
        isBlocked,
        books,
      });
      res.json("Клиент обновлен");
    } catch (error) {
      res.json(error);
    }
  },
  getUsers: async (req, res) => {
    try {
      const getUs = await User.find({});
      res.json(getUs);
    } catch (error) {
      res.json(error);
    }
  },
  userBan: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.id, {
        isBlocked: true,
        books: [],
      });
      await Book.find({ userId: req.params.userId }).updateMany({
        userId: null,
      });
      res.json("Пользователь заблокировкан");
    } catch (error) {
      res.json(error);
    }
  },
};
