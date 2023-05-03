import { DataTypes, sequelize, UUIDV4 } from "../../config/config"

const Transport_per = sequelize.define('transport_per', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true,
        defaultValue: UUIDV4()
    },
    staff_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    create: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    update: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    read: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    delete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})
export default Transport_per