import { MigrationInterface, QueryRunner } from "typeorm";

export class ClienteAddColums1757919414916 implements MigrationInterface {
    name = 'ClienteAddColums1757919414916'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "client" DROP CONSTRAINT "UQ_6436cc6b79593760b9ef921ef12"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "addres"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "legalRepresentative"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "active"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "nombre" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" ADD "rut" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" ADD CONSTRAINT "UQ_c585d4282f16dc1b113b3fa0515" UNIQUE ("rut")`);
        await queryRunner.query(`ALTER TABLE "client" ADD "giro" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" ADD "direccion" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" ADD "comuna" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" ADD "ciudad" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" ADD "correoElectronico" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" ADD CONSTRAINT "UQ_07dce70f2ea931ca1da5d19c34b" UNIQUE ("correoElectronico")`);
        await queryRunner.query(`ALTER TABLE "client" ADD "telefono" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" ADD "representanteLegal" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" ADD "activo" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "activo"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "representanteLegal"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "telefono"`);
        await queryRunner.query(`ALTER TABLE "client" DROP CONSTRAINT "UQ_07dce70f2ea931ca1da5d19c34b"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "correoElectronico"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "ciudad"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "comuna"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "direccion"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "giro"`);
        await queryRunner.query(`ALTER TABLE "client" DROP CONSTRAINT "UQ_c585d4282f16dc1b113b3fa0515"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "rut"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "active" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "client" ADD "legalRepresentative" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" ADD "addres" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" ADD "phone" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" ADD "email" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" ADD CONSTRAINT "UQ_6436cc6b79593760b9ef921ef12" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "client" ADD "name" text NOT NULL`);
    }

}
