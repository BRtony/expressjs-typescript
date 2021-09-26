import "reflect-metadata";
import { createConnection } from "typeorm";
import { Usuario } from "../database/entity/Usuario";

createConnection().then(async connection => {
        console.log('Inserting a new user into database...')
        const usuario = new Usuario();
        usuario.nome = "Weslley";
        usuario.sobrenome = "BR";
        usuario.password = "123";
        usuario.email = "e@e";
        usuario.cpf = 11111;

        await connection.manager.save(usuario);
        console.log('Saved a new user with id: ' + usuario.id);
        console.log('Loading users from database...');
        const users = await connection.manager.find(Usuario);
        console.log('Loaded users: ', users);

    }).catch(error => console.log(error));

    // {
    //     type: "mysql",
    //     host: "localhost",
    //     port: 3306,
    //     username: "root",
    //     password: "0200",
    //     database: "tsproj",
    //     entities: [
    //         __dirname + "/entity/*.ts"
    //     ],
    //     synchronize: true,
    //     logging: false
    // }