/* eslint-disable */
import { Request, Response } from 'express';
import { Usuario } from '../../database/entity/Usuario';
import { getRepository, createConnection } from 'typeorm';
import dbConn from '../config/dbConfig'

// import User from '../models/User'

class UserController {
    async index(req: Request, res: Response) {
        // return res.send({ userID: req.userId })
        const userRepo = getRepository(Usuario);
        const user = await userRepo.findOne({ where: { nome: 'w' } });
        // user.nome = "w";
        res.render('index', { user })

        // return res.render('index')
    }
    login(req: Request, res: Response) {
        return res.render('login')
    }
    async loginPost(req: Request, res: Response) {
        // const repository = getRepository(Usuario);
        // const { email, password } = req.body;

        // const userExists = await repository.findOne({ where: { email } });

        // if (userExists) {
        //     return res.sendStatus(409); // user exists
        // }

        // const user = repository.create({ email, password });
        // await repository.save(user)
        return res.render('cadastro')
    }
    cadastro(req: Request, res: Response) {
        return res.render('cadastro')
    }
    async cadastroPost(req: Request, res: Response) {
        const userRepo = getRepository(Usuario);
        const { nome, sobrenome, email, password, cpf } = req.body;
        const user = userRepo
            .create({ agencia: 1, conta: 1, nome, sobrenome, email, password, cpf, saldo: '1000.0' });
        await userRepo.save(user).catch(err => {
            console.log('Erro: ', err)
        });
        console.log('New user saved', user);
        return res.redirect('/')
    }
    async transferencia(req: Request, res: Response) {
        const userRepo = getRepository(Usuario);
        const user = await userRepo.findOne({ where: { cpf: 20 } });

        return res.render('transferencia', { user })
    }
    // async transferenciaPost(req: Request, res: Response) {
    //     const userRepo = getRepository(Usuario);
    //     const { cpf, saldo } = req.body;
    //     const user = await userRepo.createQueryBuilder()
    //         .update(Usuario)
    //         .set({ nome: 'Weslley', sobrenome: 'BR', saldo: '100999.99' })
    //         .where('usuarios.nome = :nome', { nome: 'w' })
    //         .execute();
    //     console.log(user)

    //     return res.render('transferencia', { user })
    // }
}

export default new UserController();


