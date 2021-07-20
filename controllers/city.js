const { city, jobtrendbycity } = require('../models');

exports.getCities = async (req, res, next) => {
  try {
    if (!req.body) {
      req.body = {};
    }

    const data = await city.findAll({
      where: req.body,
      include: [
        // Include is join
        {
          model: jobtrendbycity,
        },
      ],
    });

    if (data.length === 0) {
      return next({
        message: 'Cities not found',
        statusCode: 404,
      });
    }

    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};
