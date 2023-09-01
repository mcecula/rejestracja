module.exports = {
    index:
        (req, res, next) => {
            res.json({
                events: [
                    {
                        name: 'Mariusz Cecula',
                        event: { key: 'front-end', vale: 'Front End' },
                        city: { kay: 'warsaw', value: 'Warszawa' }
                    },
                    {
                        name: 'Adam Maly',
                        event: { key: 'back-end', vale: 'Back End' },
                        city: { kay: 'cracow', value: 'Krakow' }
                    },
                ]
            })
        },
    create: (req, res, next) => {
        const event = req.body
        res.end(JSON.stringify(event))
    },
    delete: (req, res, next) => {
        res.send('delete')
    },
}