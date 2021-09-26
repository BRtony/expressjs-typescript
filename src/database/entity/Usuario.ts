import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'usuarios' })
export class Usuario {
    @PrimaryGeneratedColumn('uuid') // primary, unique and auto increment
    id: number;

    @Column({
        type: 'int',
    })
    agencia: number;

    @Column({
        type: 'int',
    })
    conta: number;

    @Column('text')
    nome: string;

    @Column({
        nullable: false,
        type: 'varchar',
        length: 25
    })
    sobrenome: string;

    @Column()
    email: string;

    @Column() // detecta varchar
    password: string;

    @Column()
    cpf: number;

    @Column()
    saldo: string;

}
