import { MigrationInterface, QueryRunner } from "typeorm";

export class InvoicesInitCreation1757911005288 implements MigrationInterface {
    name = 'InvoicesInitCreation1757911005288'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "invoices" ("id" SERIAL NOT NULL, "numeroFactura" integer NOT NULL, "fechaEmision" text NOT NULL, "nombreEmpresa" text NOT NULL, "giroEmpresa" text NOT NULL, "emailEmpresa" text NOT NULL, "direccionEmpresa" text NOT NULL, "telefono" text NOT NULL, "rutCliente" text NOT NULL, "giroCliente" text NOT NULL, "direccionCliente" text NOT NULL, "comunaCliente" text NOT NULL, "ciudadCliente" text NOT NULL, "contactoCliente" text NOT NULL, "tipoCompraCliente" text NOT NULL, "tipoVentaCliente" text NOT NULL, "codigoProducto" text NOT NULL, "descripcionProducto" text NOT NULL, "cantidad" text NOT NULL, "precio" text NOT NULL, "impuestoAdic" text NOT NULL, "desc" text NOT NULL, "valor" bigint NOT NULL, "formaPago" text NOT NULL, "montoNeto" bigint NOT NULL, "iva" bigint NOT NULL, "impuestoAdicional" bigint NOT NULL, "total" bigint NOT NULL, CONSTRAINT "PK_668cef7c22a427fd822cc1be3ce" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "invoices"`);
    }

}
