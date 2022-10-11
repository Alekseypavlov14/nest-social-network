export const configuration = () => ({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  admin: process.env.DB_ADMIN,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
})