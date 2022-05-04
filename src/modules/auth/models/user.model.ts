import sequelize from "../../../common/database";
import { DataTypes, Model } from "sequelize";
import { hashSync, compareSync } from "bcrypt";

export class User extends Model {
  isValidPassword(password: string): boolean {
    return compareSync(password, this.get("password") as string);
  }
}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
      unique: true,
    },
    avatar: {
      type: DataTypes.TEXT("long"),
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set: function (password: string) {
        this.setDataValue("password", hashSync(password, 11));
      },
    },

    status: {
      type: DataTypes.ENUM,
      values: ["pending", "enabled", "disabled"],
      defaultValue: "pending",
    },
    lastLogout: {
      type: DataTypes.DATE,
    },

    RoleId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Role",
        key: "id",
      },
      onUpdate: "cascade",
      onDelete: "cascade",
      allowNull: false,
    },
    CreatorId: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "id",
      },
      onUpdate: "cascade",
      onDelete: "cascade",
      allowNull: true,
    },
  },
  {
    sequelize: sequelize,
    freezeTableName: true,
    tableName: "User",
  }
);

export function asociate() {
  User.belongsTo(sequelize.models.Role);
  User.belongsTo(sequelize.models.User, { as: "Creator" });
}
