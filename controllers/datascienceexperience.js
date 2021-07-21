const { Op } = require('sequelize');
const { datascienceexperience } = require('../models');

exports.getExperiences = async (req, res, next) => {
  try {
    if (!req.body) {
      req.body = {};
    }

    if (req.body) {
      req.body.id && (req.body.id = { [Op.in]: req?.body?.id });
    }

    const data = await datascienceexperience.findAll({
      where: req.body,
    });

    if (data.length === 0) {
      return next({ message: 'Role not found', statusCode: 404 });
    }

    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};
