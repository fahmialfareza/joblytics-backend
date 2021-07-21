const { Op } = require('sequelize');
const { companyjobdemand, job, company } = require('../models');

exports.getCompanyJobDemand = async (req, res, next) => {
  try {
    if (!req.body) {
      req.body = {};
    }

    if (req.body) {
      req.body.company_id &&
        (req.body.company_id = { [Op.in]: req?.body?.company_id });
      req.body.job_id && (req.body.job_id = { [Op.in]: req?.body?.job_id });
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
