import { Sequelize, DataTypes } from 'sequelize'
//const { Sequelize, DataTypes } = require('sequelize')


let db = null

module.exports = app => {

    const config = app.libs.config
        //console.log(config)

    if (!db) {

        const sequelize = new Sequelize(
            config.database,
            config.username,
            config.password,
            config.params
        )

        db = {
            Sequelize,
            sequelize,
            models: {}
        }

        //creacion de tablas

        const tasks = require('./models/tasks.js')(sequelize, DataTypes)
        const users = require('./models/users.js')(sequelize, DataTypes)

        db.models[tasks.name] = tasks
        db.models[users.name] = users

        //Object.keys(db.models).forEach(key => {
        //    db.models[key].associate(db.models)
        //})

        //db.sequelize.sync({ force: false })
        //    .then(() => {
        //        console.log('yes re-sync done!')
        //    })

    }

    return db


}