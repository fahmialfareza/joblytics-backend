const {
  job,
  jobtrend,
  jobtrendbycity,
  companyjobdemand,
  jobvsbootcamp,
} = require('../models');

exports.getJobs = async (req, res, next) => {
  try {
    if (!req.body) {
      req.body = {};
    }

    const data = await job.findAll({
      where: req.body,
      include: [
        {
          model: jobtrend,
        },
        {
          model: jobtrendbycity,
        },
        {
          model: companyjobdemand,
        },
        {
          model: jobvsbootcamp,
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
