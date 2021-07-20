const { industrytrend, industry, year } = require('../models');

exports.getIndustryTrends = async (req, res, next) => {
  try {
    if (!req.body) {
      req.body = {};
    }

    const data = await industrytrend.findAll({
      where: req.body,
      include: [
        // Include is join
        {
          model: industry,
        },
        {
          model: year,
        },
      ],
    });

    if (data.length === 0) {
      return next({
        message: 'Industry trends not found',
        statusCode: 404,
      });
    }

    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};
