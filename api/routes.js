import express from 'express';
import UserController from '../controllers/user-controller.js';

let routes = express.Router()

routes.get('/user', UserController.listUsers);
routes.post('/user', UserController.createUser);
routes.get('/user/:userId', UserController.getUser);
routes.put('/user/:userId', UserController.updateUser);
routes.delete('/user/:userId', UserController.deleteUser);

routes.get('/book', (req, res) => console.log('get books'));
routes.post('/book', (req, res) => console.log('post book'));
routes.get('/book/:bookId', (req, res) => console.log('get book'));
routes.put('/book/:bookId', (req, res) => console.log('put book'));
routes.delete('/book/:bookId', (req, res) => console.log('delete book'));

routes.post('/user/:userId/book/:id', (req, res) => console.log('add book to user'));
routes.delete('/user/:userId/book/:id', (req, res) => console.log('remove book from user'));
routes.get('/user/:userId/book', (req, res) => console.log('get user books'));

export default routes;
