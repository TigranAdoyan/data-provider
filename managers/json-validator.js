const { EOL } = require('os');
const { Transform } = require('stream');

module.exports = class JSONValidator extends Transform {
  /**
   * @param {Object} options
   * @param {import('stream').TransformOptions} options.options
   */
  constructor(options = {}) {
    super({...options});

    /** @private */
    this._buffer = '.';
    /** @private */
    this._error = null;
  }

  restart() {
    this._error = null;
    this._buffer = '';
    this.resume();
    console.log('restarted');
  }

  /**
   * @param {Buffer | string} chunk 
   * @param {BufferEncoding} encoding 
   * @param {import('stream').TransformCallback} next 
   */
  _transform(chunk, encoding, next) {
    const str = chunk.toString();
    const splittedData = str.split(EOL);

    while (splittedData.length) {
      try {
        this._buffer += splittedData.shift();
        if (this._buffer && splittedData.length > 0) {
          const obj = JSON.parse(this._buffer);
          this.push(this._readableState.objectMode ? obj : this._buffer);
          this._buffer = '';
        }
      } catch (e) {
        console.log(e.message);
        const msg = 'data fetching paused because of invalid json => ' + this._buffer;
        console.log(msg);
        this._error = new SyntaxError(msg);
        this.pause();
        this.emit('syntaxerror', this._error);
      }
    }

    next();
  }

  _flush(next) {
    if (this._buffer !== '') {
      return next(new Error('invalid json'));
    }
    return next();
  }
}