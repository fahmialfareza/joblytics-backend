const { Op } = require('sequelize');
const {
  job,
  jobtrend,
  jobtrendbycity,
  companyjobdemand,
  jobvsbootcamp,
  year,
  city,
  company,
  bootcamp,
} = require('../models');

exports.getJobs = async (req, res, next) => {
  try {
    if (!req.body) {
      req.body = {};
    }

    if (req.body) {
      req.body.id && (req.body.id = { [Op.in]: req?.body?.id });
    }

    const data = await job.findAll({
      where: req.body,
      include: [
        {
          model: jobtrend,
          include: [{ model: year }],
        },
        {
          model: jobtrendbycity,
          include: [{ model: city }],
        },
        {
          model: companyjobdemand,
          include: [{ model: company }],
        },
        {
          model: jobvsbootcamp,
          include: [{ model: bootcamp }, { model: year }],
        },
      ],
    });

    if (data.length === 0) {
      return next({
        message: 'Jobs not found',
        statusCode: 404,
      });
    }

    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};
