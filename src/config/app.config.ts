
export const EnvConfiguration = () => ({
    enviroment: process.env.NODE_ENV || 'dev',
    port: process.env.PORT,
    dbhost: process.env.DB_HOST,
    dbport: process.env.DB_PORT,
    database: process.env.DB_NAME,
    usernamedb: process.env.DB_USERNAME,
    passwordb: process.env.DB_PASSWORD
})