
export const EnvConfiguration = () => ({
    enviroment: process.env.NODE_ENV || 'dev',
    dbUri: process.env.DBURI,
    port: process.env.PORT,
})