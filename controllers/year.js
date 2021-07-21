const { Op } = require('sequelize');
const {
  year,
  jobtrend,
  skilltrend,
  industrytrend,
  industryneed,
  bootcamptrendbyyear,
  jobvsbootcamp,
  job,
  industry,
  skill,
  bootcamp,
} = require('../models');

exports.getYears = async (req, res, next) => {
  try {
    if (!req.body) {
      req.body = {};
    }

    if (req.body) {
      req.body.id && (req.body.id = { [Op.in]: req?.body?.id });
    }

    const data = await year.findAll({
      where: req.body,
    });

    if (data.length === 0) {
      return next({
        message: 'Years not found',
        statusCode: 404,
      });
    }

    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};
