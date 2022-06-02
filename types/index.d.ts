import { Readable } from 'stream';
import * as db from './db';
import * as pr from '../helpers/projects';
import * as configs from '../helpers/configs';
import ResponseManager from '../managers/response';
import { number } from 'joi';
import { ValidationChain } from 'express-validator';

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

type AllowedOperators = "=" | ">" | "<" | ">=" | "<="

type Where = {
  table: string,
  column: string,
  operator: AllowedOperators,
  value: any
}

type WhereStructure = {
  [index: string]: Where
}

type ConditionValidator<T> = <V = T>(options: {
  field: string;
  key: string;
  allowedOperators?: AllowedOperators[];
  valueValidator?: (value: V) => boolean;
}) => ValidationChain[]

export {
  db,
  PaginationResult,
  WhereStructure,
  ConditionValidator
}