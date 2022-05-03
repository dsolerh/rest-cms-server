import { Sequelize } from "sequelize";
import config from "./config.database";

const sequelize = new Sequelize(
  config.db.name,
  config.db.user,
  config.db.password,
  {
    logging: config.db.logging,
    dialect: "mysql",
    host: config.db.host,
    port: config.db.port,
    define: {
      paranoid: true,
      underscored: false,
    },
    sync: {
      force: config.db.sync,
    },
  }
);

export default sequelize;
