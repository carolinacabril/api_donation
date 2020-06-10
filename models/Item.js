module.exports = (sequelize, DataType) =>{
    const Item = sequelize.define('Item', {
        id_item:{
            type:DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome:{
            type:DataType.STRING,
            allowNull: false
        },
        descricao:{
            type:DataType.STRING,
            allowNull: false
        }
    }, {
        tableName: 'itens'
    })

    return Item;
}