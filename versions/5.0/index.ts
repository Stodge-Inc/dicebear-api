import { createAvatar, schema } from '@dicebear/core';
import * as styles from '@dicebear/collection';

const routes = [
  '/5.9/:style/:format',
  '/5.x/:style/:format',
  '/5.9/:style/:seed/:format',
  '/5.x/:style/:seed/:format',
];

export { routes, createAvatar, schema, styles };
