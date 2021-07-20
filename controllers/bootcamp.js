const { bootcamp, bootcamptrendbyyear, jobvsbootcamp } = require('../models');

exports.getBootcamps = async (req, res, next) => {
  try {
    if (!req.body) {
      req.body = {};
    }

    const data = await bootcamp.findAll({
      where: req.body,
      include: [
        // Include is join
        {
          model: bootcamptrendbyyear,
        },
        {
          model: jobvsbootcamp,
        },
      ],
    });

    if (data.length === 0) {
      return next({ message: 'Bootcamps not found', statusCode: 404 });
    }

    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};
