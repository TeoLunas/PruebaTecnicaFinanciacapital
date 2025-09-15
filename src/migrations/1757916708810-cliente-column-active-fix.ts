import { MigrationInterface, QueryRunner } from "typeorm";

export class ClienteColumnActiveFix1757916708810 implements MigrationInterface {
    name = 'ClienteColumnActiveFix1757916708810'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "active"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "active" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "active"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "active" text NOT NULL DEFAULT true`);
    }

}
