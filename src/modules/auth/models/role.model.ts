import sequelize from "../../../common/database";
import { DataTypes, Model } from "sequelize";
import { getLang, setLang } from "../../../common/utilities/multi-lang";

export class Role extends Model {}

Role.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    label: {
      type: DataTypes.TEXT("medium"),
      allowNull: false,
      get: getLang(this, "label"),
      set: setLang(this, "label"),
    },

    CreatorId: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "id",
      },
      onUpdate: "cascade",
      onDelete: "cascade",
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    freezeTableName: true,
    tableName: "Role",
  }
);
