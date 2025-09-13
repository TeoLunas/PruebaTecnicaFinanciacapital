import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Client {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    name: string;

    @Column('text')
    email: string;

    @Column('text')
    phone: string;

    @Column('text')
    addres: string;

    @Column('text')
    LegalRepresentative: string;

    @Column('text')
    active: boolean;

}
