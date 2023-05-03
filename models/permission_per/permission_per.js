import { DataTypes, sequelize, UUIDV4 } from "../../config/config.js"

const Permission_per = sequelize.define('permission_per', {
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
    updatePer: {
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
export default Permission_per