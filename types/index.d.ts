import { Readable } from 'stream';
import * as db from './db';
import * as pr from '../helpers/projects';
import ResponseManager from '../managers/response';

const projects = pr();

declare global {
  namespace Express {
    interface Request {
      project: string
    }

    interface Response {
      success: ResponseManager,
      error: ResponseManager,
      stream: <T = any>(readableStream: Readable, ...middlewares: ((chunk: T) => Promise<T>)[]) => void
    }
  }

  var _projects: typeof projects
}

export {
  db
}