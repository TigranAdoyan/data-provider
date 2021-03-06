const AppError = require('../modules/app-error');
const DB = require('../managers/db');
const {
  sportsbook_regions,
  sportsbook_tournaments,
  sportsbook_markets,
  sportsbook_participants,
  sportsbook_selections,
  sportsbook_matches,
  selection2market,
  sport
} = require('../dtos');

module.exports = class GamingController {
  /** @type {import('express').RequestHandler} */
  static bets = async (req, res, next) => {
    try {
      res.error.msg('Not implemented').status(501).end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler<, , {from:string,to:string}>} */
  static sport_bets = async (req, res, next) => {
    try {
      // const s_bets = await DB.project(req.project).getSportBetsByRange(new Date(req.body.from), new Date(req.body.to));
      // res.stream(s_bets, s_bet => sport_bets(s_bet, s_bet));
      res.error.msg('Not implemented').status(501).end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static selection2market = async (req, res, next) => {
    try {
      const selections = await DB.sportsBookSelections(req.query.page, req.query.limit);
      res.success.data({
        ...selections,
        data: selections.data.map(selection2market.process)
      }).end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static markets = async (req, res, next) => {
    try {
      const markets = await DB.sportsBookMarkets(
        req.query.page,
        req.query.limit,
        req.query.where
      );

      res.success.data({
        ...markets,
        data: markets.data.map(sportsbook_markets.process)
      }).end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static matches = async (req, res, next) => {
    try {
      const matches = await DB.sportsBookMatches(
        req.query.page,
        req.query.limit,
        req.query.where
      );
      res.success.data({
        ...matches,
        data: matches.data.map(sportsbook_matches.process)
      }).end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static participants = async (req, res, next) => {
    try {
      const participants = await DB.sportsBookParticipants(
        req.query.page,
        req.query.limit,
        req.query.where
      );
      res.success.data({
        ...participants,
        data: participants.data.map(sportsbook_participants.process)
      }).end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static regions = async (req, res, next) => {
    try {
      const regions = await DB.sportsBookRegions();
      res.success.data(regions.map(sportsbook_regions.process)).end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static selections = async (req, res, next) => {
    try {
      const selections = await DB.sportsBookSelections(
        req.query.page,
        req.query.limit,
        req.query.where
      );

      res.success.data({
        ...selections,
        data: selections.data.map(sportsbook_selections.process)
      }).end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static tournaments = async (req, res, next) => {
    try {
      const tournaments = await DB.sportsBookTournaments(
        req.query.page,
        req.query.limit,
        req.query.where
      );

      res.success.data({
        ...tournaments,
        data: tournaments.data.map(sportsbook_tournaments.process)
      }).end();
    } catch (e) {
      next(e);
    }
  }

  /** @type {import('express').RequestHandler} */
  static sports = async (req, res, next) => {
    try {
      const sports = await DB.getSports();
      res.success.data(sports.map(sport.process)).end();
    } catch (e) {
      next(e);
    }
  }
};
