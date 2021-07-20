const { jobvsbootcamp, bootcamp, job, year } = require('../models');

exports.getJobVsBootcamp = async (req, res, next) => {
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
    }

    const data = await jobvsbootcamp.findAll({
      where: req.body,
      include: [
        // Include is join
        {
          model: bootcamp,
        },
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
        message: 'Job vs bootcamp not found',
        statusCode: 404,
      });
    }

    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};
