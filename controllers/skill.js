const { Op } = require('sequelize');
const { skill, skilltrend, year } = require('../models');

exports.getSkills = async (req, res, next) => {
  try {
    if (!req.body) {
      req.body = {};
    }

    if (req.body) {
      req.body.id && (req.body.id = { [Op.in]: req?.body?.id });
    }

    const data = await skill.findAll({
      where: req.body,
      include: [
        {
          model: skilltrend,
          include: [{ model: year }],
        },
      ],
    });

    if (data.length === 0) {
      return next({
        message: 'Skills not found',
        statusCode: 404,
      });
    }

    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};
