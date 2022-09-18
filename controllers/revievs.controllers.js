const Review = require("../models/Review.models");
module.exports.reviewControllers = {
  addReview: async (req, res) => {
    const { content, userId, bookId } = req.body;
    try {
      await Review.create({
        content,
        userId: req.params.userId,
        bookId: req.params.bookId,
      });
      res.json("Отзыв добавлен");
    } catch (error) {
      res.json(error);
    }
  },
  updateReview: async (req, res) => {
    const { content } = req.body;
    try {
      const upRev = await Review.findByIdAndUpdate(req.params.id, content);
      res.json(upRev);
    } catch (error) {
      res.json(error);
    }
  },
  getReview: async (req, res) => {
    try {
      const getRev = await Review.find({}).populate("username");
      res.json(getRev);
    } catch (error) {
      res.json(error);
    }
  },
  dropReview: async (req, res) => {
    try {
      await Review.findByIdAndDelete(req.params.id);
      res.json("Отзыв удален");
    } catch (error) {
      res.json(error);
    }
  },
};
