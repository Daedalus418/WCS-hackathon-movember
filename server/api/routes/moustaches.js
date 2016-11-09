import express from 'express';
import Moustache from '../models/moustache.js';

let router = express.Router();

module.exports = (app) => {

    var moustache = new Moustache();

    router.get('/', moustache.findAll);

    router.get('/:id', moustache.findById);

    router.post('/', moustache.create);

    router.put('/:id', moustache.update);

    router.delete('/:id', moustache.delete);

    app.use('/moustaches', router);

}
