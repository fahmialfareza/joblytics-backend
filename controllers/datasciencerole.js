const { Op } = require('sequelize');
const { datasciencerole } = require('../models');

exports.getRole = async (req, res, next) => {
  try {
    if (!req.body) {
      req.body = {};
    }

    if (req.body) {
      req.body.id && (req.body.id = { [Op.in]: req?.body?.id });
    }

    const data = await datasciencerole.findAll({
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
