const { Model, DataTypes } = require('sequelize')

class Comment extends Model {
    static init(connection){
        super.init({
            content: DataTypes.TEXT
        }, {
            sequelize: connection
        })
    }

    static associate(models){
        this.belongsTo(models.Post, { foreignKey: 'post_id', as: 'post' })
    }
}

module.exports = Comment