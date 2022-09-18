const Book = require("../models/Book.models");
const User = require("../models/Client.models");
module.exports.bookController = {
  addBook: async (req, res) => {
    const { namebook, genreId, userId } = req.body;
    try {
      await Book.create({
        namebook,
        userId,
        genreId,
      });
      res.json("Книга добавлена");
    } catch (error) {
      res.json(error);
    }
  },
  dropBook: async (req, res) => {
    try {
      await Book.findByIdAndDelete(req.params.id);
      res.json("Книга удалена");
    } catch (error) {
      res.json(error);
    }
  },
  getBook: async (req, res) => {
    try {
      const getBok = await Book.find();
      res.json(getBok);
    } catch (error) {
      res.json(error);
    }
  },
  updateBook: async (req, res) => {
    try {
      await Book.findByIdAndUpdate(req.params.id, {
        namebook,
        userId,
        genreId,
      });
      res.json("Книга изменена");
    } catch (error) {
      res.json(error);
    }
  },

  async rentBook(req, res) {
    try {
      const user = await User.findById(req.params.userId);
      const book = await Book.findById(req.params.bookId);
      if (user.books.includes(req.params.bookId)) {
        return res.json("эта книга уже у клиента");
      } else if (user.isBlocked === true) {
        return res.json("Пользователь заблокирован");
      } else if (book._userId !== null) {
        return res.json("Книга занята");
      } else if (user.books.length >= 3) {
        return res.json("Достигнут лимит аренды");
      } else {
        await book.updateOne({ _userId: req.params.userId });
        await user.updateOne({ $push: { books: req.params.bookId } });
        return res.json("Книга арендована");
      }
    } catch (error) {
      return res.json(error.message);
    }
  },
  async returnBook(req, res) {
    try {
      const user = await User.findById(req.params.userId);
      const book = await Book.findById(req.params.bookId);
      if (user.books.includes(req.params.bookId)) {
        await book.updateOne({ _userId: null });
        await user.updateOne({ $pull: { books: req.params.bookId } });
        return res.json("Книга возвращена");
      } else {
        return res.json("Книга не была арендована клиентом");
      }
    } catch (error) {
      return res.json(error.message);
    }
  },
  async getByGenre(req, res) {
    try {
      const data = await Book.find({ _genreId: req.params.id }).populate(
        "genreId", 
        "userId",
        "name"
      );
      return res.json(data);
    } catch (error) {
      return res.json(error.message);
    }
  },
  async getOne(req, res) {
    try {
      const data = await Book.findById(req.params.id).populate(
        "genreId userId",
        "name"
      );
      return res.json(data);
    } catch (error) {
      return res.json(error.message);
    }
  },
};
