import mongoose from 'mongoose';

const moustacheSchema = new mongoose.Schema({
    image: String,
    like: Number,
    lat: String,
    lng: String

});

let model = mongoose.model('Moustache', moustacheSchema);

export default class Moustache {

    findAll(req, res) {
        model.find({}, (err, moustaches) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(moustaches);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, moustache) => {
            if (err || !moustache) {
                res.sendStatus(403);
            } else {
                res.json(moustache);
            }
        });
    }

    create(req, res) {
        model.create({
                image: req.body.image,
                like: req.body.like,
                lat: req.body.lat,
                lng: req.body.lng
            },
            (err, moustache) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(moustache);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, req.body , (err, moustache) => {
            if (err || !moustache) {
                res.status(500).send(err.message);
            } else {
                res.json(moustache);
            }
        });
    }

    delete(req, res) {
        model.findByIdAndRemove(req.params.id, (err) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.sendStatus(200);
            }
        })
    }
}
