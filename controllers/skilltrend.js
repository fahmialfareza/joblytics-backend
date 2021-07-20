const { Op } = require('sequelize');
const { skilltrend, skill, year } = require('../models');

exports.getSkillTrends = async (req, res, next) => {
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
      req.body.skill_id &&
        (req.body.skill_id = { [Op.in]: req?.body?.skill_id });
    }

    const data = await skilltrend.findAll({
      where: req.body,
      include: [
        // Include is join
        {
          model: skill,
        },
        {
          model: year,
        },
      ],
    });

    if (data.length === 0) {
      return next({
        message: 'Skill trends not found',
        statusCode: 404,
      });
    }

    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};
