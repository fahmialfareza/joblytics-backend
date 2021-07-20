const {
  year,
  jobtrend,
  skilltrend,
  industrytrend,
  industryneed,
  bootcamptrendbyyear,
  jobvsbootcamp,
} = require('../models');

exports.getYears = async (req, res, next) => {
  try {
    if (!req.body) {
      req.body = {};
    }

    const data = await year.findAll({
      where: req.body,
      include: [
        {
          model: jobtrend,
        },
        {
          model: industrytrend,
        },
        {
          model: skilltrend,
        },
        {
          model: industryneed,
        },
        {
          model: bootcamptrendbyyear,
        },
        {
          model: jobvsbootcamp,
        },
      ],
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
