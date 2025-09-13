import { MigrationInterface, QueryRunner } from "typeorm";

export class ClientColumnCorrectionLegalRepresentative1757724471945 implements MigrationInterface {
    name = 'ClientColumnCorrectionLegalRepresentative1757724471945'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" RENAME COLUMN "LegalRepresentative" TO "legalRepresentative"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" RENAME COLUMN "legalRepresentative" TO "LegalRepresentative"`);
    }

}
