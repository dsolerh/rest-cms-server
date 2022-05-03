import sequelize from "../../../common/database";
import { DataTypes, Model } from "sequelize";

class User extends Model {}
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
      allowNull:false,
      // validate: 
    }
  },
  {
    sequelize,
  }
);
export default User;
// const User = sequelize.define("User", {
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// });
