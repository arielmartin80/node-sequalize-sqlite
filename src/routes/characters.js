import { db } from '../db'

module.exports = app => {


    app.route('/characters')
        .get((req, res) => {
            Characters.findAll({})
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({ msg: error.message })
                })
        })

    .post((req, res) => {
        Characters.create(req.body)
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({ msg: error.message })
            })
    })

}