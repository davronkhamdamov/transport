import { sequelize, DataTypes, UUIDV4 } from '../../config/config.js'

const Staffs = sequelize.define('staffs', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true,
        defaultValue: UUIDV4(),
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            is: /^[a-zA-Z\-]+$/
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birth_date: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isDate: true,
            isAfter: "1949-01-01",
            isBefore: "2023-04-02"
        }
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: {
                args: ['male', 'female'],
                message: "Gender must be male or famale"
            },
        }
    },
    branch_id: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

export default Staffs