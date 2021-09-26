// import { getRepository } from "typeorm"
// import { Usuario } from "./entity/Usuario"

// export const Bootstrap = async () => {
//     const userRepo = getRepository(Usuario);
//     const user = userRepo.create({ nome: "Tony", sobrenome: "Lima", email: "w@w", password: "123", cpf: 123 });
//     await userRepo.save(user).catch(err => {
//         console.log('Erro: ', err)
//     });
//     console.log('New user saved', user);
// }