const { Model, DataTypes } = require('sequelize')

class Post extends Model {
    static init(connection){
        super.init({
            title: DataTypes.STRING,
            content: DataTypes.TEXT
        }, {
            sequelize: connection
        })
    }

    static associate(models){
        this.hasMany(models.Comment, { foreignKey: 'post_id', as: 'comments' })
    }
}

module.exports = Post