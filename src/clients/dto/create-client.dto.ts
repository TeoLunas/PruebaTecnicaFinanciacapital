import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, Length, MinLength } from "class-validator";

export class CreateClientDto {

    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    @Length(8, 12)
    rut: string;

    @IsString()
    @IsNotEmpty()
    giro: string;

    @IsString()
    @IsNotEmpty()
    direccion: string;

    @IsString()
    @IsNotEmpty()
    comuna: string;

    @IsString()
    @IsNotEmpty()
    ciudad: string;

    @IsEmail()
    @IsNotEmpty()
    correoElectronico: string;

    @IsString()
    @IsNotEmpty()
    telefono: string;

    @IsString()
    @IsNotEmpty()
    representanteLegal: string;

    @IsBoolean()
    @IsOptional()
    activo?: boolean;
}
