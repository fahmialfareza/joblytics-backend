'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /* Bootcamp Trend by Years */
    await queryInterface.addConstraint('bootcamptrendbyyears', {
      fields: ['bootcamp_id'],
      type: 'foreign key',
      name: 'custom_fkey_bootcamptrendbyyears_bootcamp_id',
      references: {
        //Required field
        table: 'bootcamps',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('bootcamptrendbyyears', {
      fields: ['year_id'],
      type: 'foreign key',
      name: 'custom_fkey_bootcamptrendbyyears_year_id',
      references: {
        //Required field
        table: 'years',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    /* Job vs Bootcamp */
    await queryInterface.addConstraint('jobvsbootcamps', {
      fields: ['bootcamp_id'],
      type: 'foreign key',
      name: 'custom_fkey_jobvsbootcamps_bootcamp_id',
      references: {
        //Required field
        table: 'bootcamps',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('jobvsbootcamps', {
      fields: ['job_id'],
      type: 'foreign key',
      name: 'custom_fkey_jobvsbootcamps_job_id',
      references: {
        //Required field
        table: 'jobs',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('jobvsbootcamps', {
      fields: ['year_id'],
      type: 'foreign key',
      name: 'custom_fkey_jobvsbootcamps_year_id',
      references: {
        //Required field
        table: 'years',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
