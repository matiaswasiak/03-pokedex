/* eslint-disable prettier/prettier */
export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'env',
  mongodb: process.env.MONGODB,
  port: process.env.PORT || 3002,
  defaultLimit: process.env.DEFAULT_LIMIT || 7,
});
