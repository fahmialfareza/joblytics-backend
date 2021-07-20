'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /* Job Trends */
    await queryInterface.addConstraint('jobtrends', {
      fields: ['job_id'],
      type: 'foreign key',
      name: 'custom_fkey_jobtrends_job_id',
      references: {
        //Required field
        table: 'jobs',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('jobtrends', {
      fields: ['year_id'],
      type: 'foreign key',
      name: 'custom_fkey_jobtrends_year_id',
      references: {
        //Required field
        table: 'years',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    /* Skill trends */
    await queryInterface.addConstraint('skilltrends', {
      fields: ['year_id'],
      type: 'foreign key',
      name: 'custom_fkey_skilltrends_year_id',
      references: {
        //Required field
        table: 'years',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('skilltrends', {
      fields: ['skill_id'],
      type: 'foreign key',
      name: 'custom_fkey_skilltrends_skill_id',
      references: {
        //Required field
        table: 'skills',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    /* Industry Trends */
    await queryInterface.addConstraint('industrytrends', {
      fields: ['industry_id'],
      type: 'foreign key',
      name: 'custom_fkey_industrytrends_industry_id',
      references: {
        //Required field
        table: 'industries',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('industrytrends', {
      fields: ['year_id'],
      type: 'foreign key',
      name: 'custom_fkey_industrytrends_year_id',
      references: {
        //Required field
        table: 'years',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    /* Industry Needs */
    await queryInterface.addConstraint('industryneeds', {
      fields: ['year_id'],
      type: 'foreign key',
      name: 'custom_fkey_industryneeds_year_id',
      references: {
        //Required field
        table: 'years',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('industryneeds', {
      fields: ['industry_id'],
      type: 'foreign key',
      name: 'custom_fkey_industryneeds_industry_id',
      references: {
        //Required field
        table: 'industries',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    /* Job Trends by City */
    await queryInterface.addConstraint('jobtrendbycities', {
      fields: ['city_id'],
      type: 'foreign key',
      name: 'custom_fkey_jobtrendbycities_city_id',
      references: {
        //Required field
        table: 'cities',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('jobtrendbycities', {
      fields: ['job_id'],
      type: 'foreign key',
      name: 'custom_fkey_jobtrendbycities_job_id',
      references: {
        //Required field
        table: 'jobs',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    /* Company Job Demand */
    await queryInterface.addConstraint('companyjobdemands', {
      fields: ['job_id'],
      type: 'foreign key',
      name: 'custom_fkey_companyjobdemands_job_id',
      references: {
        //Required field
        table: 'jobs',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('companyjobdemands', {
      fields: ['company_id'],
      type: 'foreign key',
      name: 'custom_fkey_companyjobdemands_company_id',
      references: {
        //Required field
        table: 'companies',
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
