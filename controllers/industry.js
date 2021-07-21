const { Op } = require('sequelize');
const { industry, industryneed, industrytrend, year } = require('../models');

exports.getIndustries = async (req, res, next) => {
  try {
    if (!req.body) {
      req.body = {};
    }

    if (req.body) {
      req.body.id && (req.body.id = { [Op.in]: req?.body?.id });
    }

    const data = await industry.findAll({
      where: req.body,
      include: [
        {
          model: industryneed,
          include: [{ model: year }],
        },
        {
          model: industrytrend,
          include: [{ model: year }],
        },
      ],
    });

    if (data.length === 0) {
      return next({
        message: 'Industries not found',
        statusCode: 404,
      });
    }

    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};
