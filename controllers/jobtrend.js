const { Op } = require('sequelize');
const { jobtrend, job, year } = require('../models');

exports.getJobTrends = async (req, res, next) => {
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
      req.body.job_id && (req.body.job_id = { [Op.in]: req?.body?.job_id });
    }

    const data = await jobtrend.findAll({
      where: req.body,
      include: [
        // Include is join
        {
          model: job,
        },
        {
          model: year,
        },
      ],
    });

    if (data.length === 0) {
      return next({
        message: 'Job Trends not found',
        statusCode: 404,
      });
    }

    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};
