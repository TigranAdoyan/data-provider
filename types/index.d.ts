import { Readable } from 'stream';
import * as db from './db';
import * as pr from '../helpers/projects';
import * as configs from '../helpers/configs';
import ResponseManager from '../managers/response';
import { number } from 'joi';

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
  var _configs: typeof configs
}

interface PaginationResult<T> {
  current_page: number,
  total_pages: number,
  current_count: number,
  total_count: number,
  limit: number,
  data: T[]
}

type Where<T> = {
  operator: "=" | ">" | "<" | ">=" | "<=",
  value: T
}

type WhereStructure<T> = {
  [index: string]: Where<T>
}

export {
  db,
  PaginationResult,
  WhereStructure
}