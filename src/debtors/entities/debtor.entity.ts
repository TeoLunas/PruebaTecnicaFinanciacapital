import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('debtors')
export class Debtor {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    nombre: string;
    
    @Column('text', {unique: true})
    rut: string;
    
    @Column('text')
    giro: string;
    
    @Column('text')
    direccion: string;
    
    @Column('text')
    comuna: string;
    
    @Column('text')
    ciudad: string;
    
    @Column('text')
    contacto: string;
    
    @Column('boolean', {default: true})
    activo: boolean;
}
