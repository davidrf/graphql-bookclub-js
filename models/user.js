module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      bio: DataTypes.TEXT,
      createdAt: DataTypes.DATE,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      pictureUrl: DataTypes.STRING,
      updatedAt: DataTypes.DATE,
      username: DataTypes.STRING,
    },
    {
      getterMethods: {
        fullName() {
          return `${this.firstName} ${this.lastName}`;
        },
      },
    },
  );
  User.associate = function(models) {
    User.hasMany(models.repository);
  };
  return User;
};
