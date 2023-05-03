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
    update_Per: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    read_per: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }

})
export default Branch_per