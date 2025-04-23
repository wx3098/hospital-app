module.exports = (sequelize, DataTypes) => {
  const MedicalLog = sequelize.define("MedicalLog", {
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    hospital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cost: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    medicine: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    memo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return MedicalLog;
};
