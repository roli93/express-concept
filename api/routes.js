import express from 'express';

let routes = express.Router()

routes.get('/user', (req, res) => console.log('get users'));
routes.post('/user', (req, res) => console.log('post user'));
routes.get('/user/:userId', (req, res) => console.log('get user'));
routes.put('/user/:userId', (req, res) => console.log('put user'));
routes.delete('/user/:userId', (req, res) => console.log('delete user'));

routes.get('/book', (req, res) => console.log('get books'));
routes.post('/book', (req, res) => console.log('post book'));
routes.get('/book/:bookId', (req, res) => console.log('get book'));
routes.put('/book/:bookId', (req, res) => console.log('put book'));
routes.delete('/book/:bookId', (req, res) => console.log('delete book'));

routes.post('/user/:userId/book/:id', (req, res) => console.log('add book to user'));
routes.delete('/user/:userId/book/:id', (req, res) => console.log('remove book from user'));
routes.get('/user/:userId/book', (req, res) => console.log('get user books'));

export default routes;
