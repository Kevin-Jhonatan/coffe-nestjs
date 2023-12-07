export const SERVER_PORT = 'SERVER_PORT';
export const DB_HOST = 'DB_HOST';
export const DB_PORT = 'DB_PORT';
export const DB_USER = 'DB_USER';
export const DB_PASSWORD = 'DB_PASSWORD';
export const DB_DATABASE = 'DB_DATABASE';

export const WS_PORT = 'WS_PORT';

import * as dotenv from 'dotenv';
dotenv.config({ path: '.development.env' });
export const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET;
export const CLIENT_GOOGLE = process.env.CLIENT_GOOGLE;
export const SONG_REPOSITORY = 'SONG_REPOSITORY';
export const LYRICS_REPOSITORY = 'USERS_REPOSITORY';
export const ROLES_REPOSITORY = 'ROLES_REPOSITORY';
export const USERS_REPOSITORY = 'USERS_REPOSITORY';

export const JWT_SECRET = 'JWT_SECRET';
export const HISTORY_CLEANUP_DAYS = 30;
