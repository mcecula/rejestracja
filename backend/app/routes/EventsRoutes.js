const express = require('express');
const router = express.Router();
const EventsControllers = require('../controllers/EventsControllers')

module.exports = () => {

    router.get('/', EventsControllers.index)

    router.post('/add', EventsControllers.create)

    router.delete('/delete/:id', EventsControllers.delete)

    return router
}