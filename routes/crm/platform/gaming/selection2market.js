const { Router } = require("express");
const auth = require('../../../../middlewares/auth');

/** @param {Router} router */
module.exports = (router) => {
  router.get('/selection2market',
    auth,
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
