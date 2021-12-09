const { Router } = require("express");
const projectValidator = require('../../../../middlewares/project-validator');
const auth = require('../../../../middlewares/auth');

/** @param {Router} router */
module.exports = (router) => {
  router.get('/games',
    auth,
    projectValidator,
    async (req, res, next) => {
      try {
        res.json({
          error: false,
          data: {}
        });
      } catch (e) {
        console.log('request error =>', e.message);
        next(e);
      }
    }
  );
};
