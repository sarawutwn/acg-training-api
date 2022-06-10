module.exports = (sequelize, Sequelize) => {
    const Calculators = sequelize.define("calculator", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      ip_address: {
        type: Sequelize.STRING,
      },
      start_value: {
          type: Sequelize.INTEGER,
      },
      end_value: {
          type: Sequelize.INTEGER,
      },
      value_items: {
          type: Sequelize.ARRAY(Sequelize.INTEGER)
      }
    });
    return Calculators;
  };
  