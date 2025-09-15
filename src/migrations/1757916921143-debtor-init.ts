import { MigrationInterface, QueryRunner } from "typeorm";

export class DebtorInit1757916921143 implements MigrationInterface {
    name = 'DebtorInit1757916921143'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "debtors" ("id" SERIAL NOT NULL, "nombre" text NOT NULL, "rut" text NOT NULL, "giro" text NOT NULL, "direccion" text NOT NULL, "comuna" text NOT NULL, "ciudad" text NOT NULL, "contacto" text NOT NULL, "active" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_115aff540a88a8b458f78376f08" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "debtors"`);
    }

}
