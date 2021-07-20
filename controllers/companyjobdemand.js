const { companyjobdemand, job, company } = require('../models');

exports.getCompanyJobDemand = async (req, res, next) => {
  try {
    if (!req.body) {
      req.body = {};
    }

    const data = await companyjobdemand.findAll({
      where: req.body,
      include: [
        // Include is join
        {
          model: job,
        },
        {
          model: company,
        },
      ],
    });

    if (data.length === 0) {
      return next({
        message: 'Company job demand not found',
        statusCode: 404,
      });
    }

    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};
