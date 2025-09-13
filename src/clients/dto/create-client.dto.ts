import { IsBoolean, IsOptional, IsString, MinLength } from "class-validator";

export class CreateClientDto {

    @IsString()
    @MinLength(1)
    name: string;

    @IsString()
    @IsOptional()
    email: string;

    @IsString()
    @IsOptional()
    phone: string;

    @IsString()
    @IsOptional()
    addres: string;

    @IsString()
    @IsOptional()
    legalRepresentative: string;

    @IsBoolean()
    @IsOptional()
    active: boolean;
}
