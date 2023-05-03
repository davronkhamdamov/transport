import { DataTypes, UUIDV4, sequelize } from '../../config/config.js'

const Branch = sequelize.define('branch', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true,
        defaultValue: UUIDV4()
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    adress: {
        type: DataTypes.STRING,
        allowNull: false
    }

})
export default Branch