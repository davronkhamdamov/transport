import { DataTypes, sequelize, UUIDV4 } from "../../config/config.js"

const Branch_per = sequelize.define('branch_per', {
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
    },
    updatePerModule: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    readPerModule: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }

})
export default Branch_per