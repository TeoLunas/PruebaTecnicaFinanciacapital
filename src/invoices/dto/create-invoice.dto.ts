import { IsBoolean, IsEmail, IsNumber, IsOptional, IsString, Min } from "class-validator";

export class CreateInvoiceDto {
    @IsNumber()
    numeroFactura: number;

    @IsString()
    fechaEmision: string;

    // Empresa emisora (cliente)
    @IsString()
    nombreEmpresa: string;

    @IsString()
    giroEmpresa: string;

    @IsEmail()
    emailEmpresa: string;

    @IsString()
    direccionEmpresa: string;

    @IsString()
    telefono: string;

    // Cliente (deudor)
    @IsString()
    rutCliente: string;

    @IsString()
    giroCliente: string;

    @IsString()
    direccionCliente: string;

    @IsString()
    comunaCliente: string;

    @IsString()
    ciudadCliente: string;

    @IsString()
    contactoCliente: string;

    @IsString()
    tipoCompraCliente: string;

    @IsString()
    tipoVentaCliente: string;

    // Detalle productos
    @IsOptional()
    @IsString()
    codigoProducto?: string;

    @IsString()
    descripcionProducto: string;

    @IsString()
    cantidad: string;

    @IsNumber()
    @Min(0)
    precio: number;

    @IsNumber()
    impuestoAdic: number;

    @IsOptional()
    @IsString()
    desc?: string;

    @IsNumber()
    @Min(0)
    valor: number;

    @IsString()
    formaPago: string;

    // Totales
    @IsNumber()
    @Min(0)
    montoNeto: number;

    @IsNumber()
    @Min(0)
    iva: number;

    @IsNumber()
    impuestoAdicional: number;

    @IsNumber()
    @Min(0)
    total: number;

    @IsBoolean()
    @IsOptional()
    active?: boolean;
}
