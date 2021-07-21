const { Op } = require('sequelize');
const { jobtrendbycity, job, city } = require('../models');

exports.getJobTrendByCities = async (req, res, next) => {
  try {
    if (!req.body) {
      req.body = {};
    }

    if (req.body) {
      req.body.job_id && (req.body.job_id = { [Op.in]: req?.body?.job_id });
      req.body.city_id && (req.body.city_id = { [Op.in]: req?.body?.city_id });
    }

    const data = await jobtrendbycity.findAll({
      where: req.body,
      include: [
        // Include is join
        {
          model: job,
        },
        {
          model: city,
        },
      ],
    });

    if (data.length === 0) {
      return next({
        message: 'Job trends not found',
        statusCode: 404,
      });
    }

    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};
