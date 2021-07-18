const models = require('../models');

exports.hello = async (req, res, next) => {
  try {
    res.status(200).json({ data: 'Hello World' });
  } catch (error) {
    next(error);
  }
};
