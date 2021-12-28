const ResponseManager = require('../managers/response');
const { Transform } = require('stream');
const { EOL } = require('os');
const AppError = require('../managers/app-error');

/** @type {import("express").RequestHandler} */
module.exports = (req, res, next) => {
  function errorHandler(err) {
    console.error(new Error('error while getting/sending data'));
    console.error(err);
    next(new AppError('error while getting/sending data => ' + err.message, 500));
  }


  res.success = ResponseManager.success(res);
  res.error = ResponseManager.error(res);

  /** 
   * @param {import('stream').Readable} readableStream
   * @param {((chunk: any) => Promise<any>)[]} middlewares
   */
  res.stream = (readableStream, ...middlewares) => {
    readableStream
      .on('error', errorHandler)
      .pipe(new Transform({
        writableObjectMode: true,
        async transform(chunk, encoding, next) {
          let handledObj = chunk;
          for (const handle of middlewares) {
            handledObj = await handle(handledObj);
          }
          this.push(JSON.stringify(handledObj) + EOL);
          next();
        }
      }))
      .on('error', errorHandler)
      .pipe(res)
      .on('error', errorHandler);
    return readableStream;
  };

  next();
};
