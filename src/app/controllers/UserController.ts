/* eslint-disable */
import { Request, Response } from 'express';
import { getRepository, createConnection } from 'typeorm';
// import dbConn from '../config/dbConfig'

import User from '../models/User'

class UserController {
    index(req: Request, res: Response) {
        // return res.send({ userID: req.userId })
        return res.render('index')
    }
    login(req: Request, res: Response) {
        return res.render('login')
    }
    loginPost(req: Request, res: Response) {
        return res.redirect('index')
    }
    cadastro(req: Request, res: Response) {
        // return res.send({ userID: req.userId })
        return res.render('cadastro')
    }
    cadastroPost(req: Request, res: Response) {

    }

    async store(req: Request, res: Response) {
        const repository = getRepository(User);
        const { email, password } = req.body;

        const userExists = await repository.findOne({ where: { email } });

        if (userExists) {
            return res.sendStatus(409); // user exists
        }

        const user = repository.create({ email, password });
        await repository.save(user)

        return res.json(user);
        // return user
    }

}

export default new UserController();