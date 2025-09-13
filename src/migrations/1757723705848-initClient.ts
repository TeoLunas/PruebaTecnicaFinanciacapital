import { MigrationInterface, QueryRunner } from "typeorm";

export class InitClient1757723705848 implements MigrationInterface {
    name = 'InitClient1757723705848'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "client" ("id" SERIAL NOT NULL, "name" text NOT NULL, "email" text NOT NULL, "phone" text NOT NULL, "addres" text NOT NULL, "LegalRepresentative" text NOT NULL, "active" text NOT NULL, CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "client"`);
    }

}
