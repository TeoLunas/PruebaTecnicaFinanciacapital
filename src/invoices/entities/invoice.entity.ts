import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('invoices')
export class Invoice {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('integer')
    numeroFactura: number;
    @Column('text')
    fechaEmision: string;

    // Datos de la empresa que emite la facutura osea mi cliente. 
    @Column('text')
    nombreEmpresa: string;
    @Column('text')
    giroEmpresa: string;
    @Column('text')
    emailEmpresa: string;
    @Column('text')
    direccionEmpresa: string;
    @Column('text')
    telefono: string;

    // Datos del cliente en este caso seria el deudor.
    @Column('text')
    rutCliente:  string;
    @Column('text')
    giroCliente: string;
    @Column('text')
    direccionCliente: string;
    @Column('text')
    comunaCliente: string;
    @Column('text')
    ciudadCliente: string;
    @Column('text')
    contactoCliente: string;
    @Column('text')
    tipoCompraCliente: string;
    @Column('text')
    tipoVentaCliente: string;

    // Detalle de productos en venta;
    @Column('text')
    codigoProducto?: string;
    @Column('text')
    descripcionProducto: string;
    @Column('text')
    cantidad: string;
    @Column('text')
    precio: number;
    @Column('text')
    impuestoAdic: number;
    @Column('text')
    desc?: string;
    @Column('bigint')
    valor: number;
    @Column('text')
    formaPago: string;

    // Totales
    @Column('bigint')
    montoNeto: number;
    @Column('bigint')
    iva: number;
    @Column('bigint')
    impuestoAdicional: number;
    @Column('bigint')
    total: number;

}
