import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Client } from './clients/entities/client.entity';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: +(process.env.DB_PORT || 5432),
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'ClaveSecreta1',
    database: process.env.DB_NAME || 'PruebaTecnicaFinanciaCapital',
    entities: [Client],
    migrations: ['src/migrations/*.ts'],
    synchronize: false,
});