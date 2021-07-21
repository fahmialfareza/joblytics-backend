const { Op } = require('sequelize');
const { datasciencetopskill } = require('../models');

exports.getTopSkills = async (req, res, next) => {
  try {
    if (!req.body) {
      req.body = {};
    }

    if (req.body) {
      req.body.id && (req.body.id = { [Op.in]: req?.body?.id });
    }

    const data = await datasciencetopskill.findAll({
      where: req.body,
    });

    if (data.length === 0) {
      return next({ message: 'Top skill not found', statusCode: 404 });
    }

    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};
