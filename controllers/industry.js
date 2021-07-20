const { industry, industryneed, industrytrend } = require('../models');

exports.getIndustries = async (req, res, next) => {
  try {
    if (!req.body) {
      req.body = {};
    }

    const data = await industry.findAll({
      where: req.body,
      include: [
        {
          model: industryneed,
        },
        {
          model: industrytrend,
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
