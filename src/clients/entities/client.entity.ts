import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Client {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column('text')
    nombre: string;
    
    @Column('text', { unique: true})
    rut: string;
    
    @Column('text')
    giro: string;
    
    @Column('text')
    direccion: string;
    
    @Column('text')
    comuna: string;

    @Column('text')
    ciudad: string;

    @Column('text', {unique: true})
    correoElectronico: string;
    
    @Column('text')
    telefono: string;
    
    @Column('text')
    representanteLegal: string;

    @Column('bool', {
        default: true
    })
    activo: boolean;

}
