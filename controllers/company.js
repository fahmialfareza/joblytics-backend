const { company, companyjobdemand } = require('../models');

exports.getCompanies = async (req, res, next) => {
  try {
    if (!req.body) {
      req.body = {};
    }

    const data = await company.findAll({
      where: req.body,
      include: [
        {
          model: companyjobdemand,
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
