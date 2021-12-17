import * as db from './db';
import * as pr from '../helpers/projects';

const projects = pr();

declare global {
  var _projects: typeof projects
}

export {
  db
}