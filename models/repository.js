module.exports = (sequelize, DataTypes) => {
  const Repository = sequelize.define(
    'repository',
    {
      name: DataTypes.STRING,
      userId: DataTypes.UUID,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      isPrivate: DataTypes.BOOLEAN,
    },
    {},
  );
  Repository.associate = function(models) {
    Repository.belongsTo(models.user);
  };
  return Repository;
};
