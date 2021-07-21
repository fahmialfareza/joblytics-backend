const { Op } = require('sequelize');
const { city, jobtrendbycity, job } = require('../models');

exports.getCities = async (req, res, next) => {
  try {
    if (!req.body) {
      req.body = {};
    }

    if (req.body) {
      req.body.id && (req.body.id = { [Op.in]: req?.body?.id });
    }

    const data = await city.findAll({
      where: req.body,
      include: [
        // Include is join
        {
          model: jobtrendbycity,
          include: [{ model: job }],
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
