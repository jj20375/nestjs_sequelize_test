import { DataTypes, Model } from "sequelize";
import SequelizeConfig from "../connection";

const sequelize = SequelizeConfig;

const Users = sequelize.define(
    "Users",
    {
        firstName: {
            type: DataTypes.STRING,
            // 允許null
            allowNull: true,
        },
        // 免費開始的時間
        lastName: {
            type: DataTypes.STRING,
            // 允許null
            allowNull: true,
        },
        // 免費結束的時間
        email: {
            type: DataTypes.STRING,
            // 允許null
            allowNull: true,
            field: "email",
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        timestamps: true,
        tableName: "Users",
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    }
);

export default Users;
