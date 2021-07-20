const { industrytrend, industry, year } = require('../models');

exports.getIndustryTrends = async (req, res, next) => {
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
      req.body.industry_id &&
        (req.body.industry_id = { [Op.in]: req?.body?.industry_id });
    }

    const data = await industrytrend.findAll({
      where: req.body,
      include: [
        // Include is join
        {
          model: industry,
        },
        {
          model: year,
        },
      ],
    });

    if (data.length === 0) {
      return next({
        message: 'Industry trends not found',
        statusCode: 404,
      });
    }

    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};
