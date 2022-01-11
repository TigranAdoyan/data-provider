const { EOL } = require('os');
const util = require('util');
const morgan = require('morgan');
const CP = require('../helpers/color-picker');

module.exports = morgan((tokens, req, res) => {
  const response =  res.success.ended ? res.success : 
                    res.error.ended   ? res.error 
                                      : null;

  const log = [
    !response || response.responseObject.error
      ? CP.BgRed('============ ERROR ===========')
      : CP.BgGreen(CP.FgBlack('=========== SUCCESS ==========')),
    EOL + CP.BgYellow(CP.FgBlack('  ' + tokens.date(req, res, 'clf') + '  ')),
    CP.Bright(CP.FgMagenta(tokens.method(req, res))),
    CP.FgMagenta(tokens.url(req, res)),
    CP.Status(tokens.status(req, res)),
    CP.FgMagenta(tokens['response-time'](req, res) + ' ms'),
    CP.FgMagenta(tokens.res(req, res, 'content-length'))
  ];

  log.push(EOL + CP.FgGreen('======== REQUEST DATA ========'));

  log.push(EOL + CP.Bright(CP.FgBlue('headers ')) + CP.Raw({
    project: req.headers.project,
    authorization: req.headers.authorization
  }))
  if (req.query && Object.keys(req.query).length) {
    log.push(EOL + CP.Bright(CP.FgYellow('query ')) + CP.Raw(req.query));
  }
  if (req.params && Object.keys(req.params).length) {
    log.push(EOL + CP.Bright(CP.FgBlue('params ')) + CP.Raw(req.params));
  }
  if (req.body && Object.keys(req.body).length) {
    log.push(EOL + CP.Bright(CP.FgCyan('body ')) + CP.Raw({...req.body}));
  }

  if (!response) {
    log.push(EOL + CP.Bright(CP.FgRed('========= NO RESPONSE ========')));
  } else if (response.responseObject.error) {
    log.push(
      EOL + CP.Bright(CP.FgRed('======== RESPONSE DATA =======')) +
      EOL + CP.Raw(response.responseObject)
    );
  } else {
    log.push(
      EOL + CP.Bright(CP.FgGreen('======== RESPONSE DATA =======')) +
      EOL + util.inspect(response.responseObject, {
        colors: true,
        depth: 1,
        maxArrayLength: 4
      })
    );
  }

  log.push(EOL, EOL);
  return log.join(' ');
});
