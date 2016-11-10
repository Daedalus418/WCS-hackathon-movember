import express from 'express';
import Comment from '../models/comment.js';

let router = express.Router();

module.exports = (app) => {

    var comment = new Comment();

    router.get('/', comment.findAll);

    router.get('/:id', comment.findById);

    router.post('/', comment.create);

    router.put('/:id', comment.update);

    router.delete('/:id', comment.delete);

    app.use('/comments', router);

}
