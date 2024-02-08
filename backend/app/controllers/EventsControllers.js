const EventModel = require('../models/EventModel')

module.exports = {
    index: (req, res, next) => {
        EventModel.find({}).then(
            data => res.send(data)
        ).catch(
            //  err => throw err
        )
    },

    create: (req, res, next) => {
        const event = new EventModel({
            name: req.body.name,
            event: req.body.event,
            city: req.body.city
        })
        event.save().then(() => {
            return res.status(201).json(event)
        })
    },

    delete: (req, res, next) => {
        const id = req.params.id


        EventModel.findByIdAndDelete(id)
            .then(() => {
                res.status('200').json({
                    id: id,
                    deleted: true
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: 'Error while deleting event',
                    error: err
                })
            })

    },
}