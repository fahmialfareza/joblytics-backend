const { skill, skilltrend } = require('../models');

exports.getSkills = async (req, res, next) => {
  try {
    if (!req.body) {
      req.body = {};
    }

    const data = await skill.findAll({
      where: req.body,
      include: [
        {
          model: skilltrend,
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
