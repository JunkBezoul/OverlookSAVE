'use strict';

/**
 * chambre service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::chambre.chambre');
