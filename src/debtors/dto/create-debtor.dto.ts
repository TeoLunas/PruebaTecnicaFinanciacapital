import { IsBoolean, IsOptional, IsString } from "class-validator";

export class CreateDebtorDto {
    @IsString()
    nombre: string;

    @IsString()
    rut: string;

    @IsString()
    giro: string;

    @IsString()
    direccion: string;

    @IsString()
    comuna: string;

    @IsString()
    ciudad: string;

    @IsString()
    contacto: string;

    @IsBoolean()
    @IsOptional()
    active?: boolean;
}
