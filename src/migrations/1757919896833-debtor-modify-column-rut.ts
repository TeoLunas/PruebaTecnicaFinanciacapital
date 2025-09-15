import { MigrationInterface, QueryRunner } from "typeorm";

export class DebtorModifyColumnRut1757919896833 implements MigrationInterface {
    name = 'DebtorModifyColumnRut1757919896833'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "debtors" DROP COLUMN "active"`);
        await queryRunner.query(`ALTER TABLE "debtors" ADD "activo" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "debtors" ADD CONSTRAINT "UQ_5851675a3a915b1809357b22217" UNIQUE ("rut")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "debtors" DROP CONSTRAINT "UQ_5851675a3a915b1809357b22217"`);
        await queryRunner.query(`ALTER TABLE "debtors" DROP COLUMN "activo"`);
        await queryRunner.query(`ALTER TABLE "debtors" ADD "active" boolean NOT NULL DEFAULT true`);
    }

}
