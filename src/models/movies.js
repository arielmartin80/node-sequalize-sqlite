module.exports = (sequelize, DataType) => {

    const Movies = sequelize.define('Movies', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataType.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        score: {
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
                max: 5
            }
        }

    })

    Movies.associate = (models) => {
        Tasks.hasMany(models.Characters)
    }

    return Movies

}