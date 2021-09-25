// import "reflect-metadata";
// import { createConnection } from "typeorm";
// import { Usuario } from "./entity/Usuario";

// createConnection({
//     type: "mysql",
//     host: "localhost",
//     port: 3306,
//     username: "user",
//     password: "user",
//     database: "newuser",
//     entities: [
//         __dirname + "/entity/*.ts"
//     ],
//     synchronize: true,
//     logging: false
// }).then(async connection => {
//     const usuario = new Usuario();
//     usuario.nome = "asdsad";
//     usuario.sobrenome = "kk";
//     usuario.password = "123";
//     usuario.email = "e@e";
//     usuario.cpf = 11111;

//     await connection.manager.save(usuario);

// }).catch(error => console.log(error));