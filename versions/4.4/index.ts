import Avatars from '@dicebear/avatars';

import * as styles from './collection';
import schema from './schemas/core';

const routes = [
  // Legacy API Routes
  `/4.4/v2/:style/.:format`,
  `/4.4/v2/:style/:seed(^.*(?=\.(svg))).:format`,

  `/4.4/api/:style/.:format`,
  `/4.4/api/:style/:seed(^.*(?=\.(svg))).:format`,

  // New API Routes
  '/4.4/:style/:format',
  '/4.4/:style/:seed/:format',
];

const createAvatar = (style: any, options: any) => {
  let avatars = new Avatars(style);

  return avatars.create(options.seed, options);
};

export { routes, createAvatar, schema, styles };