import { MigrationInterface, QueryRunner } from "typeorm";

export class ClientColumnEmailUnique1757726934090 implements MigrationInterface {
    name = 'ClientColumnEmailUnique1757726934090'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" ADD CONSTRAINT "UQ_6436cc6b79593760b9ef921ef12" UNIQUE ("email")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP CONSTRAINT "UQ_6436cc6b79593760b9ef921ef12"`);
    }

}
