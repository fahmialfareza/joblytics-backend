const { Op } = require('sequelize');
const { bootcamptrendbyyear, bootcamp, year } = require('../models');

exports.getBootcampTrendByYears = async (req, res, next) => {
  try {
    if (!req.body) {
      req.body = {};
    }

    if (req.body) {
      req.body.year_start &&
        req.body.year_end &&
        (req.body.year_id = {
          [Op.between]: [req?.body?.year_start, req?.body?.year_end],
        }) &&
        delete req.body.year_start &&
        delete req.body.year_end;
      req.body.bootcamp_id &&
        (req.body.bootcamp_id = { [Op.in]: req?.body?.bootcamp_id });
    }

    const data = await bootcamptrendbyyear.findAll({
      where: req.body,
      include: [
        // Include is join
        {
          model: bootcamp,
        },
        {
          model: year,
        },
      ],
    });

    if (data.length === 0) {
      return next({
        message: 'Bootcamp trend by years not found',
        statusCode: 404,
      });
    }

    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};
