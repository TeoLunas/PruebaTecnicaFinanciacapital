import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Client {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    name: string;

    @Column('text', {unique: true})
    email: string;

    @Column('text')
    phone: string;

    @Column('text')
    addres: string;

    @Column('text')
    legalRepresentative: string;

    @Column('text', {
        default: true
    })
    active: boolean;

}
