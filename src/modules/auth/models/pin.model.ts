import sequelize from "../../../common/database";
import { DataTypes, Model } from "sequelize";

export class Pin extends Model {}

Pin.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
      unique: true,
    },
    pin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM,
      values: ["activate-account", "forgot-password"],
      defaultValue: "activate-account",
    },
  },
  {
    sequelize: sequelize,
    paranoid: false,
    freezeTableName: true,
    tableName: "Pin",
  }
);
