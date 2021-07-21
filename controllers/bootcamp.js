const { Op } = require('sequelize');
const {
  bootcamp,
  bootcamptrendbyyear,
  jobvsbootcamp,
  year,
  job,
} = require('../models');

exports.getBootcamps = async (req, res, next) => {
  try {
    if (!req.body) {
      req.body = {};
    }

    if (req.body) {
      req.body.id && (req.body.id = { [Op.in]: req?.body?.id });
    }

    const data = await bootcamp.findAll({
      where: req.body,
      include: [
        // Include is join
        {
          model: bootcamptrendbyyear,
          include: [{ model: year }],
        },
        {
          model: jobvsbootcamp,
          include: [{ model: job }, { model: year }],
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
