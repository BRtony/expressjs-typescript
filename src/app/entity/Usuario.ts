import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    nome: string;

    @Column({
        length: 25
    })
    sobrenome: string;

    @Column()
    email: string;

    @Column() // detecta varchar
    password: string;

    @Column()
    cpf: number;

}
