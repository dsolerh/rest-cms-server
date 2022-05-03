// module.exports = {
//   development: {
//     username: "root",
//     password: "password",
//     database: "rest_cms_server",
//     host: "127.0.0.1",
//     port: 3306,
//     dialect: "mysql",
//     define: {
//       paranoid: true,
//       underscored: false,
//     },
//     sync: true,
//   },
//   test: {
//     username: process.env.CI_DB_USERNAME,
//     password: process.env.CI_DB_PASSWORD,
//     database: process.env.CI_DB_NAME,
//     host: "127.0.0.1",
//     port: 3306,
//     dialect: "mysql",
//   },
//   production: {
//     username: process.env.PROD_DB_USERNAME,
//     password: process.env.PROD_DB_PASSWORD,
//     database: process.env.PROD_DB_NAME,
//     host: process.env.PROD_DB_HOSTNAME,
//     port: process.env.PROD_DB_PORT,
//     dialect: "mysql",
//   },
// };
const config = {
  db: {
    name: process.env.DB_NAME || "rest_cms_server",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "password",
    host: process.env.DB_HOST || "127.0.0.1",
    port: parseInt(process.env.DB_PORT || "3306"),
    logging: process.env.DB_LOGGING == "true",
    sync: process.env.DB_SYNC == "true",
  },
};
export default config;
