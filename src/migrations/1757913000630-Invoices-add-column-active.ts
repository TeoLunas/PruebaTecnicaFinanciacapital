import { MigrationInterface, QueryRunner } from "typeorm";

export class InvoicesAddColumnActive1757913000630 implements MigrationInterface {
    name = 'InvoicesAddColumnActive1757913000630'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "invoices" ADD "active" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "invoices" DROP COLUMN "active"`);
    }

}
