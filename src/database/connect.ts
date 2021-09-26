// import { createConnection } from 'typeorm';

// createConnection().then(() => console.log('📦 Successfully connected with database'));

import "reflect-metadata";
import { createConnection } from "typeorm";
// import { Bootstrap } from "./bootstrap";
import { Usuario } from "./entity/Usuario";

createConnection()
    .then(async connection => {
        // console.log('Inserting a new user into database...')
        // const usuario = new Usuario();
        // usuario.nome = "Weslley";
        // usuario.sobrenome = "BR";
        // usuario.password = "123";
        // usuario.email = "e@e";
        // usuario.cpf = 11111;

        // await connection.manager.save(usuario);
        // console.log('Saved a new user with id: ' + usuario.id);
        // console.log('Loading users from database...');
        // const users = await connection.manager.find(Usuario);
        // console.log('Loaded users: ', users);
        // await Bootstrap().catch(err => {
        //     console.log(err)
        // });
    }).catch(error => console.log(error));
