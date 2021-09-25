import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from 'typeorm';
import bcrypt from 'bcryptjs'
@Entity('users')
class User {
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column() // detecta varchar
    email: string;

    @Column() // detecta varchar
    password: string;

    @BeforeInsert() // pode-se usar mais de um decorator
    @BeforeUpdate()
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8) // encriptando e adicionando salt
    }
}

export default User;