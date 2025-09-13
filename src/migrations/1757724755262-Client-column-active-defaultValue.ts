import { MigrationInterface, QueryRunner } from "typeorm";

export class ClientColumnActiveDefaultValue1757724755262 implements MigrationInterface {
    name = 'ClientColumnActiveDefaultValue1757724755262'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" ALTER COLUMN "active" SET DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" ALTER COLUMN "active" DROP DEFAULT`);
    }

}
