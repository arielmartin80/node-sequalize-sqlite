module.exports = (sequalize, DataType) => {

    const Characters = sequalize.define('Characters', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        edad: {
            type: DataType.INTEGER,
            allowNull: true,
        },
        peso: {
            type: DataType.INTEGER,
            allowNull: true,
        },
        historia: {
            type: DataType.STRING,
            allowNull: true
        }

    })

    //Characters.associate = (models) => {
    //   Characters.hasMany(models.Movies)
    //}

    return Characters

}