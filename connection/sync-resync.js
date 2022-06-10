module.exports = (reSync, db) => {
  const alter = false;
  if (reSync) {
    db.sequelize
      .sync({ force: true })
      .then(async () => console.log("re-sync done."));
  } else {
    db.sequelize.sync({ alter }).then(() => console.log("sync done."));
  }
};
