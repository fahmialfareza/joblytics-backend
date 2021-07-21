const { Op } = require('sequelize');
const { company, companyjobdemand, job } = require('../models');

exports.getCompanies = async (req, res, next) => {
  try {
    if (!req.body) {
      req.body = {};
    }

    if (req.body) {
      req.body.id && (req.body.id = { [Op.in]: req?.body?.id });
    }

    const data = await company.findAll({
      where: req.body,
      include: [
        {
          model: companyjobdemand,
          include: [{ model: job }],
        },
      ],
    });

    if (data.length === 0) {
      return next({
        message: 'Companies not found',
        statusCode: 404,
      });
    }

    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};
