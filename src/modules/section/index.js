const sectionRoute = require("./routes/section.route");

module.exports = (app) => {
  app.use("section", sectionRoute);
};
