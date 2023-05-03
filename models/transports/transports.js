import { DataTypes, sequelize, UUIDV4 } from "../../config/config.js"

const Transports = sequelize.define('transports', {
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
    branch_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Transports