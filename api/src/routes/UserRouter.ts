import express, { Router } from 'express'
import UserController from '../controllers/UserController'
import { generateAuthCodeValidators, verifyAuthCodeValidators } from '../validations/authValidators'
import authorize from '../middlewares/authorize'

export default class UserRouter {
    public router: Router
    public userController: UserController

    constructor() {
        this.router = express.Router()
        this.userController = new UserController()
        this.registerRoutes()
    }

    registerRoutes() {
        this.router.post('/generateauthcode', generateAuthCodeValidators, this.userController.generateAuthCode.bind(this.userController))
        this.router.post('/verifyauthcode', verifyAuthCodeValidators, this.userController.verifyAuthCode.bind(this.userController))
        this.router.post('/verifyuser', authorize, this.userController.verifyUser.bind(this.userController))
        this.router.post('/signout', authorize, this.userController.signOut.bind(this.userController))
    }

    getRouter() {
        return this.router
    }
}